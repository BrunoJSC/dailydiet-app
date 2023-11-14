import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Diet = "inDiet" | "outDiet";

interface Props {
  diet: Diet;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<Props>`
  width: 100%;
  height: 180px;
  padding: 16px 20px;
  justify-content: center;

  background-color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Icon = styled(ArrowLeft)<Props>`
  color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  flex: 1;
  padding: 50px 20px;
  gap: 20px;

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -42px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Diet = styled.View`
  padding: 16px 20px;
  border-radius: 100px;
  width: 170px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.View<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;

  border-radius: 4px;
  background-color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ButtonEdit = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
    width: 100%;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
  `}
  margin-bottom: 20px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    width: 100%;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: ${theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_100};
  `}
`;
