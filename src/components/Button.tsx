import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  align-items: center;

  height: 34px;
  padding: 6px 12px 4px;

  border: 1px solid #c4c4c4;
  border-radius: 30px;
  background: white;

  color: #6d6d6d;
  font-size: 14px;
  font-family: Apple SD Gothic Neo;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.04em;
  text-align: right;
`;

type Props = React.ComponentProps<typeof ButtonBase>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = "button", ...props }, ref) => (
    <ButtonBase {...props} ref={ref} type={type} />
  )
);

export default Button;
