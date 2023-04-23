import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from './components/Screens/welcome_screen';
import { ConnectDevice } from './components/Screens/connect_device';
import { LedScreen     } from './components/Screens/devices_screens/led';

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
                    component={ConnectDevice}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Led0"
                    component={LedScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
