import styled, { css } from "styled-components";

const inputStyled = css`
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  max-width: 320px;
  padding: 8px;
`;

export const Input = styled.input<{ isFocus: boolean; fullWidth?: boolean }>`
  ${inputStyled};
  height: 100%;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: 100%;
    `}
  border: 1px solid
    ${({ theme, isFocus }) =>
      isFocus ? theme.palette.active : theme.palette.muted};
`;

export const Textarea = styled.textarea<{
  isFocus: boolean;
  fullWidth?: boolean;
}>`
  ${inputStyled}
  height: auto;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: 100%;
    `}
  border: 1px solid
    ${({ theme, isFocus }) =>
      isFocus ? theme.palette.active : theme.palette.muted};
`;
