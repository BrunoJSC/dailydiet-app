import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  height: 180px;
  padding: 16px 20px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Divider = styled.View`
  flex: 1;
  padding: 24px 20px;
  gap: 20px;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: -42px;
`;
