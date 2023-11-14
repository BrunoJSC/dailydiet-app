import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Meal } from "./types";

export type RootStackParamList = {
  Home: undefined;
  Statistics: {
    diet: Diet;
    title: string;
    data: DataProps[];
  };
  CreateMeal: undefined;
  Feedback: { variant: DietVariant };
  Meal: { meal: Meal };
  EditMeal: { meal: Meal };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
