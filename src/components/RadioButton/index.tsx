import { useEffect, useState } from "react";
import {
  Container,
  OptionIcon,
  OptionText,
  OptionWrapper,
  OptionsContainer,
  Title,
} from "./styles";

interface RadioButtonProps {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
  prevValue?: string;
}

export function RadioButton({
  onSelect,
  options,
  title,
  prevValue,
}: RadioButtonProps) {
  const [userOption, setUserOption] = useState<string | null>(null);

  function handleUserOption(option: string) {
    onSelect(option);
    setUserOption(option);

    console.log(option);
  }

  useEffect(() => {
    if (prevValue) {
      setUserOption(prevValue);
    }
  }, [prevValue]);
  return (
    <Container>
      <Title>{title}</Title>
      <OptionsContainer>
        {options.map((option, index) => (
          <OptionWrapper
            key={option}
            diet={option === "Sim" ? "inDiet" : "outDiet"}
            withMarginLeft={index > 0}
            isSelected={option === userOption}
            onPress={() => handleUserOption(option)}
          >
            <OptionIcon diet={option === "Sim" ? "inDiet" : "outDiet"} />
            <OptionText>{option}</OptionText>
          </OptionWrapper>
        ))}
      </OptionsContainer>
    </Container>
  );
}
