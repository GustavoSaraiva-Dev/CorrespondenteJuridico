import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Description, ContainerButton } from './styles';

import CustomButton from '../../components/CustomButton';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Description tamanhoFonte={35}>
          Bem vindo ao CorrespJur, seu ajudante para organizar suas diligências.
        </Description>
        <Description tamanhoFonte={40}>O que gostaria de fazer?</Description>

        <ContainerButton>
          <CustomButton
            textChild="Cadastrar Nova"
            backgroundColor="#10DBA1"
            textColor="white"
            onPress={() => navigation.navigate('NovaDiligencia')}
          />
          <CustomButton
            textChild="Minhas Diligências"
            textColor="white"
            backgroundColor="#10DBA1"
            onPress={() => navigation.navigate('MinhasDiligencias')}
          />
        </ContainerButton>
      </Container>
    </>
  );
};

export default Home;
