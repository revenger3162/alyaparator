import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CoverScreen from './src/CoverScreen';
import ReaderScreen from './src/ReaderScreen';
import { poems } from './src/data';

export default function App() {
  const [isBookOpen, setIsBookOpen] = useState(false);

  return (
    <View style={styles.container}>
      {isBookOpen ? (
        <ReaderScreen poems={poems} onClose={() => setIsBookOpen(false)} />
      ) : (
        <CoverScreen onOpenBook={() => setIsBookOpen(true)} />
      )}
      <StatusBar style={isBookOpen ? "dark" : "light"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d253d',
  },
});
