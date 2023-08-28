 /** @jsxImportSource @emotion/react */
import React from "react";
import { container } from "../styles/layouts/appLayout.style";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <section css={container}>{children}</section>;
}
