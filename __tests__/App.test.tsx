/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import { it, expect } from '@jest/globals';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const app = renderer.create(<App />);

  expect(app).toMatchSnapshot();
});
