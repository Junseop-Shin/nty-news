import styled from "styled-components";
import Button from "./Button";

const FilterWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 108px;
  padding: 61px 20px 13px 20px;
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
