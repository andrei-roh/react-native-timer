import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Switch, TextInput } from 'react-native';
import {
  changeRemainingTime,
  getFormatNumber,
  setRemainingTime,
} from './src/utils';
import { ITime, Time } from './src/types';
import { styles } from './src/style';
import { COLORS, INITIAL_TIME } from './src/constants';

function App(): React.JSX.Element {
  const [time, setTime] = useState<ITime>(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);

  const handleToggle = () => setIsActive(!isActive);
  const handleReset = () => {
    setTime(currentValue => ({
      ...currentValue,
      ...INITIAL_TIME,
    }));
    setIsActive(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(currentTime =>
          changeRemainingTime(currentTime, isCountdown, handleReset),
        );
      }, 1000);
    } else if (
      !isActive &&
      interval &&
      (time[Time.Hours] !== 0 ||
        time[Time.Minutes] !== 0 ||
        time[Time.Seconds] !== 0)
    ) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, isCountdown, time]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.modeContainer}>
        <Text style={styles.modeTitle}>
          Mode: {!isCountdown ? 'Direct Counting' : 'Countdown'}
        </Text>
        <Switch
          value={isCountdown}
          onChange={() => setIsCountdown(!isCountdown)}
          trackColor={{ false: '#767577', true: COLORS.ORANGE }}
          thumbColor={isCountdown ? COLORS.PURPLE : '#F4F3F4'}
          ios_backgroundColor="#3E3E3E"
          style={styles.switch}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.timerContainer}>
        <TextInput
          style={styles.timerText}
          value={getFormatNumber(time.hours)}
          onChangeText={currentValue =>
            setRemainingTime(currentValue, Time.Hours, setTime)
          }
          keyboardType="numeric"
          readOnly={!isCountdown || isActive}
        />
        <Text style={styles.timerText}>:</Text>
        <TextInput
          style={styles.timerText}
          value={getFormatNumber(time.minutes)}
          onChangeText={currentValue =>
            setRemainingTime(currentValue, Time.Minutes, setTime)
          }
          keyboardType="numeric"
          readOnly={!isCountdown || isActive}
        />
        <Text style={styles.timerText}>:</Text>
        <TextInput
          style={styles.timerText}
          value={getFormatNumber(time.seconds)}
          onChangeText={currentValue =>
            setRemainingTime(currentValue, Time.Seconds, setTime)
          }
          keyboardType="numeric"
          readOnly={!isCountdown || isActive}
        />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleToggle}
          style={[styles.button, styles.startButton]}>
          <Text style={[styles.buttonText, styles.startButtonText]}>
            {isActive ? 'Pause' : 'Start'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleReset}
          style={[styles.button, styles.resetButton]}>
          <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
