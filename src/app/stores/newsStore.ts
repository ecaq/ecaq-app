import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { NewsModel } from "../models/news-model";
import { format } from "date-fns";

//import agent from "../api/agent";

export default class NewsStore {
    newsRegistry = new Map<string, NewsModel>();
    selectedNews: NewsModel | undefined = undefined;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    // this is Computed Property
    get getNews() {
      return Array.from(this.newsRegistry.values()).filter(
          (i) => i.isActive === true
      );
    }
    get getNewsByName() {
      return Array.from(this.newsRegistry.values())
        .filter(
            (i) => i.isActive === true
        ).sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
    }
    
    loadNews = async () => {
        this.setLoadingInitial(true);
        console.log(
          "loadInit call",
          this.loadingInitial,
          "sz : ",
          this.newsRegistry.size
        );
        try {
          const news = await agent.News.list();
          console.log("load-banners call", news);
          //runInAction(() => {})
    
          news.forEach((a) => {
            this.setEntity(a);
          });
    
          this.setLoadingInitial(false);
    
          console.log("loadInit call", this.loadingInitial);
        } catch (error) {
          console.log(error);
          //runInAction(() => {})
          this.setLoadingInitial(false);
        }
      };

      loadMember = async (id: string = "1") => {
        let news = this.getEntity(id);
        if (news) {
          this.selectedNews = news;
          return news;
        } else {
          try {
            news = await agent.News.details(+id);
            this.setEntity(news!);
            runInAction(() => (this.selectedNews = news));
            this.setLoadingInitial(false);
            return news;
          } catch (error) {
            console.log(error);
            //runInAction(() => {})
            this.setLoadingInitial(false);
          }
        }
      };



    private setEntity = (mdl: NewsModel) => {
        mdl.imageUrl = `${import.meta.env.VITE_BASE_URL}${mdl.imageUrl}`;
        mdl.newsDate = format(mdl.newsDate!, 'dd-MMM-yyyy')
        this.newsRegistry.set(String(mdl.id), mdl);
    };

    private getEntity = (id: string) => {
    return this.newsRegistry.get(id);
    };




}