import axios, { AxiosError, AxiosResponse } from "axios";
import { router } from "../router/Routes";
import { HomeBanner } from "../models/home-banner";
import { AboutModel } from "../models/about-model";
import { EcaqCoreModel } from "../models/ecaq-core-model";
import { GalleryModel } from "../models/gellery-model";
import { AllianceModel } from "../models/alliance-model";
import { MemberModel } from "../models/member-model";
import { NewsModel } from "../models/news-model";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = `${import.meta.env.VITE_BASE_API_URL}`;

axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    console.log('server error : ', response)
    return response;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (
          config.method === "get" &&
          Object.prototype.hasOwnProperty.call(data.errors, "id")
        ) {
          router.navigate("/not-found");
        }
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else {
          console.log(data);
        }
        break;
      case 401:
        console.log("unauthorized");
        break;
      case 403:
        console.log("forbidden");
        break;
      case 404:
        //console.log('not found')
        router.navigate("/not-found");
        break;
      case 500:
        console.log("server error");
        // store.commonStore.setServerError(data)
        console.log('server error : ', data)
        router.navigate("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: NonNullable<unknown>) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: NonNullable<unknown>) =>
    axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const HomeBanners = {
  list: () => requests.get<HomeBanner[]>("/home-banner"),
  details: (id: number) => requests.get<HomeBanner>(`/home-banner/${id}`),
  // create: (activity: Activity) => requests.post<void>('/activities', activity),
  // update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
  // //delete: (id: string) => axios.delete<void>(`/activities/${id}`)
  // delete: (id: string) => axios.delete<void>(`/activities/${id}`)
};

const About = {
  list: () => requests.get<AboutModel[]>("/about"),
  details: (id: number) => requests.get<AboutModel>(`/about/${id}`),
  // create: (activity: Activity) => requests.post<void>('/activities', activity),
  // update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
  // //delete: (id: string) => axios.delete<void>(`/activities/${id}`)
  // delete: (id: string) => axios.delete<void>(`/activities/${id}`)
};

const Core = {
  list: () => requests.get<EcaqCoreModel[]>("/ecaq-core"),
  details: (id: number) => requests.get<EcaqCoreModel>(`/ecaq-core/${id}`),
  // create: (activity: Activity) => requests.post<void>('/activities', activity),
  // update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
  // //delete: (id: string) => axios.delete<void>(`/activities/${id}`)
  // delete: (id: string) => axios.delete<void>(`/activities/${id}`)
};

const Gallery = {
  list: () => requests.get<GalleryModel[]>("/gallery"),
  listWithImages: () => requests.get<GalleryModel[]>("/gallery/with-images"),
  details: (id: number) => requests.get<GalleryModel>(`/gallery/${id}`),
  // create: (activity: Activity) => requests.post<void>('/activities', activity),
  // update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
  // //delete: (id: string) => axios.delete<void>(`/activities/${id}`)
  // delete: (id: string) => axios.delete<void>(`/activities/${id}`)
};

const Alliance = {
  list: () => requests.get<AllianceModel[]>("/alliance"),  
  details: (id: number) => requests.get<AllianceModel>(`/alliance/${id}`),
  // create: (activity: Activity) => requests.post<void>('/activities', activity),
  // update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
  // //delete: (id: string) => axios.delete<void>(`/activities/${id}`)
  // delete: (id: string) => axios.delete<void>(`/activities/${id}`)
};

const Member = {
  list: () => requests.get<MemberModel[]>("/members"),
  details: (id: number) => requests.get<MemberModel>(`/member/${id}`),
  // create: (activity: Activity) => requests.post<void>('/activities', activity),
  // update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
  // //delete: (id: string) => axios.delete<void>(`/activities/${id}`)
  // delete: (id: string) => axios.delete<void>(`/activities/${id}`)
};

const News = {
  list: () => requests.get<NewsModel[]>("/news"),
  details: (id: number) => requests.get<NewsModel>(`/news/${id}`),
  // create: (activity: Activity) => requests.post<void>('/activities', activity),
  // update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
  // //delete: (id: string) => axios.delete<void>(`/activities/${id}`)
  // delete: (id: string) => axios.delete<void>(`/activities/${id}`)
};

const agent = {
  HomeBanners,
  About,
  Core,
  Gallery,
  Alliance,
  Member,
  News
};

export default agent;
