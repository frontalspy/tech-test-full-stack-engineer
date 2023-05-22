import styled, { css } from "styled-components";
import { colours, fontSizes } from "../../shared/styles";

export const TabContainer = styled.section``;

export const TabTitleContainer = styled.div`
  box-shadow: 1px 2px 1px ${colours.black};
`;

export const TabTitle = styled.div<{ active: boolean }>`
  font-size: ${fontSizes.md};
  ${({ active }) =>
    active &&
    css`
      font-style: bold;
      border-bottom: 2px solid ${colours.primary};
    `}
`;

export const TabContentContainer = styled.div``;

export const TabContent = styled.div``;
