import styled from "styled-components";
import { Paragraph } from "../styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AdminLabel = styled(Paragraph)`
  color: ${({ theme }) => theme.palette.active};
`;

export const Inner = styled.div`
  display: flex;
  & > * + * {
    margin-left: 8px;
  }

  ${Paragraph} {
    white-space: nowrap;
  }
`;
