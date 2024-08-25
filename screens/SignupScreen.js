import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.signInText4}>
      Fill your information below or SignIn with your Google account
      </Text>
      
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="example@gmail.com" style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="**********" style={styles.input} secureTextEntry />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput placeholder="**********" style={styles.input} secureTextEntry />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signInText3}>or sign up with</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>Already have an account ? 
        <Text style={styles.signInText2}>  Log In</Text>
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom:-15,
    textAlign: 'center',
    color: '#22577A',
    fontWeight:'900'
  },
  label: {
    fontSize: 15,
    marginBottom: 2,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#38A3A5',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900'
  },
  googleButton: {
    backgroundColor: '#ffff',
    borderColor: '#ccc',
    borderWidth: 3,
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#22577A',
    fontSize: 16,
    fontWeight:'bold'
  },
  signInText: {
    marginTop: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight:'bold'
  },
  signInText2: {
    color: '#38A3A5',
    paddingLeft: 100
  },
  signInText3: {
    color: 'grey',
    fontWeight:'bold',
    paddingStart: 150,
    paddingVertical: 10
  },
  signInText4: {
    color: 'grey',
    fontWeight:'bold',
    paddingStart: 0,
    textAlign: 'center',
    paddingVertical: 30
  }
});

export default SignupScreen;
