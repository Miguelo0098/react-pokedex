import * as React from "react";

import transparentRedLogo from "../../assets/transparent-red-logo.png";
import { Logo, LogoWrapper, StyledAppBar } from "./Header.styled";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <StyledAppBar position="static" component="header">
      <LogoWrapper>
        <Logo src={transparentRedLogo} />
      </LogoWrapper>
    </StyledAppBar>
  );
}
