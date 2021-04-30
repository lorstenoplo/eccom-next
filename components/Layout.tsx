import { Container, Toolbar } from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: NonNullable<React.ReactNode>;
  className: string;
  navColor?: string;
  notFoundPage?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  navColor,
  notFoundPage,
  ...restProps
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar color={navColor} />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth={false} style={{ paddingBottom: 24 }} {...restProps}>
        {children}
      </Container>
      <Footer notFoundPage={notFoundPage} />
    </div>
  );
};

export default Layout;
