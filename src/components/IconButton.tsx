import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  height: 34px;
  background: none;
  gap: 8px;

  color: #ffffff;
  font-family: Apple SD Gothic Neo;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
`;

type Props = React.ComponentProps<typeof ButtonBase>;

const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = "button", ...props }, ref) => (
    <ButtonBase {...props} ref={ref} type={type} />
  )
);

export default IconButton;
