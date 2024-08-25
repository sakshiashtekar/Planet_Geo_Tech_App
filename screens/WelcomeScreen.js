import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Welcome,</Text>
      <Text style={styles.subtitle}>To Planet Geo Tech!</Text>
      <Image
        source={require('../assets/pgt_logo.png')} 
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Let's go</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 35,
    color: '#22577A',
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#22577A',
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900'
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  }
});

export default WelcomeScreen;

