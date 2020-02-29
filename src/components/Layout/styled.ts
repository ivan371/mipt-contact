import styled, { createGlobalStyle } from "styled-components";
import background from "../../assets/background.jpg";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 64px auto 0;
  z-index: 10;
`;

export const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${background});
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const GlobalStyle = createGlobalStyle<any>`
  body {
    margin: 0;
    padding: 0;
  }

  body:before {
    z-index:-1;
    position:fixed;
    left:0;
    top:0;
    content: url(${background});
    opacity:0.4;
  }
  
  a {
    text-decoration: none;
  }
`;
