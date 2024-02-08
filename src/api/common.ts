import axios from "axios";

export const client = axios.create({
  baseURL: process.env.NEWYORKTIMES_BASEURL,
});

export const fetcher = (url: string) => client.get(url).then((res) => res.data);
