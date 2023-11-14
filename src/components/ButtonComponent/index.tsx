import { TouchableOpacityProps } from "react-native";
import { Container, Text, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  text: string;
  onPress: () => void;
}

export function ButtonComponent({
  title,
  text,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <>
      <Title>{title}</Title>
      <Container onPress={onPress} activeOpacity={0.7} {...rest}>
        <Text>{text}</Text>
      </Container>
    </>
  );
}
