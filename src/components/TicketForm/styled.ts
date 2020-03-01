import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 8px;
  }

  & > button {
    margin-top: 16px;
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
      margin-left: 32px;
    }
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 8px;
  }
`;
