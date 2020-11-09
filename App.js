import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { generate } from 'shortid';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';

const useColors = () => {
  const [colors, setColors] = useState([]);
  const addColor = color => {
    const newColor = {id: generate(), color}
    setColors([newColor, ...colors ])
  };

  return {colors, addColor};
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const {colors, addColor} = useColors();
  
  return (
    <>
      <ColorForm onNewColor={addColor} />
      <FlatList 
      style={[styles.container, {backgroundColor}]} 
      data={colors}
      renderItem={({item}) => {
        return(
          <ColorButton key={item.id} onPress={setBackgroundColor} backgroundColor={item.color} />
        );
      }}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  },
});
