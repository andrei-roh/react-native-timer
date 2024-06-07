import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from './constants';

const screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 36,
    gap: 16,
  },
  modeTitle: {
    fontSize: 30,
    color: COLORS.ORANGE,
  },
  switch: {
    margin: 15,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  timerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    color: COLORS.ORANGE,
    fontSize: 90,
    marginBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    borderWidth: 8,
    width: screen.width / 3.5,
    height: screen.width / 3.5,
    borderRadius: screen.width / 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
  },
  startButton: {
    borderColor: COLORS.PURPLE,
  },
  startButtonText: {
    color: COLORS.PURPLE,
  },
  resetButton: {
    borderColor: COLORS.ORANGE,
  },
  resetButtonText: {
    color: COLORS.ORANGE,
  },
});
