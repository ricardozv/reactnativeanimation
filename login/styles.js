import { StyleSheet, Dimensions } from "react-native";
const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical: 10,
        justifyContent:'flex-end'

    },
    button: {
        backgroundColor:'rgba(123,104,238,0.8)',
        height: 55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 22,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth:1,
        borderColor:'white'
    },
    buttonText: {
            fontSize: 20, 
            fontWeight: '600',
            color:'white',
            letterSpacing: 0.5
    },
    buttomContainer: {
        justifyContent: 'center',
        height: height/ 3
    },
    textInput:{
        height: 50,
        borderWidth: 1,
        borderColor:'rgba(0,0,0,0.3)',
        marginHorizontal: 20,
        marginVertical: 10, 
        borderRadius: 25,
        paddingLeft: 10
    },
    formButton:{
        backgroundColor:'rgba(123,104,238,0.8)',
        height: 55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 22,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth:1,
        borderColor:'white'

    }
});

export default styles;















