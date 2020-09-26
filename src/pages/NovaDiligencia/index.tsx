import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Container,
  Custom,
  DropDown,
  DropDownGroup,
  DropDownTitle,
} from './styles';
import InputContainer from '../../containers/InputContainer';

const NovaDiligencia: React.FC = () => {
  useEffect(() => {
    ('');
  }, []);
  return (
    <ScrollView>
      <Container>
        <InputContainer
          inputTitle="Solicitante"
          inputName="solicitante"
          inputIcon=""
          inputPlaceHolder="solicitante"
        />
        <InputContainer
          inputTitle="Empresa"
          inputName="empresa"
          inputIcon=""
          inputPlaceHolder="Dados da empresa solicitante"
          multiline
        />
        <DropDownGroup>
          <DropDownTitle>Tipo de Solicitação</DropDownTitle>
          <DropDown>
            <Custom
              onValueChange={() => ''}
              placeholder={{
                label: 'Tipo de Solicitação',
                value: 0,
                color: '#9EA0A4',
                inputLabel: 'Teste  000',
              }}
              items={[{ label: 'Valor 1', value: 1 }]}
            />
          </DropDown>
        </DropDownGroup>
        <InputContainer
          inputTitle="Local de Serviço"
          inputName="LocalServico"
          inputIcon=""
          inputPlaceHolder="Dados do Local de Serviço"
          multiline
        />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default NovaDiligencia;
