import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {colorss} from './colorss';

export default function InputField(props) {
  return (
    <TextInput
      theme={{roundness: 10}}
      mode="outlined"
      activeOutlineColor={colorss.orange}
      outlineColor={colorss.purple}
      style={styles.InputFieldStyle}
      ref={props.innerRef}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  InputFieldStyle: {
    backgroundColor: '#FFF',
  },
});
