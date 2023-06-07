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
import {colorss} from '../components/colorss';
import logo from '../images/CORE2.png'

const WorkoutSection = () => {
  return (
    <View style={styles.container}>
       <ScrollView contentContainerStyle={{alignContent:'space-between'}} style={styles.scrollview}>
    
    <View style={styles.view}>
    <Image style={styles.logo} source={logo}/> 
     </View> 
     <View style={styles.tab1}>
      <Text style={styles.tab1Text}>Test Text</Text>
      <Text style={styles.tab1Text2}>This is a long paragraph test text</Text>
      <Text style={styles.tab1Text3}>Test Text</Text>
     </View>
     <View style={styles.tab2}>
      <ImageBackground imageStyle={{borderRadius:10}} style={styles.imgbg} source={require('../images/wk1.jpg')}>
     
      <Text style={styles.bt}>Button with veeeeery long text   </Text>
      </ImageBackground>
     </View>
     </ScrollView>
    </View>
  )
}

export default WorkoutSection

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'colorss.white',
    alignItems: 'center',
    width:'100%',
    height:'90%',
    
  },
  scrollview:{
    width:'95%',
    height:'100%',
    flex:1,
  
  },
  logo:{
    resizeMode:'contain',
    height:120
  },
  view:{
    display:'flex',
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'center',
  },
  tab1:{
    height:150,
    backgroundColor:colorss.purple,
    borderRadius:20, 
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'center',
  },
  tab1Text:{
    color:colorss.white,
    fontSize:20,
    
  },
  tab1Text2:{
    color:'grey',
    fontSize:20,
    marginTop:10
  },
  tab1Text3:{
    color:'red',
    fontSize:20,
    marginTop:10
  },
  tab2:{
    
    backgroundColor:colorss.purple,
    borderRadius:20, 
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:20
  },
  imgbg:{
   
    borderRadius:100,
    height:140,
    resizeMode:'contain',
    width:'100%',
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'center'
  },
  bt:{
    backgroundColor:'grey',
    color:colorss.white,
    textAlign:'center',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:10,
    fontSize:15,
    paddingVertical:5,
    borderRadius:5,
    height:30,
    fontWeight:'800'
    
  }
})