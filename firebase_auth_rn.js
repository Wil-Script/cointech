// App.js or AuthScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // From Firebase Console
});

const AuthScreen = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Email/Password Sign Up
  const signUpWithEmail = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  // Email/Password Sign In
  const signInWithEmail = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  // Google Sign In
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  // Sign Out
  const signOut = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.signOut(); // Clear Google sign-in cache
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // Get ID Token (equivalent to your Android code)
  const getIdToken = async () => {
    try {
      const idToken = await auth().currentUser.getIdToken();
      console.log('ID Token:', idToken);
      // Send this token to your backend for verification
      sendTokenToBackend(idToken);
      return idToken;
    } catch (error) {
      console.error('Error getting ID token:', error);
    }
  };

  // Send token to backend
  const sendTokenToBackend = async (token) => {
    try {
      const response = await fetch('YOUR_BACKEND_URL/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ idToken: token })
      });
      
      const result = await response.json();
      console.log('Backend response:', result);
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  };

  if (initializing) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // If user is signed in, show user info and sign out option
  if (user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.userInfo}>Email: {user.email}</Text>
        <Text style={styles.userInfo}>UID: {user.uid}</Text>
        
        <TouchableOpacity style={styles.button} onPress={getIdToken}>
          <Text style={styles.buttonText}>Get ID Token</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.signOutButton]} onPress={signOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // If user is not signed in, show authentication options
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Authentication</Text>
      
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
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={signInWithEmail}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Signing In...' : 'Sign In with Email'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={signUpWithEmail}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Creating Account...' : 'Sign Up with Email'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.googleButton]} 
        onPress={signInWithGoogle}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Signing In...' : 'Sign In with Google'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  signOutButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
});

export default AuthScreen;