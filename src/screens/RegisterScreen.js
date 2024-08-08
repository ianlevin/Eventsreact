import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/register', { first_name, last_name, username, password });
      if (response.data.success) {
        navigation.navigate('Login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={first_name}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={last_name}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default RegisterScreen;
