import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
    header: {
        backgroundColor: '#242948',
        paddingVertical: 15,
        color: 'white',
        fontSize: 30,
        fontFamily: 'cursive',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#242948',
        borderRadius: 25,
        marginHorizontal: 10,
        marginVertical: 10
    },
    inputField: {
        width: '85%',
        color: '#242948',
        fontSize: 18,
        fontFamily: 'sans-serif',
        paddingHorizontal: 20
    },
    mainScreen: {
        width:'50%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        maxHeight: 350,
        justifyContent:'center',
        alignItems:'center',
    },
    headingAllItems: {
        textAlign: 'center',
        color: '#242948',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    card: {
        width:'100%',
        marginTop: 15,
        height:'100%',
    },
    cardHeader: {
        backgroundColor: '#353534',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    cardHeadingText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'sans-serif'
    },
    cardImageContainer: {
        borderWidth: 14,
        borderColor: 'white',
        height:'40%'
    },
    cardImage: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%'
    },
    cardBodyContainer: {
        backgroundColor: '#353534',
        paddingHorizontal: 12,
        paddingVertical: 10,
        height:'45%',
        justifyContent:'center',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
    cardBodyHeadings: {
        color: '#E5D9B6',
        fontSize: 22,
        marginBottom: 2,
        fontFamily: 'sans-serif',
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    cardBodyPara: {
        color: 'white',
        fontSize: 16,
        fontStyle:'italic',
        marginBottom: 10,
        borderBottomWidth:1,
        borderColor:'white',
        paddingBottom:3
    }
})