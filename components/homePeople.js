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
  import { useNavigation } from '@react-navigation/native';
const HomePeople = (props) => {
  const navigation = useNavigation();
  return (
    
    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
    <Image style={styles.image2} source={props.image}></Image>
    <Text>{props.text}</Text>
    </TouchableOpacity>
    
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