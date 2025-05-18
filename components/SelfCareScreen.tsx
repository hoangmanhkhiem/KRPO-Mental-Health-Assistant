import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BirbComponent from './BirdComponents';

export default function SelfCareScreen({ birbData, onNext, onBack }: { birbData: any, onNext: () => void, onBack: () => void }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  const handleSelectAnswer = (answerId: number) => {
    setSelectedAnswer(answerId);
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
          >
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.messageContainer}>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>
                Nice to meet you, {birbData.userName}! They call me a self-care pet. What is self-care?
              </Text>
            </View>
          </View>
          
          <View style={styles.birbContainer}>
            <BirbComponent showQuestion={true} />
          </View>
          
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                { backgroundColor: '#F9A826' },
                selectedAnswer === 1 && styles.selectedOption,
              ]}
              onPress={() => handleSelectAnswer(1)}
              activeOpacity={0.9}
            >
              <Text style={styles.optionText}>
                Self-care means taking care of your body, mind, and relationships, while having fun!
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.optionButton,
                { backgroundColor: '#E91E63' },
                selectedAnswer === 2 && styles.selectedOption,
              ]}
              onPress={() => handleSelectAnswer(2)}
              activeOpacity={0.9}
            >
              <Text style={styles.optionText}>
                Self-care means doing what you can, even when you're not feeling your best.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity 
              style={[styles.nextButton, selectedAnswer === null && { opacity: 0.5 }]}
              onPress={handleNext}
              activeOpacity={0.8}
              disabled={selectedAnswer === null}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
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
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  messageContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 20,
    maxWidth: '90%',
    position: 'relative',
  },
  messageText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
  },
  birbContainer: {
    alignItems: 'center',
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },
  selectedOption: {
    transform: [{ scale: 1.02 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
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
  bottomContainer: {
    alignItems: 'center',
    padding: 20,
  },
  nextButton: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#F9A826',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});