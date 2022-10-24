import React from 'react';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import Search from './src/pages/Search';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
       <Stack.Screen name="Detail" component={Detail} 
      options={{
        headerStyle:{
            backgroundColor:'#1F1F1F',
        },
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerTitle: 'Voltar',
        headerShadowVisible: false }}
       />
        
         <Stack.Screen name="Search" component={Search} 
      options={{
        headerStyle:{
          backgroundColor:'#1F1F1F'
        },
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerTitle: 'Voltar',
        headerShadowVisible: false
    }}
       />
    </Stack.Navigator>
   </NavigationContainer>
 
  );
}
