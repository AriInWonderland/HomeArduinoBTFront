import BluetoothSerial, { AndroidBluetoothDevice, iOSBluetoothDevice } from "react-native-bluetooth-serial-next";
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
    try{
        const enabling = BluetoothSerial.enable();
        return enabling;
    } catch (err){
        Alert.alert("Failed to enable bluetooth device");
        return -1;
    }
}

//SMART HOME IS A TYPE WITH METHODS FOR WHAT I WANT , like to turn on leds and that stuff
//let SmartHome;
let IHouse: SmartHome;
class SmartHome {
    ledVoltage: string;

    constructor(){ 
        this.ledVoltage = '0';
        this.ledState(this.ledVoltage);
    }
    //it's wpm so you I can easily add sliders and that kind of thing
    async ledState(value: string){
        await BluetoothSerial.write("LED ",value)
            .then(()=>{
                console.log("Sent LED ",value);
            })
            .catch(()=>{
                Alert.alert("ERROR SENDING BLUETOOTH MESSAGE");
            })
    }
}

const connect = async ()=> {
    await BluetoothSerial.connect("00:19:07:00:21:DD")
        .then(async ()=>{
            console.log("Conected: ", await BluetoothSerial.isConnected());
        })
        .catch((error)=>{
            Alert.alert("Couldn't connect to device, please reopen the app.");
            console.warn(error);
        });
    IHouse = new SmartHome();
}

const ledTest = async ()=>{
    await BluetoothSerial.write("a")
        .then(()=>{console.log("Wrote");})
        .catch(()=>{console.log("Error");});
}

export {
    ask_permissions,
    enable_bt, 
    connect,
    SmartHome,
    IHouse,
    ledTest,
};
