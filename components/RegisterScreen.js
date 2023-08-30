import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email.');
      return;
    }


    setName('');
    setEmail('');
    setPassword('');

   
    Alert.alert('Success', 'Registration successful!');
  };

const isValidEmail = email => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

  return (
    <View>
      <Text>Register Screen</Text>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
