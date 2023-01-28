import React, { ReactNode } from "react";
import { Header } from "../../components/Header/Header";
import { StyledMainWrapper } from "./MainLayout.styled";

export interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div>
      <Header />
      <StyledMainWrapper component="main">{children}</StyledMainWrapper>
    </div>
  );
};
