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
import React, { useEffect, useState, useRef } from 'react';

import Animated, {
  Extrapolate,
  color,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { colorss } from '../components/colorss';
import {
  Gesture,
  GestureDetector,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import profile from '../images/pr.png'
import logo from '../images/CORE2.png'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import wk1 from '../images/wk1.jpg'
import { ExclusiveGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gestureComposition';
import ExerciseLibrary from './exerciseLibrary';

export default function Home({ navigation }) {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>

        <View style={styles.view}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.text1}>Welcome Muhammad</Text>
          <Text style={styles.text2}>Reach Your Goals Today!</Text>
          <Image style={styles.image} source={profile}></Image>
        </View>

        <View style={styles.tab}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon style={{ marginRight: 5 }} name="fire" size={28} color={colorss.orange} />
            <Text style={styles.tabText}>Calories: <Text style={{ color: colorss.purple }}>871 </Text></Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon2 style={{ marginRight: 5 }} name="cup-water" size={28} color="#19D2F8" />
            <Text style={styles.tabText}>Water: <Text style={{ color: colorss.purple }}>10 glasses </Text></Text>
          </View>

        </View>
        <View style={styles.tab}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon style={{ marginRight: 7 }} name="walking" size={28} color="#FFE000" />
            <Text style={styles.tabText}>Steps: <Text style={{ color: colorss.purple }}>12000 </Text></Text>
          </View>
        </View>
        <View>
          <ImageBackground imageStyle={{ borderRadius: 20 }} style={styles.imgbg} source={wk1}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Workout</Text>
              <TouchableOpacity onPress={() => { navigation.navigate(ExerciseLibrary) }}>
                <Text style={styles.button}>Routines</Text>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorss.white,
    alignItems: 'center',

    width: '100%',
    height: '90%'

  },
  scrollview: {
    width: '95%',
    height: '100%',
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    height: 120
  },
  view: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: colorss.purple,
    fontSize: 30,
    marginTop: '1%',
  },
  text2: {
    marginTop: '7%',
    fontSize: 20,
    color: colorss.orange
  },
  image: {
    marginTop: '5%',
    height: 175,
    resizeMode: 'contain'
  },
  tab: {
    marginTop: '10%',

    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tabText: {
    color: colorss.orange,
    fontSize: 18,
    fontWeight: '600'
  },
  imgbg: {
    marginTop: 15,
    borderRadius: 100,
    height: 140,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200
  },
  cardText: {
    color: colorss.white,
    fontSize: 20
  },
  button: {
    backgroundColor: colorss.orange,
    color: colorss.white,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    height: 25,
    width: 70
  }
});
