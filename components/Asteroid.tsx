import { Text, View, StyleSheet } from "react-native"
import { AsteroidType } from '../utils/types'
interface Props {
    item: AsteroidType
}

const Asteroid: React.FC<Props> = ({item}) => {
    return (
        <View style={styles.container}>
            <Text>Name: {item.name}</Text>
            <Text>Diameter: {item.diameter}ft</Text>
            <Text>Miss Distance: {item.missDistance}mi</Text>
            <Text>Speed: {item.speed}mph</Text>
            <Text>{item.dangerous ? 'Dangerously close 😨' : 'Not too close 😉'}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 5,
        backgroundColor: '#efefef'
    }
})

export default Asteroid