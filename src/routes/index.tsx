import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import NovaDiligencia from '../pages/NovaDiligencia';
import MinhasDiligencias from '../pages/MinhasDiligencias';
import DiligenciaDetalhes from '../pages/DiligenciaDetalhes';

const Pages = createStackNavigator();

const PageRoutes: React.FC = () => (
  <Pages.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#6930C3' },
    }}
  >
    <Pages.Screen name="Home" component={Home} />
    <Pages.Screen name="MinhasDiligencias" component={MinhasDiligencias} />
    <Pages.Screen name="NovaDiligencia" component={NovaDiligencia} />
    <Pages.Screen name="DiligenciaDetalhes" component={DiligenciaDetalhes} />
  </Pages.Navigator>
);

export default PageRoutes;
