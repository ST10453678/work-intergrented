import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for error messages
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (!email) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!email.endsWith('@gmail.com')) {
      setEmailError('Please provide a valid Gmail address.');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    }

    if (valid) {
      alert(`Logged in with: ${email}`);
      // Add logic to handle authentication
    } else {
      alert('Please enter valid details.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#32CD32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
