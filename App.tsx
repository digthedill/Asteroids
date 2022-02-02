import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ListRenderItemInfo,
  Button,
} from "react-native";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Asteroid from "./components/Asteroid";
import DateInput from "./components/DateInput";

import { formatDate, prettifyDate } from "./utils/dates";
import collectData from "./utils/getData";
import { AsteroidType } from "./utils/types";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    collectData(formatDate(date), setAsteroids, setLoading);
  }, [date]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.dateSelector}>
          <Text style={{ marginRight: 10, color: "white" }}>
            Choose Your Date:{" "}
          </Text>
          <Button
            onPress={() => setShowDate(true)}
            title={prettifyDate(date)}
          />
        </View>
        <DateInput
          setDate={setDate}
          setShowDate={setShowDate}
          showDate={showDate}
          date={date}
        />

        <FlatList
          data={asteroids}
          renderItem={({ item }: ListRenderItemInfo<AsteroidType>) => {
            return <Asteroid key={item.id} item={item} />;
          }}
        />
      </View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#263238",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 6,
    width: "100%",
    padding: 10,
    margin: 10,
  },
  dateSelector: {
    marginBottom: 10,
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
});
