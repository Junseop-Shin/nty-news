import useSWR from "swr";
import { fetcher } from "./common";

export const useAllNewsList = () => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=korea&page=3&sort=newest&api-key=${process.env.REACT_APP_NEWYORKTIMES_KEY}`;

  return useSWR(url, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
};
