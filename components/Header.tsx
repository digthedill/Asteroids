import { Text, View, StyleSheet } from "react-native";
import {
  PressStart2P_400Regular,
  useFonts,
} from "@expo-google-fonts/press-start-2p";

const Header: React.FC = () => {
  const [fontsLoaded] = useFonts({ PressStart2P_400Regular });
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, fontFamily: "PressStart2P_400Regular" }}>
        Asteroids
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: "100%",
    backgroundColor: "#000a12",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 35,
  },
});

export default Header;
