/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppNavigator from './App';
import { name as appName } from './app.json';
import './global.css';

AppRegistry.registerComponent(appName, () => AppNavigator);
