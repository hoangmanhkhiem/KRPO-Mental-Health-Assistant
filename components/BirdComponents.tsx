import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';

export default function BirbComponent({ showQuestion = false, sleeping = false }) {
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const wingAnim = useRef(new Animated.Value(0)).current;
  const legAnim = useRef(new Animated.Value(0)).current;
  const zzzAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (sleeping) return;
    // Nhảy lên xuống
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(bounceAnim, { toValue: -15, duration: 500, useNativeDriver: true }),
          Animated.timing(wingAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
          Animated.timing(legAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(bounceAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
          Animated.timing(wingAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
          Animated.timing(legAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
        ]),
      ])
    ).start();
  }, [sleeping]);

  // Cánh giang ra
  const leftWingRotate = wingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-40deg'],
  });
  const rightWingRotate = wingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '40deg'],
  });
  // Chân nhấc lên
  const legTranslateY = legAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: bounceAnim }] }]}> 
      {showQuestion && (
        <View style={styles.questionMark}>
          <Text style={styles.questionMarkText}>?</Text>
        </View>
      )}
      <Svg width="150" height="150" viewBox="0 0 150 150">
        {/* Shadow */}
        <Ellipse cx="75" cy="140" rx="32" ry="8" fill="#e0e0e0" />
        {/* Body nhỏ, tròn */}
        <Ellipse cx="75" cy="105" rx="28" ry="30" fill="#ffe066" />
        {/* Head to, tròn */}
        <Circle cx="75" cy="65" r="38" fill="#ffe066" />
        {/* Tai tròn hơn, plushie */}
        {/* Left ear */}
        <Ellipse cx="50" cy="25" rx="10" ry="20" fill="#222" />
        <Ellipse cx="52" cy="32" rx="8" ry="15" fill="#ffe066" />
        {/* Right ear */}
        <Ellipse cx="100" cy="25" rx="10" ry="20" fill="#222" />
        <Ellipse cx="98" cy="32" rx="8" ry="15" fill="#ffe066" />
        {/* Arms nhỏ - Animated */}
        <Animated.View style={{
          position: 'absolute',
          left: 48 - 8,
          top: 110 - 14,
          width: 16,
          height: 28,
          transform: [{ rotate: leftWingRotate }],
          zIndex: 2,
        }}>
          <Svg width="16" height="28">
            <Ellipse cx={8} cy={14} rx={8} ry={14} fill="#ffe066" />
          </Svg>
        </Animated.View>
        <Animated.View style={{
          position: 'absolute',
          left: 102 - 8,
          top: 110 - 14,
          width: 16,
          height: 28,
          transform: [{ rotate: rightWingRotate }],
          zIndex: 2,
        }}>
          <Svg width="16" height="28">
            <Ellipse cx={8} cy={14} rx={8} ry={14} fill="#ffe066" />
          </Svg>
        </Animated.View>
        {!sleeping ? (
          <>
            {/* Eyes to, plushie */}
            <Circle cx="63" cy="68" r="9" fill="#222" />
            <Circle cx="87" cy="68" r="9" fill="#222" />
            {/* Eye highlights */}
            <Circle cx="66" cy="66" r="2" fill="#fff" />
            <Circle cx="90" cy="66" r="2" fill="#fff" />
          </>
        ) : (
          <>
            {/* Eyes closed (sleep) */}
            <Ellipse cx="63" cy="68" rx="9" ry="3" fill="#222" />
            <Ellipse cx="87" cy="68" rx="9" ry="3" fill="#222" />
          </>
        )}
        {/* Cheeks Pikachu */}
        <Circle cx="55" cy="85" r="7" fill="#ff4d4d" />
        <Circle cx="95" cy="85" r="7" fill="#ff4d4d" />
        {/* Miệng cười */}
        <Path d="M70 90 Q75 97 80 90" stroke="#e67e22" strokeWidth="2.5" fill="none" />
        {/* Feet nhỏ, ngắn - Animated */}
        <Animated.View style={{
          position: 'absolute',
          left: 65 - 4,
          top: 135 - 2,
          width: 8,
          height: 4,
          transform: [{ translateY: legTranslateY }],
          zIndex: 2,
        }}>
          <Svg width="8" height="4">
            <Ellipse cx={4} cy={2} rx={4} ry={2} fill="#e67e22" />
          </Svg>
        </Animated.View>
        <Animated.View style={{
          position: 'absolute',
          left: 85 - 4,
          top: 135 - 2,
          width: 8,
          height: 4,
          transform: [{ translateY: legTranslateY }],
          zIndex: 2,
        }}>
          <Svg width="8" height="4">
            <Ellipse cx={4} cy={2} rx={4} ry={2} fill="#e67e22" />
          </Svg>
        </Animated.View>
      </Svg>
      {sleeping && (
        <Animated.View style={{
          position: 'absolute',
          left: 110,
          top: 20,
          opacity: 0.7,
          transform: [{ translateY: zzzAnim }]
        }}>
          <Text style={{ fontSize: 22, color: '#333', fontWeight: 'bold' }}>Z</Text>
          <Text style={{ fontSize: 18, color: '#333', fontWeight: 'bold' }}>z</Text>
          <Text style={{ fontSize: 14, color: '#333', fontWeight: 'bold' }}>z</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  questionMark: {
    position: 'absolute',
    top: 0,
    right: 10,
    zIndex: 1,
  },
  questionMarkText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
});