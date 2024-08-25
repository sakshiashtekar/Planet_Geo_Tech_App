import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const EmployeeDetails = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
    
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText} onPress={() => navigation.navigate('Home')}>←</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.headerText}>Employee Details</Text>
      
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}></View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="example@gmail.com"
        />
        <TextInput
          style={styles.input}
          value={companyName}
          onChangeText={setCompanyName}
          placeholder="Enter your name"
        />
        <TextInput
          style={styles.input}
          value={companyName}
          onChangeText={setCompanyName}
          placeholder="Enter your company name"
        />
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop:50,
  },
  backButtonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  backButtonText: {
    fontSize: 35,
    color: '#000',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#22577A',
    marginVertical: 20,
    marginTop: -5
  },
  profileContainer: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: '#E0F5EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 125,
    backgroundColor: '#D9D9D9',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#E0F5EB',
    borderRadius: 20,
    padding: 25,
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 25,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#22577A',
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 10,
    width: 150,
    marginLeft: 70
  },
  saveButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
  },
});

export default EmployeeDetails;
