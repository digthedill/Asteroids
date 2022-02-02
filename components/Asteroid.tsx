import { useRef, useEffect } from "react";
import { Text, StyleSheet, Animated, View } from "react-native";
import { AsteroidType } from "../utils/types";
interface Props {
  item: AsteroidType;
}

const Asteroid: React.FC<Props> = ({ item }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          backgroundColor: item.dangerous ? "#ff795b" : "#fcfcfc",
        },
      ]}
    >
      <View style={styles.infoContent}>
        <Text style={styles.title}>Name: {item.name}</Text>
        <Text>Diameter: {item.diameter}ft</Text>
        <Text>Miss Distance: {item.missDistance}mi</Text>
        <Text>Speed: {item.speed}mph</Text>
      </View>
      <View style={styles.emojiContent}>
        <Text style={{ fontWeight: item.dangerous ? "bold" : "normal" }}>
          {item.dangerous ? "Dangerously close" : "Not too close"}
        </Text>
        <Text style={styles.emoji}>{item.dangerous ? "😨" : "😉"}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
  },
  infoContent: {
    width: "50%",
  },
  emojiContent: {
    alignItems: "center",
    width: "50%",
  },

  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  emoji: {
    fontSize: 50,
  },
});

export default Asteroid;
