import React, { ReactNode } from "react";
import { Header } from "../../components/Header/Header";

export interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
