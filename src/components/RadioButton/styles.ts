import styled, { css } from "styled-components/native";

type Diet = "inDiet" | "outDiet";

type Props = {
  diet: Diet;
  isSelected: boolean;
  withMarginLeft?: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 8px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
`;

export const OptionWrapper = styled.Pressable<Props>`
  ${({ theme, isSelected, diet, withMarginLeft }) =>
    css`
      background-color: ${isSelected
        ? diet === "inDiet"
          ? theme.COLORS.GREEN_LIGHT
          : theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_600};
      border-color: ${isSelected
        ? diet === "inDiet"
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK
        : "transparent"};
      margin-left: ${withMarginLeft ? "8px" : 0};
    `};
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const OptionIcon = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, diet }) =>
    diet === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const OptionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-left: 8px;
`;
