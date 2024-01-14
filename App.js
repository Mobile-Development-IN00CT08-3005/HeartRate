import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculate = () => {
    if (age !== '' && !isNaN(age)) {
      const ageNumber = parseFloat(age);
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);
      setLimits(`Limits ${lower} - ${upper}`);
    } else {
      setLimits('Invalid age');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.description}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={(text) => setAge(text)}
          keyboardType='decimal-pad'
        />
        <TouchableOpacity onPress={calculate} style={styles.customButton}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{limits}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEE8D6',
  },
  content: {
    marginTop: 200,
  },
  description: {
    fontSize: 28,
    marginBottom: 10,
    color: '#472F05',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#472F05',
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  customButton: {
    backgroundColor: '#FA9C1B',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  result: {
    fontSize: 16,
    marginTop: 20,
    color: '#472F05',
  },
});
