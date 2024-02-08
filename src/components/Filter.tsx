import styled from "styled-components";
import Button from "./Button";

const FilterWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 13px 20px;
  gap: 7px;

  background: #fefefe;
`;

function Filter() {
  return (
    <FilterWrapper>
      <Button>전체 헤드라인</Button>
      <Button>전체 날짜</Button>
      <Button>전체 국가</Button>
    </FilterWrapper>
  );
}

export default Filter;
