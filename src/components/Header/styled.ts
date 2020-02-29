import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.content};
`;
