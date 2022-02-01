import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, ListRenderItemInfo, Button } from 'react-native';

import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import Asteroid from './components/Asteroid';

import { today, formatDate, prettifyDate } from './utils/dates'
import collectData from './utils/getData';
import { AsteroidType } from './utils/types'
import DateInput from './components/DateInput';

export default function App() {
  const [date, setDate] = useState(today)
  const [showDate, setShowDate] = useState(false)
  const [asteroids, setAsteroids] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    collectData(formatDate(date), setAsteroids, setLoading)
  }, [date])

  if(loading){
    return <LoadingScreen />
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.dateSelector}>
          <Button onPress={() => setShowDate(true)} title={prettifyDate(date)} />
        </View>
        {
          showDate &&
        <DateInput setDate={setDate} setShowDate={setShowDate} date={date}/>
        }
        <FlatList
          data={asteroids}
          renderItem={({item}: ListRenderItemInfo<AsteroidType>) => {
            return <Asteroid key={item.id} item={item}  />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 20,
    width: '100%',
    padding: 10,
    margin: 10,
  },
  dateSelector: {
    marginBottom: 10,
    width: '50%'

  }
});
