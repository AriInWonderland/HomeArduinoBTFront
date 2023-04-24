import { View, Text, Pressable} from "react-native";
import BluetoothSerial from "react-native-bluetooth-serial-next";

import { styles } from '../../styles';

export const LedScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Pressable onPress={async() => {
                                    BluetoothSerial.write("A")
                                    .then(()=>{console.log("sent A")})
                                    .catch(()=>{console.log("Error");})
                                }}>
                <View style={styles.deviceButton}></View>
            </Pressable>
        </View>
    )
}
