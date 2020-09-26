import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string | '';
  multiline?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
  multiline,
  ...rest
}: InputProps) => {
  return (
    <Container multiline={multiline}>
      <Icon size={30} name={icon} />
      <TextInput
        {...rest}
        placeholderTextColor="#C1BCCC"
        multiline={multiline}
      />
    </Container>
  );
};

export default Input;
