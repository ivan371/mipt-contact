import React from "react";
import * as S from "./styled";
import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <S.GlobalStyle />
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
    </React.Fragment>
  );
};

export default Layout;
