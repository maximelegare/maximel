import React from "react";
import type { ReactElement, FC } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Burger } from "~/components/core/BurgerMenu/BurgerMenu";


type Props = {
  children: ReactElement;
};

const Layout: FC<Props> = ({ children, }) => {

  return (
    <>
      <Header></Header>
      <Burger></Burger>
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Layout;
