import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TrueFalseQuestionProps {
  question: string;
  onSelect: (answer: boolean) => void;
  selectedAnswer?: boolean;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({ question, onSelect, selectedAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsRow}>
        <TouchableOpacity
          style={[styles.option, selectedAnswer === true && styles.selectedOption]}
          onPress={() => onSelect(true)}
        >
          <Text style={styles.optionText}>Đúng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, selectedAnswer === false && styles.selectedOption]}
          onPress={() => onSelect(false)}
        >
          <Text style={styles.optionText}>Sai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#cce5ff',
    borderColor: '#3399ff',
  },
  optionText: {
    fontSize: 16,
  },
});

export default TrueFalseQuestion; 