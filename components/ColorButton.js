import React from 'react';
import { 
          StyleSheet, 
          View, 
          Text,
          TouchableHighlight,
          Button
        } from 'react-native';

export default function ColorButton({backgroundColor, onPress=f=>f}) {
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

const styles = StyleSheet.create({
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