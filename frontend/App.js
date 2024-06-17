import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// páginas geral
import LoginScreen from './src/screens/geral/LoginScreen'
import SignUpScreen from './src/screens/geral/SingUpScreen'

// páginas users
import UserMenuScreen from './src/screens/user/UserMenuScreen'
import MedicineScreen from './src/screens/user/MedicineScreen'
import HomeScreen from './src/sc./src/screens/user/HomeScreen'

// páginas admin
import AdminScreen from './src/screens/admin/AdminScreen'
import AdminHomeScreen from './src/screens/admin/AdminHomeScreen'
import UserListScreen from './src/screens/admin/UserScreen'
import UserDetailScreen from './src/screens/admin/UserDetailScreen'
import RegisterUserScreen from './src/screens/admin/RegisterUserScree'
import MedicineListScreen from './src/screens/admin/MedicineScreen'
import MedicineDetailScreen from './src/screens/admin/MedicineDetailScreen'
import RegisterMedicineScreen from './src/screens/admin/RegisterMedicineScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />


        <Stack.Screen name="Medicine" component={MedicineScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="User" component={UserListScreen} />
        <Stack.Screen name="Medicine" component={MedicineListScreen} />

        <Stack.Screen name="UserMenu" component={UserMenuScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />

        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        <Stack.Screen name="MedicineDetail" component={MedicineDetailScreen} />

        <Stack.Screen name="RegisterUser" component={RegisterUserScreen} />
        <Stack.Screen name="RegisterMedicine" component={RegisterMedicineScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
