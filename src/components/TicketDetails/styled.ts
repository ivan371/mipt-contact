import styled from "styled-components";

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
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentsWrapper = styled.div`
  & > * {
    margin-top: 16px;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 140px;
  & > * + * {
    margin-top: 8px;
  }
`;
