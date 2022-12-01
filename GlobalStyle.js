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
    mainScreen: {
        
        paddingHorizontal: 40,
        paddingVertical: 15
    },
    card: {
        marginTop: 15,
        marginBottom: 10
    },
    cardHeader: {
        backgroundColor: '#353534',
        paddingHorizontal: 12,
        paddingVertical: 5
    },
    cardHeadingText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'sans-serif'
    },
    cardImageContainer: {
        borderWidth: 14,
        borderColor: 'white',
    },
    cardImage: {
        resizeMode: 'stretch',
        width: '100%',
        height: 200
    },
    cardBodyContainer: {
        backgroundColor: '#353534',
        paddingHorizontal: 12,
        paddingVertical: 20
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
        fontFamily: 'cursive',
        marginBottom: 10,
    }
})