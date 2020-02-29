import styled from "styled-components";

export const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.light};
  padding-top: 8px;
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 8px;
  }
`;

export const Img = styled.img`
  cursor: pointer;
`;
