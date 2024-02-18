import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} options={{title:'LOGIN',  headerStyle: {
                                backgroundColor: '#93D3E4',
                            } }}/>
        <Stack.Screen name="Screen2"  component={Screen2} options={{title:'PRODUCTOS',headerStyle: {
                                backgroundColor: '#93D3E4',
                            } }} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo:{
   backgroundColor:'#add8e6', 
  },
});
