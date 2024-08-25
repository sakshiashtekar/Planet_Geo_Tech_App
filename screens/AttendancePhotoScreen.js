import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AttendancePhotoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

     <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText} onPress={() => navigation.navigate('AttendanceRecord')}>←</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Attendance Photo</Text>

      <Text style={styles.subtitle}>Upload your attendance photo here</Text>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Upload Photo</Text>
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
    fontSize: 24,
    fontWeight: '900',
    marginTop: -250,
    marginBottom: 250,
    color: '#22577A',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#38A3A5',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },
  backButtonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: -340
  },
  backButtonText: {
    fontSize: 35,
    color: '#000',
  },
});

export default AttendancePhotoScreen;
