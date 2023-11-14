import styled, { css } from "styled-components/native";

type Diet = "inDiet" | "outDiet";

interface Props {
  diet: Diet;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 327px;
  height: 102px;

  border-radius: 8px;
  padding: 16px 20px;

  margin: 8px auto;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL};
  `}
`;
