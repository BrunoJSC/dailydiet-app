import { RootStackParamList } from "@/@types/navigation";
import { Diet, Meal } from "@/@types/types";
import { ButtonComponent } from "@/components/ButtonComponent";
import { MealItem } from "@/components/Meal/MealItem";
import { Percent } from "@/components/Percent";
import { getAllMeals } from "@/storage/meals/getAllMeals";
import { formattedDateOrHors, formattedPercent } from "@/utils/formatted";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, SectionList, Text, View } from "react-native";
import { Avatar, Button, Container, Header } from "./styles";

export type DataProps = {
  title: string;
  data: Meal[];
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [data, setData] = useState<DataProps[]>([]);
  const [diet, setDiet] = useState<Diet>("inDiet");

  const { navigate } = navigation;

  const meals = data.map((meal) => meal.data).flat();
  const totalMealInDiet = meals?.filter((meal) => meal?.diet === "inDiet")
    .length;
  const totalMeal = meals?.length;

  const percent = (totalMealInDiet / totalMeal) * 100;
  const fixedPercent = parseFloat(percent.toFixed(2));

  useEffect(() => {
    if (percent <= 0.5) {
      setDiet("outDiet");
    } else {
      setDiet("inDiet");
    }
  }, []);

  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }

      await AsyncStorage.setItem("@user", JSON.stringify(selectedImage));
    } catch (error) {
      console.log(error);
    }
  }

  useLayoutEffect(() => {
    const fetchMeal = async () => {
      const storageData: Meal[] = await getAllMeals();

      console.log(storageData);

      const convertedType = storageData.map((meal) => {
        return {
          title: formattedDateOrHors(meal.date, "date") as string,
          data: [meal],
        };
      });

      setData(convertedType);
    };

    fetchMeal();
  }, []);

  function clearStorage() {
    AsyncStorage.clear();
  }

  return (
    <Container>
      <Header>
        <Image source={require("../../assets/logo.png")} />

        <Button onPress={pickImage}>
          {selectedImage && <Avatar source={{ uri: selectedImage }} />}
        </Button>
      </Header>

      <Percent
        title={fixedPercent > 0 ? formattedPercent(fixedPercent) : "0.00%"}
        diet={diet}
        data={data}
      />

      <View style={{ flex: 1, padding: 16 }}>
        <ButtonComponent
          title="Nova refeição"
          text="Adicionar refeição"
          onPress={() => navigate("CreateMeal")}
        />

        <SectionList
          sections={data}
          keyExtractor={(meal, index) => meal.id}
          renderItem={({ item: meal }) => (
            <MealItem
              name={meal.name}
              date={meal.date}
              id={meal.id}
              diet={meal.diet}
              onPress={() => navigate("Meal", { meal: meal })}
            />
          )}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
          showsVerticalScrollIndicator={false}
          fadingEdgeLength={300}
        />
      </View>
    </Container>
  );
}
