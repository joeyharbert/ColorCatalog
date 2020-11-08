import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ColorButton from './components/ColorButton'
import defaultColors from './data/defaultColors.json'

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <FlatList 
    style={[styles.container, {backgroundColor}]} 
    data={defaultColors}
    renderItem={({item}) => {
      return(
        <ColorButton key={item.id} onPress={setBackgroundColor} backgroundColor={item.color} />
      );
    }}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  },
});
