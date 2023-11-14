import { formattedDateOrHors } from "@/utils/formatted";
import { Text, View } from "react-native";
import { Box, CircleActive, Container, SeparatorVertical } from "./styles";

type Diet = "inDiet" | "outDiet";

export interface MealItemProps {
  id: string;
  name: string;
  diet: Diet;
  date: number;

  onPress: (id: string) => void;
}

export function MealItem({ id, diet, name, date, onPress }: MealItemProps) {
  return (
    <View>
      <Container key={id} onPress={() => onPress(id)}>
        <View>
          <Text style={{ fontWeight: "bold", width: 70 }}>
            {formattedDateOrHors(date, "hours")}
          </Text>
        </View>
        <SeparatorVertical />
        <Box>
          <Text>{name}</Text>
          <CircleActive diet={diet} />
        </Box>
      </Container>
    </View>
  );
}
