import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class jokesapp extends Component {
  state = { joke: 'Tap here for joke' }
  fetchJoke() {
    fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'text/plain ' } })
      .then(r => r.text())
      .then(joke => this.setState({ joke }));
    this.setState({ joke: '...' });
    this.track();
  }

  track() {
    Analytics.trackEvent('New Joke', { time: new Date().getTime() })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.fetchJoke()}>
          <Text style={styles.welcome}>
            {this.state.joke}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
