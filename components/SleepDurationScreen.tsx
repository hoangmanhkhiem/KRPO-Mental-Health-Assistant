import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BirbComponent from './BirdComponents';

export default function SleepDurationScreen({ birbData, updateBirbData , onNext, onBack} : { birbData: any, updateBirbData: any, onNext: () => void, onBack: () => void }) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const sleepOptions = [
    {
      id: 1,
      text: 'Less than 5 hours',
      icon: '😴',
      value: 'less_than_5'
    },
    {
      id: 2,
      text: '5-7 hours',
      icon: '🛌',
      value: '5_to_7'
    },
    {
      id: 3,
      text: '7-9 hours',
      icon: '🌙',
      value: '7_to_9'
    },
    {
      id: 4,
      text: 'More than 9 hours',
      icon: '☀️',
      value: 'more_than_9'
    }
  ];
  
  const handleOptionSelect = (optionId: any) => {
    const option = sleepOptions.find(o => o.id === optionId);
    if (option) {
      setSelectedOption(optionId);
      updateBirbData({ sleepDuration: option.value });
      onNext();
    }   
  };
  
  const handleBack = () => {
    onBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '50%' }]} />
          </View>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.birbContainer}>
          <BirbComponent showQuestion={true} sleeping={true} />
        </View>
        
        <Text style={styles.title}>How long do you usually sleep at night?</Text>
        
        <View style={styles.optionsContainer}>
          {sleepOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.sleepOption,
                selectedOption === option.id && styles.selectedSleepOption,
              ]}

              onPress={() => handleOptionSelect(option.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.optionIcon}>{option.icon}</Text>
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
    </SafeAreaView>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  birbContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    width: '100%',
  },
  sleepOption: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 80,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  selectedSleepOption: {
    borderColor: '#4CAF50',
    backgroundColor: '#f0fff0',
    borderWidth: 2,
  },
  optionIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
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