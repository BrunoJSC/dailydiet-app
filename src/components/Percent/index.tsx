import { Diet } from "@/@types/types";
import { DataProps } from "@/screens/Home";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Container, Title } from "./styles";

interface PercentProps {
  title: string;
  diet: Diet;
  data: DataProps[];
}

export function Percent({ title, diet, data }: PercentProps) {
  const navigation = useNavigation();

  return (
    <Container
      diet={diet}
      onPress={() =>
        navigation.navigate("statistics", {
          title: title,
          diet: diet,
          data: data,
        })
      }
    >
      <Title>{title}</Title>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
