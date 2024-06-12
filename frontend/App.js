import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screens/geral/LoginScreen'
import SignUpScreen from './src/screens/geral/SingUpScreen'
import HomeScreen from './src/screens/user/HomeScreen'
import DynamicScreenCategory from './src/screens/user/DynamicScreenCategory'
import AdminScreen from './src/screens/admin/AdminScreen'
import Antibiotico from './src/screens/user/AntibioticoScreen'
import UserScreen from './src/screens/admin/UserScreen'
import MedicineScreen from './src/screens/admin/MedicineScreen'
import UserMenuScreen from './src/screens/user/UserMenuScreen'
import AdminHomeScreen from './src/screens/admin/AdminHomeScreen'
import UserDetailScreen from './src/screens/admin/UserDetailScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DynamicScreenCategory" component={DynamicScreenCategory} />
        <Stack.Screen name="Antibiotico" component={Antibiotico} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Medicine" component={MedicineScreen} />
        <Stack.Screen name="UserMenu" component={UserMenuScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
