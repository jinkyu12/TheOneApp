import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/screens/MainScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import PointScreen from './src/screens/PointScreen';

const Tab = createBottomTabNavigator({
  tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
          backgroundColor: '#171F33'
      }
  }
});

class App extends Component {
  constructor(){
    super();
}
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="더" component={MainScreen} />
          <Tab.Screen name="+" component={FavoritesScreen} />
          <Tab.Screen name="하다" component={PointScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;