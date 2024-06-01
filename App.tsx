import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getRemainingTime } from './src/utils';

const screen = Dimensions.get('window');

function App(): React.JSX.Element {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { minutes, seconds } = getRemainingTime(remainingTime);

  const handleToggle = () => setIsActive(!isActive);
  const handleReset = () => {
    setRemainingTime(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setRemainingTime(currentValue => currentValue + 1);
      }, 1000);
    } else if (!isActive && remainingTime !== 0 && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, remainingTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
      <TouchableOpacity onPress={handleToggle} style={styles.controlButton}>
        <Text style={styles.controlButtonText}>
          {isActive ? 'Pause' : 'Start'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleReset}
        style={[styles.controlButton, styles.resetButton]}>
        <Text style={[styles.controlButtonText, styles.resetButtonText]}>
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButton: {
    borderWidth: 8,
    borderColor: '#F09A36',
    width: screen.width / 2.5,
    height: screen.width / 2.5,
    borderRadius: screen.width / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButtonText: {
    fontSize: 45,
    color: '#F09A36',
  },
  timerText: {
    color: '#56526A',
    fontSize: 90,
    marginBottom: 20,
  },
  resetButton: {
    marginTop: 20,
    borderColor: '#56526A',
    width: screen.width / 3.5,
    height: screen.width / 3.5,
  },
  resetButtonText: {
    color: '#56526A',
    fontSize: 30,
  },
});

export default App;
