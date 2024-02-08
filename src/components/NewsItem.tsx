import styled from "styled-components";
import { NewsDTO } from "../types/newsDTO";
import { formatDate } from "../util/date";
import Icon from "./Icon";

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 8px;

  background: #fefefe;
`;

const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
`;

const NewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
`;

const Headline = styled.span`
  width: 260px;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.05em;
  text-align: left;
`;

const Source = styled.span`
  display: flex;
  gap: 8px;
  font-family: Apple SD Gothic Neo;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.05em;
  text-align: left;
`;

function NewsItem({ news }: { news: NewsDTO }) {
  return (
    <NewsWrapper>
      <NewsHeader>
        <Headline>{news.headline.main}</Headline>
        {/* <Icon iconName="" size="24px" /> */}
      </NewsHeader>
      <NewsFooter>
        <Source>
          <span>{news.source}</span>
          <span>{news.byline.original}</span>
        </Source>
        <Source>
          <span>{formatDate(news.pub_date)}</span>
        </Source>
      </NewsFooter>
    </NewsWrapper>
  );
}

export default NewsItem;
