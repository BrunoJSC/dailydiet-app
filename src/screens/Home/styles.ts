import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  height: 180px;
  padding: 16px 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;

  border-radius: 25px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 25px;
`;
