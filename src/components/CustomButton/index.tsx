/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  textColor?: string;
  backgroundColor?: string;
  onHoverBackgroundColor?: string;
  onHoverTextColor?: string;
  textChild: string;
  onClick?: void;
}

const CustomButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{rest.textChild}</ButtonText>
    </Container>
  );
};

export default CustomButton;
