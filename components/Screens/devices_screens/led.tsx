import { View, Text, Pressable} from "react-native";
import BluetoothSerial from "react-native-bluetooth-serial";
import { Buffer } from "buffer";
var iconv = require('iconv-lite');

import { styles } from '../../styles';
import { house_write } from '../../blue';

export const LedScreen = ({navigation}) => { 
    const device = 'LED';
    const data = 'TURN_ON';
    return(
        <View style={styles.container}>
            <Pressable onPress={()=>house_write(device, data)}>
                <View style={styles.deviceButton}></View>
            </Pressable>
        </View>
    )
}
