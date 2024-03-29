import axios, { AxiosError, AxiosResponse } from "axios";
import { Member } from "../models/member";
import { router } from "../router/Routes";
import { HomeBanner } from "../models/home-banner";
import { AboutModel } from "../models/about-model";
import { EcaqCoreModel } from "../models/ecaq-core-model";
import { GalleryModel } from "../models/gellery-model";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = `${import.meta.env.VITE_BASE_API_URL}`;

axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);
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

const Members = {
  list: () => requests.get<Member[]>("/members"),
  details: (id: number) => requests.get<Member>(`/member/${id}`),
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
  Members,
};

export default agent;
