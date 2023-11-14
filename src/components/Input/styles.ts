import styled, { css } from "styled-components/native";

interface Props {
  textarea?: boolean;
}

export const Container = styled.TextInput<Props>`
  ${({ theme, textarea }) => css`
    width: 100%;
    height: ${textarea ? "100px" : "50px"};
    background-color: ${theme.COLORS.WHITE};
    border-radius: 6px;
    padding: 16px;
    color: ${theme.COLORS.GRAY_200};
    border: 1px solid ${theme.COLORS.GRAY_400};
  `}

  margin-bottom: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px;
`;
