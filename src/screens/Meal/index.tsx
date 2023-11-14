import { Meal as Meals } from "@/@types/types";
import { deleteMeal } from "@/storage/meals/deleteMeal";
import { formattedDateOrHors } from "@/utils/formatted";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import {
  ButtonDelete,
  ButtonEdit,
  Circle,
  Container,
  Diet,
  Divider,
  Header,
  Icon,
  Title,
} from "./styles";

export function Meal() {
  const navigation = useNavigation();
  const router = useRoute();
  const { meal } = router.params as {
    meal: Meals;
  };

  const { id, name, diet, description } = meal;

  async function deleteExistingMeal() {
    await deleteMeal(meal);

    navigation.goBack();
  }

  return (
    <Container>
      <Header diet={diet}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ marginRight: 125 }}
            onPress={() => navigation.goBack()}
          >
            <Icon diet={diet} />
          </TouchableOpacity>
          <Title>Refeição</Title>
        </View>
      </Header>

      <Divider>
        <View>
          <Title>{name}</Title>
          <Text>{description}</Text>
        </View>

        <View>
          <Title>Date e hora</Title>
          <Text>
            {formattedDateOrHors(meal.date, "date")} ás{" "}
            {formattedDateOrHors(meal.date, "hours")}
          </Text>
        </View>

        <View>
          <Diet>
            <Circle diet={diet} />
            <Text>
              {diet === "inDiet" ? "dentro da dieta" : "fora da dieta"}
            </Text>
          </Diet>
        </View>

        <View style={{ marginTop: "auto" }}>
          <ButtonEdit onPress={() => navigation.navigate("EditMeal", { meal })}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Editar</Text>
          </ButtonEdit>

          <ButtonDelete onPress={deleteExistingMeal}>
            <Text style={{ color: "#000", fontWeight: "bold" }}>Excluir</Text>
          </ButtonDelete>
        </View>
      </Divider>
    </Container>
  );
}
