import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type TextProps = {
  color?: string;
};

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 0 20px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text<TextProps>`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: ${(props) => props.color || 'white'};
`;
