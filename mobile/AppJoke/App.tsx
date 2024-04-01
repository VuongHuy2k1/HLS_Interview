import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './Component/header';
import Slider from './Component/slider';
import Main from './Component/main';
import Footer from './Component/footer';
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Slider />
        <Main />
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#ffff',
    height: 'auto',
  },
  scroll: {
    height: 1000,
  },
});
