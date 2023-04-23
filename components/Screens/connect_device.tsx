import { View, Text, ScrollView, Alert } from "react-native";

import { styles } from "../styles";
import { connect, SmartHome, IHouse } from "../blue";

export const ConnectDevice = ({navigation}) =>{
    //let ready = false;
    //connect().then(()=>{ready=true;console.log(IHouse);});
    console.log(".");
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Connected to device "device"</Text>
            <Text style={styles.button} onPress={()=>{navigation.navigate("Led0")}}>
                {'\t\t\t\t\t\t\t\t'}Led0{'\n'}
                {'\t'}Brightness:{'\t\t\t\t\t'}255
            </Text>
            <Text style={[styles.button, {left: '23.5%', top: '-17.5%'}]} onPress={()=>{/**/console.log('Second LED')}}>
                {'\t\t\t\t\t\t\t\t'}Led{'\n'}
                {'\t'}Brightness:{'\t\t\t\t\t'}255
            </Text>
        </View>
    );
}
