import { View, Text } from "react-native";
import { useEffect } from "react";

import {ask_permissions, enable_bt} from '../blue';

export const WelcomeScreen = ({navigation}) => {
    useEffect(()=>{       
            ask_permissions();
            enable_bt().then(() =>{
                navigation.navigate("Scanning");
            }); 
        },[])
    return(
        <View>
            <Text>Testing</Text>
        </View>
    )
}

