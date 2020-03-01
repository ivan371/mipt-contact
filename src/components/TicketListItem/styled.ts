import styled from "styled-components";
import { Label } from "../styled";

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.content};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.light};
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    max-width: 320px;
  }

  @media screen and (max-width: 800px) {
    & > *:first-child {
      min-width: 200px;
    }
  }

  & > * + * {
    align-self: flex-end;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ActionLabel = styled(Label)`
  width: 140px;
`;
