import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { WHITE, BLACK } from "../styles/globalStyles";

const Footer: React.FC = () => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.text}>Created by Dillon Kelley</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 0.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLACK,
  },
  text: {
    color: WHITE,
  },
});

export default Footer;
