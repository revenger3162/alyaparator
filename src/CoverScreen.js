import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CoverScreen({ onOpenBook }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookCover}>
        {/* Cilt payı */}
        <View style={styles.spine} />

        <View style={styles.content}>
          <Text style={styles.author}>ALYA'NIN</Text>
          <Text style={styles.title}>ŞİİR DEFTERİ</Text>

          <TouchableOpacity style={styles.openButton} onPress={onOpenBook} activeOpacity={0.8}>
            <Text style={styles.openButtonText}>Kapağı Aç</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d253d', // Arka plan
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookCover: {
    width: width > 600 ? 500 : width * 0.9,
    height: height * 0.8,
    maxHeight: 700,
    backgroundColor: '#4a2c4a',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  spine: {
    width: 30,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  author: {
    color: '#ebd6ad',
    fontSize: width > 400 ? 24 : 18,
    letterSpacing: 6,
    fontWeight: '300',
    marginBottom: 20,
  },
  title: {
    color: '#f2e6cf',
    fontSize: width > 400 ? 42 : 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },
  openButton: {
    backgroundColor: '#ebd6ad',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  openButtonText: {
    color: '#3d253d',
    fontSize: 18,
    fontWeight: '600',
  },
});
