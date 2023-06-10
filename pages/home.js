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
import profile from '../images/pr.png';
import logo from '../images/CORE2.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import wk1 from '../images/wk1.jpg';
import PeopleImage from '../components/homePeople';
import CircularProgress from 'react-native-circular-progress-indicator';
export default function Home({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img: profile,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img: profile,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: profile,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: profile,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: profile,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.top}>
          <Icon name="bell" size={28} color={colorss.orange}></Icon>
          <Image style={styles.logo} source={logo} />
          <Text>hel</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text1}>Welcome Muhammad</Text>
          <Text style={styles.text2}>Reach Your Goals Today!</Text>
          <Image style={styles.image} source={profile}></Image>
        </View>

        <View style={styles.tab}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CircularProgress
              value={890}
              maxValue={2000}
              title="Calories"
              activeStrokeColor={colorss.purple}
              activeStrokeSecondaryColor={'#C25AFF'}
            />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CircularProgress
              value={6000}
              maxValue={10000}
              title="Steps"
              activeStrokeColor={colorss.orange}
              activeStrokeSecondaryColor={'#C25AFF'}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CircularProgress
              value={6}
              maxValue={12}
              title="Water "
              activeStrokeColor={'#2465FD'}
              activeStrokeSecondaryColor={'#C25AFF'}
            />
          </View>
        </View>

        <View>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            style={styles.imgbg}
            source={wk1}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Workout</Text>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate('WorkoutSection')}
                  style={styles.button}>
                  Routines
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            style={styles.imgbg}
            source={require('../images/wk2.jpg')}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Workout</Text>
              <TouchableOpacity>
                <Text style={styles.button2}>Routines</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            style={styles.imgbg}
            source={require('../images/wk3.jpg')}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Meal Plans</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MealPlans')}>
                <Text style={styles.button2}>Meal Plans</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View>
          <View style={styles.peopleHeading}>
            <Text style={styles.ph1}>People</Text>
            <Text style={styles.ph2}>Friends</Text>
          </View>
          <View style={styles.people}>
            <ScrollView style={styles.peopleScroll}>
              <FlatList
                horizontal={true}
                data={DATA}
                renderItem={({item}) => (
                  <PeopleImage image={item.img} text={item.title} />
                )}></FlatList>
            </ScrollView>
          </View>
        </View>

        <View>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            style={styles.imgbg}
            source={require('../images/wk3.jpg')}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Meal Plans</Text>
              <TouchableOpacity>
                <Text style={styles.button}>Meal Plans</Text>
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
    height: '90%',
    paddingBottom: 100,
  },
  scrollview: {
    width: '95%',
    height: '100%',
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    resizeMode: 'contain',
    height: 80,
    width: 160,
  },
  view: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text1: {
    color: colorss.purple,
    fontSize: 30,
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
    borderRadius: 100,
    height: 140,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
  },
  cardText: {
    fontFamily: 'segou',
    color: colorss.white,
    fontSize: 20,
  },
  button: {
    backgroundColor: colorss.white,
    color: colorss.orange,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    height: 25,
    paddingTop: 2,
    paddingHorizontal: 5,
    // width: 70,
  },
  button2: {
    backgroundColor: 'grey',
    color: colorss.white,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    height: 25,
    paddingTop: 2,
    paddingHorizontal: 5,
    // width: 70,
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
});
