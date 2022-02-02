import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, fontFamily: "PressStart2P_400Regular" }}>
        Asteroids
      </Text>
      <Text style={{ color: "white", fontFamily: "PressStart2P_400Regular" }}>
        Press Date to Play
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
