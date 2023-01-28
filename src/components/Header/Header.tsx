import * as React from "react";

import transparentRedLogo from "../../assets/transparent-red-logo.png";
import { Logo, LinkLogoWrapper, StyledAppBar } from "./Header.styled";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <StyledAppBar position="static" component="header">
      <LinkLogoWrapper to="/">
        <Logo src={transparentRedLogo} />
      </LinkLogoWrapper>
    </StyledAppBar>
  );
}
