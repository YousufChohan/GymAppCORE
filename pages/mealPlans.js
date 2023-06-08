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
import React, {useEffect, useState, useRef} from 'react';

import Animated, {
  Extrapolate,
  color,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {colorss} from '../components/colorss';
import {
  FlatList,
  Gesture,
  GestureDetector,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import meal from '../images/mealexample.jpg';
import logo from '../images/CORE2.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import wk1 from '../images/wk1.jpg';
import MealCard from '../components/mealCard';
export default function MealPlans({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
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
    height: '90%',
  },
  scrollview: {
    width: '95%',
    height: '100%',
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    height: 120,
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
    color: colorss.orange,
  },
  image: {
    marginTop: '5%',
    height: 175,
    resizeMode: 'contain',
  },
  meatype: {},
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
    fontWeight: '600',
  },
  imgbg: {
    marginTop: 15,
    borderRadius: 10,
    height: 140,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    // justifyContent: 'space-between',
    borderRadius: 20,
  },
  cardText: {
    color: colorss.black,
    fontSize: 20,
  },
  cardImage: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: 'cover',
    width: 100,
    height: 140,
  },
  icon: {
    width: 100,
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
    fontSize: 16,
    paddingHorizontal: 5,
    //  width:70
  },
  peopleHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  ph1: {
    color: colorss.orange,
    fontSize: 20,
  },
  ph2: {
    fontSize: 20,
    color: colorss.purple,
  },
  people: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  peopleScroll: {},
  image2: {
    marginTop: '5%',
    height: 125,
    resizeMode: 'contain',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
  },
});
