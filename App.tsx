/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text,View, StyleSheet} from 'react-native';

// Note: test renderer must be required after react-native.

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
export default function App(){
  return(
    <>
      <View style={styles.box1} />
      <View style={styles.box2} />
    </>
  );
}