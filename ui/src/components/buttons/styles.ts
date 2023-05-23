import styled, { css } from "styled-components";
import { colours, padding } from "../../shared/styles";

export const ButtonComponent = styled.button<{
  variant: "primary" | "secondary";
}>`
  display: inline-block;
  padding: ${padding.sm} ${padding.md};
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 2px 1px ${colours.darkGrey};

  ${({ variant }) =>
    variant === "primary"
      ? css`
          background-color: ${colours.primary};
          color: ${colours.white};
        `
      : css`
          background-color: ${colours.grey};
          color: ${colours.black};
        `}
`;
