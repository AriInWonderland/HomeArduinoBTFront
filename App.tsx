import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from './components/Screens/welcome_screen';
import { SearchDevices } from './components/Screens/search_devices';

const Stack = createNativeStackNavigator();

const App = () =>  {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Welcome" 
                    component={WelcomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Scanning" 
                    component={SearchDevices}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
