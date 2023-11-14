import { Meal } from "@/@types/types";
import { ButtonComponent } from "@/components/ButtonComponent";
import { Input } from "@/components/Input";
import { RadioButton } from "@/components/RadioButton";
import { editMeal } from "@/storage/meals/editMeal";
import { formattedDateOrHors } from "@/utils/formatted";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Container, Divider, Header, Icon, Title } from "./styles";

export function EditMeal() {
  const route = useRoute();
  const navigation = useNavigation();
  const { meal } = route.params as {
    meal: Meal;
  };

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [date, setDate] = useState(meal.date);
  const [dietOption, setDietOption] = useState(
    meal.diet === "inDiet" ? "Sim" : "Não"
  );

  function handleDietOption(option: string) {
    setDietOption(option);
  }

  async function editExistingMeal() {
    const newMeal: Meal = {
      id: meal.id,
      name,
      description,
      date,
      diet: dietOption === "Sim" ? "inDiet" : "outDiet",
    };

    console.log(newMeal);
    await editMeal(newMeal);

    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ marginRight: 90 }}
            onPress={() => navigation.goBack()}
          >
            <Icon />
          </TouchableOpacity>

          <Title>Editar Refeição</Title>
        </View>
      </Header>
      <Divider>
        <Input title="Nome" value={name} onChangeText={setName} />
        <Input
          title="Descrição"
          value={description}
          onChangeText={setDescription}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Input
            title="Data"
            style={{ width: 150 }}
            value={formattedDateOrHors(date, "date")}
            onChangeText={(text) => setDate(Number(text))}
          />
          <Input
            title="Hora"
            style={{ width: 150 }}
            value={formattedDateOrHors(date, "hours")}
            onChangeText={(text) => setDate(Number(text))}
          />
        </View>

        <RadioButton
          options={["Sim", "Não"]}
          title="Está dentro da dieta?"
          onSelect={handleDietOption}
        />

        <ButtonComponent
          style={{ marginTop: "auto" }}
          text="Salvar alterações"
          onPress={editExistingMeal}
        />
      </Divider>
    </Container>
  );
}
