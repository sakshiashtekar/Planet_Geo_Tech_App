import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const AttendanceRecordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText} onPress={() => navigation.navigate('Home')}>←</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/attendance_img.png')} 
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('AttendancePhoto')} >
        <Text style={styles.buttonText}>Login Time</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('AttendancePhoto')} >
        <Text style={styles.buttonText}>Lunch Break Start</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('AttendancePhoto')} >
        <Text style={styles.buttonText}>Lunch Break End</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('AttendancePhoto')} >
        <Text style={styles.buttonText}>Logout Time</Text>
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
  button: {
    backgroundColor: '#38A3A5',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 30,
    width: '70%',
    alignItems: 'center', 
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
    marginTop: -120
  },
  backButtonText: {
    fontSize: 35,
    color: '#000',
  },
});

export default AttendanceRecordScreen;
