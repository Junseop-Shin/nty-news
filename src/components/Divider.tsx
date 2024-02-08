import styled from "styled-components";

const DividerBase = styled.div`
  width: 100%;
  height: 1px;
  background: #c4c4c4;
`;

function Divider() {
  return <DividerBase />;
}

export default Divider;
