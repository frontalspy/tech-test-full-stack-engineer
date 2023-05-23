import styled, { css } from "styled-components";
import { colours, fontSizes, padding } from "../../shared/styles";

export const TabContainer = styled.section`
  display: flex;
  width: 100%;
  flex-flow: wrap column;
`;

export const TabTitleContainer = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 1px 1px 8px ${colours.black};
  margin-bottom: ${padding.md};
  background-color: ${colours.white};
`;

export const TabTitle = styled.button<{ active: boolean }>`
  // Reset browser button styles
  background: transparent;
  border: none;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  font-weight: 400;

  font-size: ${fontSizes.md};
  padding: ${padding.md} ${padding.sm};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border-bottom: 4px solid transparent;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colours.grey};
  }

  ${({ active }) =>
    active &&
    css`
      font-style: 700;
      border-color: ${colours.primary};
    `}
`;

export const TabContentContainer = styled.div``;

export const TabContent = styled.div``;
