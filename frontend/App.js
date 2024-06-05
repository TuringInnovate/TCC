import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen'; 
import SignUpScreen from './src/screens/SingUpScreen'; 
import HomeScreen from './src/screens/HomeScreen'
import DynamicScreenCategory from './src/screens/DynamicScreenCategory'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DynamicScreenCategory" component={DynamicScreenCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
