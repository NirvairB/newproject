import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Login = () => {
  const naigation = useNavigation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name.trim() === '') {
      alert('Please enter a valid name');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

  };

  const validateEmail = email => {
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <Button title="Login" onPress={handleLogin} />
      <Pressable onPress={() => naigation.navigate('Bottom')}>
        <Text style={{padding: 10}}>Create New Account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default Login;
