import { Meal } from "@/@types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function createMeal(newMeal: Meal) {
  try {
    const storage: Meal[] = await getAllMeals();

    const meals = storage.find((meal) => meal.id === newMeal.id);
    const newStorage = [...storage, newMeal];

    if (meals) {
      return false;
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorage));
  } catch (error) {
    console.log(error);
  }
}
