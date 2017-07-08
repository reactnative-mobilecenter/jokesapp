import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app/index';
import CodePush from 'react-native-code-push';
const jokesapp = CodePush({
  installMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: true
})(App);

import Push from 'mobile-center-push';
import { Alert } from 'react-native';
Push.setEventListener({
  pushNotificationReceived: function ({ message = '', title = '<empty>', customProperties = {} }) {
    message += '\nCustom properties:\n' + JSON.stringify(customProperties);
    if (AppState.currentState === 'active') {
      Alert.alert(title, message);
    }
  }
});

AppRegistry.registerComponent('jokesapp', () => jokesapp);
