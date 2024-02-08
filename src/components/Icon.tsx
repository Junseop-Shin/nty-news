import React, { memo } from "react";
import styled from "styled-components";
import { IconMapper } from "../asset/IconMapper";

interface Props {
  iconName: string;
  size?: string;
}

const StyledIcon = styled.div<{
  size?: string;
}>`
  display: flex;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

function IconComponent({ iconName, size }: Props): React.JSX.Element {
  const Icon = IconMapper[iconName];
  return (
    <StyledIcon size={size}>
      <Icon />
    </StyledIcon>
  );
}

export default memo(IconComponent);
