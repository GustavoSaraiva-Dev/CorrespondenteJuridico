import React, { useEffect, useState, useRef } from 'react';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import { TiposDeArray } from '../../assets/temp';
import { Container } from './styles';

interface Tipo {
  id: number;
  descricao: string;
}

const MinhasDiligencias: React.FC = () => {
  const padrao: Tipo = { id: 0, descricao: 'Escolha um tipo' };
  const DDRef = useRef();

  return (
    <Container>
      <DropDownPicker
        placeholder="Escolha um Tipo"
        items={TiposDeArray.map((item) => ({
          label: item.descricao,
          value: item.id,
          icon: () => <Icon name="file-text" size={22} color="#6930C3" />,
        }))}
        containerStyle={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}
        dropDownStyle={{
          backgroundColor: '#fafafa',
        }}
        dropDownMaxHeight={300}
        style={{
          backgroundColor: '#fafafa',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        labelStyle={{
          fontSize: 20,
          paddingLeft: 5,
        }}
        itemStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        onChangeItem={(item) => console.log(item)}
        searchable
        searchablePlaceholder="Selecione um tipo"
        searchableError={() => (
          <Text style={{ fontSize: 20 }}>Nenhum tipo encontrado</Text>
        )}
        searchableStyle={{ fontSize: 20, paddingLeft: 20 }}
      />
      <DropDownPicker
        placeholder="Escolha um Tipo"
        items={TiposDeArray.map((item) => ({
          label: item.descricao,
          value: item.id,
          icon: () => <Icon name="file-text" size={22} color="#6930C3" />,
        }))}
        containerStyle={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        dropDownStyle={{
          backgroundColor: '#fafafa',
        }}
        dropDownMaxHeight={300}
        style={{
          backgroundColor: '#fafafa',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        labelStyle={{
          fontSize: 20,
          paddingLeft: 5,
        }}
        itemStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        onChangeItem={(item) => console.log(item)}
        searchable
        searchablePlaceholder="Selecione um tipo"
        searchableError={() => (
          <Text style={{ fontSize: 20 }}>Nenhum tipo encontrado</Text>
        )}
        searchableStyle={{ fontSize: 20, paddingLeft: 20 }}
      />
      <DropDownPicker
        placeholder="Escolha um Tipo"
        items={TiposDeArray.map((item) => ({
          label: item.descricao,
          value: item.id,
          icon: () => <Icon name="file-text" size={22} color="#6930C3" />,
        }))}
        containerStyle={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        dropDownStyle={{
          backgroundColor: '#fafafa',
        }}
        dropDownMaxHeight={300}
        style={{
          backgroundColor: '#fafafa',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        labelStyle={{
          fontSize: 20,
          paddingLeft: 5,
        }}
        itemStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        onChangeItem={(item) => console.log(item)}
        searchable
        searchablePlaceholder="Selecione um tipo"
        searchableError={() => (
          <Text style={{ fontSize: 20 }}>Nenhum tipo encontrado</Text>
        )}
        searchableStyle={{ fontSize: 20, paddingLeft: 20 }}
      />
    </Container>
  );
};

export default MinhasDiligencias;
