import styled from "styled-components";
import { Paragraph } from "../styled";

export const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.light};
  padding-top: 8px;
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 8px;
  }
`;

export const Date = styled(Paragraph)`
  margin-left: auto;
`;

export const Img = styled.img`
  cursor: pointer;
`;
