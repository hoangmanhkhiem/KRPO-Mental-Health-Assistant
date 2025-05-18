import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BirbComponent from './BirdComponents';

export default function ActivityLevelScreen({ birbData, updateBirbData , onNext, onBack} : { birbData: any, updateBirbData: any, onNext: () => void, onBack: () => void }) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const activityOptions = [
    {
      id: 1,
      text: "I'm on the move most of the day",
      icon: '🏃',
      value: 'very_active'
    },
    {
      id: 2,
      text: "I balance being stationary with some movement",
      icon: '🚶',
      value: 'moderate'
    },
    {
      id: 3,
      text: "I don't move much and want to be more active",
      icon: '🪑',
      value: 'sedentary'
    },
    {
      id: 4,
      text: "I have conditions that limit my movement",
      icon: '🌻',
      value: 'limited'
    }
  ];
  
  const handleOptionSelect = (option: any) => {
    setSelectedOption(option.id);
    updateBirbData({ activityLevel: option.value });
    onNext();
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
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.birbContainer}>
          <BirbComponent showQuestion={true} />
        </View>
        
        <Text style={styles.title}>How active are you during the day?</Text>
        
        <View style={styles.optionsContainer}>
          {activityOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.activityOption,
                selectedOption === option.id && styles.selectedActivityOption,
              ]}
              onPress={() => handleOptionSelect(option)}
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
  activityOption: {
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
  selectedActivityOption: {
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