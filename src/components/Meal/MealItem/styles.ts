import styled from "styled-components/native";

type Diet = "inDiet" | "outDiet";

interface Props {
  diet: Diet;
}

export const Container = styled.Pressable`
  padding: 14px 16px 14px 12px;

  gap: 12px;

  flex-direction: row;
  align-items: center;
  align-self: stretch;

  margin-bottom: 8px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const SeparatorVertical = styled.View`
  width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Box = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const CircleActive = styled.View<Props>`
  width: 12px;
  height: 12px;

  border-radius: 6px;
  background-color: ${({ theme, diet }) => {
    if (diet === "inDiet") {
      return theme.COLORS.GREEN_DARK;
    } else {
      return theme.COLORS.RED_DARK;
    }
  }};
`;
