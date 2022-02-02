import { View, StyleSheet, Text } from "react-native";

const Footer: React.FC = () => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.text}>Dillon Kelley</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 0.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000a12",
  },
  text: {
    color: "white",
  },
});

export default Footer;
