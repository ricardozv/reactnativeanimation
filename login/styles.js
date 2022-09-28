import { StyleSheet, Dimensions } from "react-native";
const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end'

    },
    button: {
        backgroundColor:'rgba(123,104,238,0.8)',
        height: 50,
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
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 22,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth:1,
        borderColor:'white',
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity: 0.25,
        shadowRadius:3.84,
        elevation: 5
    },
    formInputContainer:{
        marginBottom: 70
    },
    closeButtonContainer: {
        height: 40, 
        width: 40, 
        justifyContent:'center',
        alignSelf:'center',
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height: 5
        }
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor:'white',
    alignItems:'center',
    borderRadius: 20
});

export default styles;















