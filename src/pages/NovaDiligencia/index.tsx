import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Container, DropDownGroup, DropDownTitle} from './styles';
import InputContainer from '../../containers/InputContainer';

interface Estado {
  id: number | null;
  sigla: string;
  nome: string;
}

interface Tipo {
  id: number | null;
  descricao: string;
}
const NovaDiligencia: React.FC = () => {
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

export default NovaDiligencia;
