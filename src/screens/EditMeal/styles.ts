import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 180px;
  padding: 16px 20px;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Icon = styled(ArrowLeft)`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  flex: 1;
  padding: 24px 20px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: -42px;
`;
