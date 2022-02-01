import { View, StyleSheet, Text } from "react-native"

const Footer: React.FC = () => {
    return (
        <View style={styles.contianer}>
            <Text style={styles.text}>Dillon Kelley</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
        color: 'white'
    }
})

export default Footer