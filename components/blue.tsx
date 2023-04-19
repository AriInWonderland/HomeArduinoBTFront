import BluetoothSerial from "react-native-bluetooth-serial-next";
import { Alert, PermissionsAndroid } from "react-native";

const ask_permissions = async () =>{
    let scan_granted;
    let connect_granted;
    if(await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN))
        scan_granted = true;
    else
        scan_granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,{
                title: '',
                message: '', 
                buttonPositive: 'OK',
                buttonNeutral: '',
                buttonNegative: '',
            });
    if(await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT))
        connect_granted = true;
    else
        connect_granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,{
                title: '',
                message: '',
                buttonPositive: 'OK',
                buttonNeutral: '',
                buttonNegative: '',
            });
    return(
        scan_granted &&
        connect_granted
    );
}

const enable_bt = async () => {
    try{
        const enabling = BluetoothSerial.enable();
        return enabling;
    } catch (err){
        Alert.alert("Failed to enable bluetooth device");
        return -1;
    }
}

export {ask_permissions,
        enable_bt
        };
