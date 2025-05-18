import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BirbComponent from './BirdComponents';

export default function HatchedChickenScreen({ birbData, updateBirbData, onNext, onBack }: { birbData: any, updateBirbData: any, onNext: () => void, onBack: () => void }) {
  const pronounOptions = [
    { value: 'he/him', icon: '❤️' },
    { value: 'she/her', icon: '❤️' },
    { value: 'they/them', icon: '❤️' },
  ];

  const handlePronounSelect = (pronoun: string) => {
    updateBirbData({ pronouns: pronoun });
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  const renderPronounOption = (option: { value: string, icon: string }) => {
    const isSelected = birbData.pronouns === option.value;
    
    return (
      <TouchableOpacity
        key={option.value}
        style={[
          styles.pronounOption,
          isSelected && styles.selectedPronounOption,
        ]}
        onPress={() => handlePronounSelect(option.value)}
        activeOpacity={0.8}
      >
        <View style={[
          styles.heartIcon, 
          isSelected ? styles.selectedHeartIcon : styles.unselectedHeartIcon
        ]}>
          <Text style={styles.heartText}>{option.icon}</Text>
        </View>
        <Text style={[
          styles.pronounText, 
          isSelected ? styles.selectedPronounText : styles.unselectedPronounText
        ]}>
          {option.value}
        </Text>
        {isSelected && (
          <View style={styles.checkmarkContainer}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.content}>
          <BirbComponent />
          <Text style={styles.title}>You hatched a chicken!</Text>
          <Text style={styles.subtitle}>Your chicken's pronouns</Text>
          <View style={styles.pronounsContainer}>
            {pronounOptions.map(renderPronounOption)}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.nextButton, !birbData.pronouns && { opacity: 0.5 }]}
            onPress={onNext}
            activeOpacity={0.8}
            disabled={!birbData.pronouns}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
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
    fontSize: 20,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  pronounsContainer: {
    width: '100%',
    marginTop: 10,
  },
  pronounOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
  },
  selectedPronounOption: {
    borderColor: '#e091b9',
    backgroundColor: '#fff',
    shadowColor: '#e091b9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  heartIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  selectedHeartIcon: {
    opacity: 1,
  },
  unselectedHeartIcon: {
    opacity: 0.3,
  },
  heartText: {
    fontSize: 24,
  },
  pronounText: {
    fontSize: 18,
    flex: 1,
  },
  selectedPronounText: {
    color: '#333',
    fontWeight: '500',
  },
  unselectedPronounText: {
    color: '#aaa',
  },
  checkmarkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e091b9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  bottomContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
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
  statusBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});