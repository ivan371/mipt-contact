import styled, { css } from "styled-components";
import { rgba } from "polished";

export const Button = styled.button<{ fullWidth?: boolean; isMuted?: boolean }>`
  background-color: ${({ theme, isMuted }) =>
    isMuted ? theme.palette.muted : theme.palette.active};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Roboto";
  outline: none;
  overflow: visible;
  border: 0;
  color: ${({ theme }) => theme.palette.black};
  font-family: "Roboto";
  font-size: 14px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export const Section = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => rgba(theme.palette.content, 0.9)};
  border-radius: 4px;
`;

export const Paragraph = styled.p<{
  withoutSpace?: boolean;
  isDanger?: boolean;
}>`
  color: ${({ theme, isDanger }) =>
    isDanger ? theme.palette.danger : theme.palette.light};
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 600;
  ${({ withoutSpace }) =>
    withoutSpace &&
    css`
      margin-top: 0;
      margin-bottom: 0;
    `}
`;

export const Label = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border-radius: 4px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;

  & > ${Paragraph} {
    margin: 4px;
    color: ${({ theme }) => theme.palette.black};
    font-weight: 400;
  }
`;

export const Select = styled.select`
  height: 32px;
  background-color: ${({ theme }) => theme.palette.white};

  option {
    padding: 8px;
  }

  @media screen and (min-width: 800px) {
    min-width: 320px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.palette.light};
  font-family: "Roboto";
  text-align: center;
`;
