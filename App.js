import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
          StyleSheet, 
          View, 
          Text,
          TouchableHighlight,
          Button
        } from 'react-native';

function ColorButton({backgroundColor, onPress=f=>f}) {
  return (
    <TouchableHighlight style={styles.button}
      onPress={() => onPress(backgroundColor)}
      underlayColor="orange">
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor}]} />
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
    </TouchableHighlight>
  );
}

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
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255, .8)"
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "white"
  }
});
