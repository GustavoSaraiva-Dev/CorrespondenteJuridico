import React from 'react';
import { Text } from 'react-native';

import { Container, InputTitle } from './styles';
import Input from '../../components/Input';

interface InputContainerProps {
  inputTitle: string;
  inputName: string;
  inputIcon: string;
  inputPlaceHolder: string;
  multiline?: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({ ...rest }) => {
  return (
    <Container>
      <InputTitle>{rest.inputTitle}</InputTitle>
      <Input
        name={rest.inputName}
        icon={rest.inputIcon}
        placeholder={rest.inputPlaceHolder}
        multiline={rest.multiline}
      />
    </Container>
  );
};

export default InputContainer;
