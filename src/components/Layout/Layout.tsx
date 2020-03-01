import React from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../actions/user";
import * as S from "./styled";
import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <React.Fragment>
      <S.GlobalStyle />
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
    </React.Fragment>
  );
};

export default Layout;
