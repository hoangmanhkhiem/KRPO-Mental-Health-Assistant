import ActivityLevelScreen from '@/components/ActivityLevelScreen';
import AgeScreen from '@/components/AgeScreen';
import BirdNameQuestion from '@/components/BirdNameQuestion';
import HatchedChickenScreen from '@/components/HathedChickenScreen';
import MorningRoutineScreen from '@/components/MorningRoutineScreen';
import NotificationsScreen from '@/components/NotificationsScreen';
import SelfCareScreen from '@/components/SelfCareScreen';
import SleepDurationScreen from '@/components/SleepDurationScreen';
import StressLevelScreen from '@/components/StressLevelScreen';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function QuizScreen() {
  const [current, setCurrent] = useState(0);
  const [birbData, setBirbData] = useState<any>({});

  const updateBirbData = (data: any) => {
    setBirbData((prev: any) => ({ ...prev, ...data }));
  };

  const goNext = () => {
    if (current < 100) setCurrent(current + 1);
    // Nếu muốn làm gì đó khi kết thúc, thêm ở đây
  };

  const goBack = () => {
    if (current > 0) setCurrent(current - 1);
  };

  let questionComponent = null;
  if (current === 0) {
    questionComponent = (
      <HatchedChickenScreen birbData={birbData} updateBirbData={updateBirbData} onNext={goNext} onBack={goBack} />
    );
  } else if (current === 1) {
    questionComponent = (
      <BirdNameQuestion birbData={birbData} updateBirbData={updateBirbData} onNext={goNext} onBack={goBack} />
    );
  } else if (current === 2) {
    questionComponent = (
      <SelfCareScreen birbData={birbData} onNext={goNext} onBack={goBack} />
    );
  } else if (current === 3) {
    questionComponent = (
      <NotificationsScreen quizData={birbData} onNext={goNext} onBack={goBack} />    );
  } else if (current === 4) {
    questionComponent = (
      <MorningRoutineScreen quizData={birbData} updateQuizData={updateBirbData} onNext={goNext} onBack={goBack} />
    );
  } else if (current === 5) {
    questionComponent = (
      <AgeScreen birbData={birbData} updateBirbData={updateBirbData} onNext={goNext} onBack={goBack} />
    );
  } else if (current === 6) {
    questionComponent = (
      <SleepDurationScreen birbData={birbData} updateBirbData={updateBirbData} onNext={goNext} onBack={goBack} />
    );
  } else if (current === 7) {
    questionComponent = (
      <ActivityLevelScreen birbData={birbData} updateBirbData={updateBirbData} onNext={goNext} onBack={goBack} />
    );
  } else if (current === 8) {
    questionComponent = (
      <StressLevelScreen birbData={birbData} updateBirbData={updateBirbData} onNext={goNext} onBack={goBack} />
    );
  }

  return (
    <View style={styles.container}>
      {questionComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 0,
  },
});
