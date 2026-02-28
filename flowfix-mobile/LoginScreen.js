// LoginScreen.js, react & firebase for email & password auth

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
//
  const authHandle = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Account created successfuly.');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Login successful.');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlowFix</Text>
      <Text style={styles.subtitle}>{isSignUp ? 'Create Account' : 'Log In'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={authHandle}>
        <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Log In'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.switchText}>
          {isSignUp ? 'Already a FlowFix member? Log in' : "New to FlowFix? Sign up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f1f1f1' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#1e3a5f', marginBottom: 8 },
  subtitle: { fontSize: 20, color: '#333', marginBottom: 32 },
  input: { backgroundColor: 'white', padding: 14, borderRadius: 8, marginBottom: 16, borderColor: '#ccc', borderWidth: 1 },
  button: { backgroundColor: '#f97316', padding: 16, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  switchText: { color: '#f97316', textAlign: 'center', marginTop: 8 }
});