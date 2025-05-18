import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BirbComponent from './BirdComponents';

export default function NotificationsScreen({ quizData, onNext, onBack }: { quizData: any, onNext: () => void, onBack: () => void }) {
  const handleEnableNotifications = () => {
    // Here you would implement actual notification permission logic
    onNext();
  };
  
  const handleMaybeLater = () => {
    onNext();
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.title}>Get reminders from {quizData.name || 'Sparkles'}</Text>
        
        <View style={styles.notificationPreview}>
          <View style={styles.notificationHeader}>
            <BirbComponent />
            <View style={styles.notificationHeaderText}>
              <Text style={styles.notificationTitle}>From {quizData.name || 'Sparkles'}</Text>
              <Text style={styles.notificationTime}>now</Text>
            </View>
          </View>
          <Text style={styles.notificationMessage}>Remember to drink water!</Text>
        </View>
        
        <View style={styles.birbContainer}>
          <BirbComponent showQuestion={true} />
        </View>
        
        <View style={styles.spacer} />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.enableButton}
            onPress={handleEnableNotifications}
            activeOpacity={0.8}
          >
            <Text style={styles.enableButtonText}>Turn on notifications</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.laterButton}
            onPress={handleMaybeLater}
            activeOpacity={0.8}
          >
            <Text style={styles.laterButtonText}>Maybe later</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  notificationPreview: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  notificationHeaderText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationTime: {
    fontSize: 14,
    color: '#666',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#333',
  },
  birbContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  spacer: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 30,
  },
  enableButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  enableButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  laterButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  laterButtonText: {
    color: '#666',
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
});