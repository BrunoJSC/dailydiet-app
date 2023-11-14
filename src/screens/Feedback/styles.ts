import { Diet } from "@/@types/types";
import styled, { css } from "styled-components/native";

interface Props {
  diet: Diet;
}
export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
