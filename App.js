import React, { useState } from 'react';
import { 
          StyleSheet, 
          View
        } from 'react-native';
import ColorButton from './components/ColorButton'

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <ColorButton onPress={setBackgroundColor} backgroundColor="red" />
      <ColorButton onPress={setBackgroundColor} backgroundColor="green" />
      <ColorButton onPress={setBackgroundColor} backgroundColor="blue" />
      <ColorButton onPress={setBackgroundColor} backgroundColor="yellow" />
      <ColorButton onPress={setBackgroundColor} backgroundColor="purple" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
