import styled from "styled-components";
import { useAllNewsList } from "../api/news";
import { NewsDTO } from "../types/newsDTO";
import NewsItem from "./NewsItem";
import { useEffect } from "react";

const NewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 8px;
  overflow-y: auto;
`;

function NewsList() {
  const { data: newsList } = useAllNewsList();

  // useEffect(() => {
  //   const;
  // }, []);
  return (
    <NewsListWrapper>
      {newsList &&
        (newsList?.response.docs as NewsDTO[]).map((news) => (
          <NewsItem news={news} />
        ))}
    </NewsListWrapper>
  );
}

export default NewsList;
