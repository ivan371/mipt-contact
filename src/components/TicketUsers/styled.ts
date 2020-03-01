import styled from "styled-components";
import { Paragraph } from "../styled";

export const Inner = styled(Paragraph)`
  display: flex;
  justify-content: space-between;

  & > * + * {
    margin-left: 8px;
  }
`;
