import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Custom,
  DropDown,
  DropDownGroup,
  DropDownTitle,
} from './styles';
import InputContainer from '../../containers/InputContainer';

interface Estado {
  id: number;
  sigla: string;
  nome: string;
}
const NovaDiligencia: React.FC = () => {
  const [estados, setEstados] = useState<Estado[]>([]);
  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?OrderBy=nome',
    )
      .then((response) => response.json())
      .then((res) => setEstados(res));
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
              style={{placeholder: {color: '#6C6C80'}}}
              onValueChange={() => ''}
              placeholder={{
                label: 'Tipo de Solicitação',
                color: '#34CB79',
                value: 0,
              }}
              items={estados?.map((estado) => ({
                label: estado.nome,
                value: estado.id,
              }))}
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

export default NovaDiligencia;
