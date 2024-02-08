import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Filter from "./Filter";
import Divider from "./Divider";
import IconButton from "./IconButton";

const GNBWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 48px;
`;

const OutletWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 44px;
  justify-content: center;
  background: #f0f1f4;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 80px;
  border-radius: 30px;
  justify-content: space-between;
  background: #000000;
`;

function GNB() {
  return (
    <GNBWrapper>
      <Filter />
      <Divider />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <ButtonWrapper>
        <IconButton>홈</IconButton>
        <IconButton>스크랩</IconButton>
      </ButtonWrapper>
    </GNBWrapper>
  );
}

export default GNB;
