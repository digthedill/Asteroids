import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { WHITE, BLACK } from "../styles/globalStyles";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, fontFamily: "PressStart2P_400Regular" }}>
        Asteroids
      </Text>
      <Text style={{ color: WHITE, fontFamily: "PressStart2P_400Regular" }}>
        Press Date to Play
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: "100%",
    backgroundColor: BLACK,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: WHITE,
    fontSize: 35,
  },
});

export default Header;
