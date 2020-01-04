import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Signup(props) {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Button
        title="Go to Login"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
