import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Routes from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(7, 26,93, 255)',
    flex: 1,
  },
});

export default App;
