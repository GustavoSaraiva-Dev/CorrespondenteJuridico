import styled from 'styled-components/native';

interface DescriptionProps {
  tamanhoFonte?: number;
  corHex?: string;
}

interface BotaoProps {
  textColor?: string;
  backgroundColor?: string;
  onHoverBackgroundColor?: string;
  onHoverTextColor?: string;
}
type TextButtonProps = {
  textColor?: string;
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Image = styled.Image``;

export const Description = styled.Text<DescriptionProps>`
  text-align: left;
  font-family: 'Roboto-Regular';
  font-size: ${(props) => props.tamanhoFonte || 20};
  margin: 18px;
  color: ${(props) => `${props.corHex || 'white'}`};
`;

export const Botao = styled.TouchableOpacity<BotaoProps>`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 130px;
  height: 40px;
  background: ${(props) => props.backgroundColor || '#10DBA1'};
  color: ${(props) => props.textColor || 'white'};
`;
export const TextButon = styled.Text<TextButtonProps>`
  color: ${(props) => props.textColor || 'white'};
`;

export const ContainerButton = styled.View`
  top: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
