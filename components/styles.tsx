import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#6bb4f7'
    },
    title:{
        fontSize: 52,
        textAlign: 'center',
        top: '6%',
        color: '#ffffff',
    },
    subtitle:{
        fontSize: 18,
        color: '#ffffff',
    },
    button:{
        flexDirection: 'row',
        fontSize: 18,
        color: '#ffffff',
        width: '45%',
        top: '30%',
        padding: 12,
        borderWidth: 2,
        borderRadius: 50,
        margin: 15,
        height: '20%'
    },
    deviceButton:{
        borderWidth: 8,
        color: "#ffffff",
        borderColor: "#fff",
        padding: 30,
        borderRadius: 100,
        width: 200,
        height: 200,
        alignSelf: 'center',
        top: 100,
        transform:[{
            perspective: 100,
        }],
    },

    item_bg:{
        color: '#ffffff',
        padding: 20,
    },
    item_fg:{
        fontSize: 14,
        color: '#000000',
    },
});
