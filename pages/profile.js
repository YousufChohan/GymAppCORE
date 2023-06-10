import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
import React from 'react'
import {colorss} from '../components/colorss';
import profile from '../images/pr.png';
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{justifyContent:'center'}} style={styles.scrollview}>
      <View style={styles.view}>
          <Image style={styles.image} source={profile}></Image>
        </View>
        <View style={styles.view2}>
          
            <Text style={styles.name}>Muhammad Ali </Text>
          
        </View>
        <Text style={styles.text}>Dammam | Saudi Arabia</Text>
        <View style={styles.view3}>
            <Text style={styles.view3text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</Text>
        </View>
        <View style={styles.view4}>
          <TouchableOpacity>
            <Text style={styles.view4text}>Lorem ipsum dolor sit amet {'>'} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view5}>
            <Text style={styles.view5Heading}>Videos</Text>
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorss.white,
        alignItems: 'center',
        width: '100%',
        height: '90%',
        padding:5,
        paddingBottom: 100,
        justifyContent:'center'
      },
      scrollview: {
        width: '95%',
        height: '100%',
        flex: 1,
      
      },  
      view: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
      },
      image: {
        height: 175,
        resizeMode: 'contain',
      },
      view2:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center', 
        flexDirection:'row'
      },
      name:{
        fontSize:25,
        color:colorss.purple,
      },
      text:{
        marginTop:5,
       fontSize:17,
       fontWeight:'600',
       color:'grey',
       textAlign:'center'
       
      },
      view3:{
        marginTop:30,
        borderTopColor:'grey',
        borderTopWidth:0.5,
        justifyContent:'center',
        alignItems:'center'
      },
      view3text:{
        marginTop:10,
        fontSize:18,
        color:'grey',
        fontWeight:'600'
      },
      view4:{
        marginTop:20,
        borderTopColor:'grey',
        borderTopWidth:0.5,
        justifyContent:'center',
        alignItems:'center'
      },
      view4text:{
        marginTop:10,
        fontSize:18,
        color:'red',
        fontWeight:'500'
      },
      view5:{
        marginTop:20,
        borderTopColor:'grey',
        borderTopWidth:0.5,
        justifyContent:'flex-start',
        alignItems:'center',
      },
      view5Heading:{
        marginTop:10,
        alignSelf:'flex-start',
        fontSize:20,
        color:'#063B5C',
        fontWeight:'500'
      },
      
})