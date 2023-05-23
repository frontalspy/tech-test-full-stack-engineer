import styled from "styled-components";
import { borderRadi, colours, padding } from "../../shared/styles";

export const CardContent = styled.div`
  background-color: ${colours.white};
  border-radius: ${borderRadi.sm};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: ${padding.sm} 0;
  width: 100%;
`;
