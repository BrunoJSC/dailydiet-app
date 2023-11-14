import { Meal } from "@/@types/types";
import { ButtonComponent } from "@/components/ButtonComponent";
import { Input } from "@/components/Input";
import { RadioButton } from "@/components/RadioButton";
import { createMeal } from "@/storage/meals/createMeal";
import { formattedDateOrHors } from "@/utils/formatted";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Container, Divider, Header } from "./styles";

export function CreateMeal() {
  const navigation = useNavigation();
  const [dietOption, setDietOption] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().getTime());

  function handleDietOption(option: string) {
    setDietOption(option);
  }

  async function createNewMeal() {
    if (!dietOption) {
      return;
    }

    if (dietOption === "Sim") {
      navigation.navigate("Feedback", {
        diet: "inDiet",
      });
    }

    if (dietOption === "Não") {
      navigation.navigate("Feedback", {
        diet: "outDiet",
      });
    }

    const newMeal: Meal = {
      id: Math.random().toString(),
      name,
      description,
      date,
      diet: dietOption === "Sim" ? "inDiet" : "outDiet",
    };

    await createMeal(newMeal);
    console.log(newMeal);
  }

  return (
    <Container>
      <Header>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "100%" }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{ marginRight: 125 }}
          >
            <ArrowLeft />
          </TouchableOpacity>
          <Text>Criar refeição</Text>
        </View>
      </Header>

      <Divider>
        <Input title="Nome" value={name} onChangeText={setName} />
        <Input
          title="Descrição"
          textarea
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

        <ButtonComponent text="Cadastrar refeição" onPress={createNewMeal} />
      </Divider>
    </Container>
  );
}
