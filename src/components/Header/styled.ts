import styled from "styled-components";
import { Button } from "./../styled";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.content};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    ${Button} {
      width: 100%;
      margin-right: 16px;
    }

    & > * + * {
      margin-top: 16px;
    }
  }
`;
