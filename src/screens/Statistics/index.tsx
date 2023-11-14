import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { DataProps } from "../Home";
import {
  Box,
  BoxDiet,
  Container,
  Divider,
  Header,
  Icon,
  Text,
  TextBold,
  Title,
} from "./styles";

type Diet = "inDiet" | "outDiet";

interface StatisticsProps {
  diet: Diet;
}

export function Statistics() {
  const navigation = useNavigation();
  const router = useRoute();
  const { title, diet, data } = router.params as {
    title: string;
    diet: Diet;
    data: DataProps[];
  };

  const meals = data?.map((meal) => meal.data).flat();

  const totalMeal = meals?.length;
  const totalMealInDiet = meals?.filter((meal) => meal.diet === "inDiet");
  const totalMealOutDiet = meals?.filter((meal) => meal.diet === "outDiet");

  return (
    <Container>
      <Header diet={diet}>
        <View style={{ width: "100%" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Icon diet={diet} />
          </TouchableOpacity>
        </View>
        <Title>{title}</Title>
        <Text>das refeições dentro da dieta</Text>
      </Header>

      <Divider>
        <Text>Estatisticas</Text>

        <Box>
          <TextBold>
            {totalMealInDiet?.length > 0 ? totalMealInDiet?.length : 0}
          </TextBold>
          <Text>melhor sequência de pratos dentro da dieta</Text>
        </Box>

        <Box>
          <TextBold>{totalMeal > 0 ? totalMeal : 0}</TextBold>
          <Text>refeições registradas</Text>
        </Box>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <BoxDiet diet="inDiet">
            <TextBold>
              {totalMealInDiet.length > 0 ? totalMealInDiet?.length : 0}
            </TextBold>
            <Text>refeições dentro da dieta</Text>
          </BoxDiet>
          <BoxDiet diet="outDiet">
            <TextBold>
              {totalMealOutDiet.length > 0 ? totalMealOutDiet?.length : 0}
            </TextBold>
            <Text>refeições fora da dieta</Text>
          </BoxDiet>
        </View>
      </Divider>
    </Container>
  );
}
