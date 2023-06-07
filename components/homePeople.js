import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    Linking,
    SafeAreaView,
    Pressable,
    Modal,
  } from 'react-native';
  import React from 'react'
const HomePeople = (props) => {
  return (
    
    <View >
    <Image style={styles.image2} source={props.image}></Image>
    <Text>{props.text}</Text>
    </View>
    
  )
}


const styles = StyleSheet.create({
    image2:{
        marginTop:10,
        height:125,
        width:100,
        resizeMode:'contain'
      },
      people:{
        display:'flex',
       flexWrap:'wrap'
       
      },
})
export default HomePeople