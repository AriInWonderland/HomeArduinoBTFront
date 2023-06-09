import BluetoothSerial, { AndroidBluetoothDevice, iOSBluetoothDevice } from "react-native-bluetooth-serial";
import { Alert, PermissionsAndroid, View } from "react-native";

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
    await BluetoothSerial.enable()
        .then(()=>{
            console.log("BT Enabled");
        })
        .catch(()=>{
            Alert.alert("Failed to enable Bluetooth");
        });
}

const house_write = (device, value) =>{
    BluetoothSerial.write(device)
        .then(()=>{console.log("Sent initial data");})
        .catch(()=>{Alert.alert("failed")});
    BluetoothSerial.write(value)
        .then(()=>{console.log("Sent data");})
        .catch(()=>{Alert.alert("failed")})
    BluetoothSerial.clear();
}

const connect = async ()=> {
    await BluetoothSerial.connect("00:19:07:00:21:DD")
        .then(()=>{
            console.log("BT Connected");
        })
        .catch(()=>{
            Alert.alert("Failed to connect to the HC-05");
        });
}

export {
    ask_permissions,
    enable_bt, 
    connect,
    house_write,
};
