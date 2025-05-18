import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BirbComponent from './BirdComponents';

export default function AgeScreen({ birbData, updateBirbData, onNext, onBack }: { birbData: any, updateBirbData: any, onNext: () => void, onBack: () => void }) {
  const [selectedAge, setSelectedAge] = useState(null);
  
  const ageRanges = [
    'Under 16',
    '16-24',
    '25-34',
    '35+'
  ];
  
  const handleAgeSelect = (age: any) => {
    setSelectedAge(age);
    updateBirbData({ ageRange: age });
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
        <BirbComponent />
        
        <Text style={styles.title}>How old are you?</Text>
        <Text style={styles.subtitle}>This helps us personalize your experience</Text>
        
        <View style={styles.optionsContainer}>
          {ageRanges.map((age) => (
            <TouchableOpacity
              key={age}
              style={[
                styles.ageOption,
                selectedAge === age && styles.selectedAgeOption,
              ]}
              onPress={() => handleAgeSelect(age)}
              activeOpacity={0.8}
            >
              <Text style={styles.ageOptionText}>{age}</Text>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  optionsContainer: {
    width: '100%',
  },
  ageOption: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  selectedAgeOption: {
    borderColor: '#4CAF50',
    backgroundColor: '#f0fff0',
  },
  ageOptionText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
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