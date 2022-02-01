import {View, Text, StyleSheet} from 'react-native'
const LoadingScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default LoadingScreen