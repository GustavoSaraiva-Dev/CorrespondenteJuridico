import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

const MinhasDiligencias: React.FC = () => {
  const [estados, setEstados] = useState<Estado[]>([]);

  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?OrderBy=nome',
    )
      .then((res) => res.json())
      .then((data) => setEstados(data));
  }, []);
  return (
    <Container>
      <DropDownPicker
        items={estados.map((item) => ({
          label: item.nome,
          value: item.id,
          icon: () => <Icon name="flag" size={18} color="#900" />,
        }))}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => console.log(item)}
        searchable
        searchablePlaceholder="Selecione um estado"
        searchableError={() => <Text>Nenhum Estado Encontrado</Text>}
      />
    </Container>
  );
};

export default MinhasDiligencias;
