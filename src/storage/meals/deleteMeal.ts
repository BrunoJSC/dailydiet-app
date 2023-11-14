import { Meal } from "@/@types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(meal: Meal): Promise<boolean> {
  try {
    const storage: Meal[] = await getAllMeals();
    const newStorage = storage.filter((item) => item.id !== meal.id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorage));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
