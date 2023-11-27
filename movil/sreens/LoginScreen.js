import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    setEmailError(emailRegex.test(email) ? '' : 'Ingrese un correo electrónico válido');
  };

  const validatePassword = () => {
    setPasswordError(password.length >= 6 ? '' : 'La contraseña debe tener al menos 6 caracteres');
  };

  const handleLogin = () => {
    if (emailError === '' && passwordError === '') {
      console.log('Iniciar sesión con:', email, password);
    } else {
      console.log('Corrige los errores antes de iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          onBlur={validateEmail}
        />
        {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          onBlur={validatePassword}
        />
        {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  formContainer: {
    width: '30%',
    backgroundColor: 'red',
    padding: 20, 
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#a52a2a',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
