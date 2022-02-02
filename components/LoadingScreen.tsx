import { useEffect, useRef } from "react";
import { Text, StyleSheet, Animated } from "react-native";
import {
  PressStart2P_400Regular,
  useFonts,
} from "@expo-google-fonts/press-start-2p";

const LoadingScreen: React.FC = () => {
  const [fontsLoaded] = useFonts({ PressStart2P_400Regular });
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  if (!fontsLoaded) {
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Loading...</Text>
      </Animated.View>
    );
  } else {
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text
          style={{ ...styles.title, fontFamily: "PressStart2P_400Regular" }}
        >
          Loading...
        </Text>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#000a12",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
