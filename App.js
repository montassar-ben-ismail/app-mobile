
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './Screens/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './Screens/Auth';
import Home from './Screens/Home';

const Stack=createNativeStackNavigator();

export default function App(){
  return( 
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen component={Auth} name="Auth"></Stack.Screen>
      <Stack.Screen component={SignUp} name="SignUp"></Stack.Screen>
      <Stack.Screen component={Home} name="Home"></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer> );
}