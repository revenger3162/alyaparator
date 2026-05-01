import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, Animated } from 'react-native';

const { width } = Dimensions.get('window');

export default function ReaderScreen({ poems, onClose }) {
  const [fontSize, setFontSize] = useState(20);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnim] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    const toValue = menuVisible ? 0 : 1;
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 40));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 16));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.pagerView}
      >
        {poems.map((poem, index) => (
          <View key={poem.id} style={styles.page}>
            <ScrollView 
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <TouchableOpacity 
                activeOpacity={1} 
                style={styles.touchArea} 
                onPress={toggleMenu}
              >
                <View style={styles.contentWrapper}>
                  <Text style={[styles.title, { fontSize: fontSize + 8 }]}>{poem.title}</Text>
                  
                  <Text style={[styles.content, { fontSize: fontSize, lineHeight: fontSize * 1.5 }]}>
                    {poem.content}
                  </Text>
                  
                  {poem.date && (
                    <Text style={[styles.date, { fontSize: fontSize - 4 }]}>{poem.date}</Text>
                  )}
                  
                  <Text style={styles.pageNumber}>- {index + 1} -</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        ))}
      </ScrollView>

      {/* Üst ve Alt Menüler (Animasyonlu) */}
      <Animated.View style={[styles.topMenu, { opacity: menuAnim, transform: [{ translateY: menuAnim.interpolate({ inputRange: [0, 1], outputRange: [-150, 0] }) }] }]}>
        <TouchableOpacity onPress={onClose} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Kapat</Text>
        </TouchableOpacity>
        <Text style={styles.menuTitle}>Alya'nın Şiir Defteri</Text>
        <View style={{ width: 50 }} />
      </Animated.View>

      <Animated.View style={[styles.bottomMenu, { opacity: menuAnim, transform: [{ translateY: menuAnim.interpolate({ inputRange: [0, 1], outputRange: [150, 0] }) }] }]}>
        <TouchableOpacity onPress={decreaseFont} style={styles.fontButton}>
          <Text style={[styles.fontButtonText, { fontSize: 16 }]}>A-</Text>
        </TouchableOpacity>
        <Text style={styles.menuTitle}>Metin Boyutu</Text>
        <TouchableOpacity onPress={increaseFont} style={styles.fontButton}>
          <Text style={[styles.fontButtonText, { fontSize: 22 }]}>A+</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f0e6', // Kağıt rengi
  },
  pagerView: {
    flex: 1,
  },
  page: {
    width: width,
    flex: 1,
    backgroundColor: '#f5f0e6',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  touchArea: {
    width: width,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    maxWidth: 500,
  },
  title: {
    fontWeight: 'bold',
    color: '#2c2c2c',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'serif',
  },
  content: {
    color: '#3a3a3a',
    textAlign: 'center',
    fontFamily: 'serif',
  },
  date: {
    color: '#888',
    marginTop: 30,
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
  pageNumber: {
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
    fontFamily: 'serif',
  },
  topMenu: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  menuButtonText: {
    color: '#4a2c4a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuTitle: {
    color: '#333',
    fontWeight: '600',
    fontSize: 16,
  },
  fontButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 22,
  },
  fontButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
