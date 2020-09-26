import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Props {
  multiline?: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  max-height: 140px;
  min-height: ${(props) => (props.multiline ? '80px' : '50px')};
  ${(props) => props.multiline && 'height: auto'};
  padding: 0 10px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 20px;
  font-family: 'Roboto';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
