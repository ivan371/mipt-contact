import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.content};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.light};
`;

export const Title = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.palette.light};
  font-family: "Roboto";
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.light};
  padding-top: 8px;
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 8px;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 8px;
  }
`;
