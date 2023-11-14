import { TextInputProps, View } from "react-native";
import { Container, Title } from "./styles";

interface InputProps extends TextInputProps {
  title: string;
  textarea?: boolean;
  placeholder?: string;
}

export function Input({ title, placeholder, textarea, ...rest }: InputProps) {
  return (
    <View>
      <Title>{title}</Title>
      <Container textarea={textarea} {...rest} />
    </View>
  );
}
