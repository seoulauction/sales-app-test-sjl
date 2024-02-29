import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const MyComponent = () => {
  return (
    <Appbar.Header elevated statusBarHeight={0} mode={'center-aligned'} style={styles.header}>
      <Appbar.Content title="TrekTrack" color="#fff" />
      <Appbar.Action icon="account-alert" color="#fff" onPress={() => {}} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    minHeight: 60,
    maxHeight: 50,
    backgroundColor: '#fc6d00',
  },
  font: {
    color: '#fff',
  },
  
});

export default MyComponent;
