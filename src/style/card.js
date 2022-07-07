import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#f0f6ff',
        marginBottom:20
    },
    title:{
        marginTop:10,
        marginBottom: 10,
        textAlign: 'center',
    },
    img:{
        width: '90%',
        height: '55%',
        marginBottom: 10,
    }
})