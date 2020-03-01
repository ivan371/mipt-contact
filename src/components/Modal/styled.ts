import styled, { keyframes } from "styled-components";
import { rgba } from "polished";
import { Section } from "../styled";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const rise = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  animation-name: ${fade};
  animation-duration: 0.5s;
`;

export const Header = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 6px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const Inner = styled.div<{ modalStyles: any }>`
  border-radius: 8px;
  background-color: white;
  cursor: auto;
  animation-name: ${rise};
  animation-duration: 0.3s;
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => rgba(theme.palette.content, 0.9)};
    ${Section} {
      height: calc(100vh - 48px);
      padding: 16px;
    }
  }

  @media screen and (min-width: 800px) {
    min-width: 600px;
    ${({ modalStyles }) => modalStyles};
  }
`;
