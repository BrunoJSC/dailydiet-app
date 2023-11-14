export type Diet = "inDiet" | "outDiet";

export type Meal = {
  id: string;
  name: string;
  description: string;
  date: number;
  diet: Diet;
};
