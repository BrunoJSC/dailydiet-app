import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Diet = "inDiet" | "outDiet";

interface Props {
  diet: Diet;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View<Props>`
  width: 100%;
  height: 180px;
  padding: 16px 20px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Box = styled.View`
  width: 100%;
  height: 89px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Icon = styled(ArrowLeft)<Props>`
  color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL};
  `}
`;

export const Divider = styled.View`
  flex: 1;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: -24px;
  padding: 24px;
  align-items: center;

  gap: 30px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
  `}
  text-align: center;
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
  `}
`;

export const BoxDiet = styled.View<Props>`
  width: 157.7px;
  height: 107px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px;

  background-color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
