import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 8px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  @media screen and (min-width: 800px) {
    & > * + * {
      margin-left: 16px;
    }
    & > p {
      width: 100px;
    }
  }
`;
