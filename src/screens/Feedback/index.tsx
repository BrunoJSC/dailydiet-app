import { Diet } from "@/@types/types";
import { ButtonComponent } from "@/components/ButtonComponent";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { Container, Title } from "./styles";

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { diet } = route.params as {
    diet: Diet;
  };
  return (
    <Container>
      <View>
        {diet === "inDiet" ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 50,
              width: 350,
              height: 150,
            }}
          >
            <Title diet={diet} style={{ textAlign: "center" }}>
              Continue assim!
            </Title>
            <Text>
              Você continua{" "}
              <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito
              bem!
            </Text>
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 50,
              width: 350,
              height: 150,
            }}
          >
            <Title diet={diet}>Que pena!</Title>
            <Text style={{ textAlign: "center" }}>
              Você <Text style={{ fontWeight: "bold" }}>saiu da dieta</Text>{" "}
              dessa vez, mas continue se esforçando e não desista!
            </Text>
          </View>
        )}
      </View>
      {diet === "inDiet" ? (
        <View style={{ width: "100%", padding: 20, alignItems: "center" }}>
          <Image source={require("../../assets/inDiet.png")} />
          <ButtonComponent
            text="Ir para página inicial"
            onPress={() => navigation.navigate("home")}
          />
        </View>
      ) : (
        <View style={{ width: "100%", padding: 20, alignItems: "center" }}>
          <Image source={require("../../assets/outDiet.png")} />
          <ButtonComponent
            text="Ir para tela inicial"
            onPress={() => navigation.navigate("home")}
          />
        </View>
      )}
    </Container>
  );
}
