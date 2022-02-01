import { Text, View, StyleSheet } from "react-native"

const Header: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Asteroids</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 45,
    }
})

export default Header