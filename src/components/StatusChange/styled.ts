import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 16px;
  }
`;

export const ButtonInner = styled.div`
  display: flex;
  & > * + * {
    margin-left: 16px;
  }
`;
