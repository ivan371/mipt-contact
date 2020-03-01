import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  & > * + * {
    margin-left: 8px;
  }

  img {
    height: 32px;
  }
`;
