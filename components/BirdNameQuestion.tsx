import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import BirbComponent from './BirdComponents';

export default function BirdNameQuestion({ birbData, updateBirbData, onNext, onBack }: { birbData: any, updateBirbData: any, onNext: () => void, onBack: () => void }) {
  const [name, setName] = useState('Sparkles');
  
  const randomNames = [
    'Fluffy', 'Chirpy', 'Pinky', 'Feathers', 'Sparkles', 
    'Bubbles', 'Sunny', 'Tweety', 'Rosie', 'Pebbles'
  ];
  
  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    setName(randomNames[randomIndex]);
  };
  
  const handleNext = () => {
    updateBirbData({ name: name });
    onNext();
  };
  
  const handleClear = () => {
    setName('');
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
          >
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '30%' }]} />
            </View>
          </View>
        </View>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <BirbComponent />
            
            <Text style={styles.title}>What do you want to name your baby chicken?</Text>
            <Text style={styles.subtitle}>You can change this later.</Text>
            
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter a name"
                autoCapitalize="words"
                autoFocus
              />
              {name.length > 0 && (
                <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                  <Text style={styles.clearButtonText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
            
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                style={styles.shuffleButton} 
                onPress={handleShuffle}
                activeOpacity={0.8}
              >
                <Text style={styles.shuffleButtonText}>Shuffle</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.nextButton, !name.trim() && { opacity: 0.5 }]}
                onPress={handleNext}
                activeOpacity={0.8}
                disabled={!name.trim()}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },
  progressContainer: {
    flex: 1,
    height: 10,
    marginLeft: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  statusBar: {
    height: 44,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  statusBarTime: {
    fontWeight: 'bold',
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBarBattery: {
    marginLeft: 5,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 50,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  clearButton: {
    position: 'absolute',
    right: 20,
    top: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  shuffleButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    flex: 1,
    marginRight: 10,
  },
  shuffleButtonText: {
    color: '#666',
    fontSize: 18,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    flex: 1,
    marginLeft: 10,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  keyboard: {
    backgroundColor: '#d1d5db',
    padding: 5,
  },
  keyboardSuggestions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e5e7eb',
    padding: 10,
    marginBottom: 5,
  },
  keyboardSuggestion: {
    color: '#333',
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  key: {
    width: 30,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  spaceKey: {
    width: 150,
  },
  navBar: {
    height: 50,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#333',
    marginHorizontal: 10,
  },
});