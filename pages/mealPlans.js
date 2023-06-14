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
import TextField from '../components/inputField';

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
import meal from '../images/oranges.jpg';
import logo from '../images/CORE2.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import wk1 from '../images/wk1.jpg';
import MealCard from '../components/mealCard';
import {Button, RadioButton, TextInput} from 'react-native-paper';

export default function MealPlans({navigation}) {
  const [findMeal, setFindMeal] = useState('');
  const DATA = [
    {
      id: '1',
      img: require('../images/mango.jpg'),
      mealName: 'Keenu',
      mealType: 'Phal Fruit',
      aag_temp: 200,
      weight_temp: 167,
      protein: 420,
      fat: 69,
      carbs: 975,
    },
    {
      id: '2',
      img: require('../images/apple.jpg'),
      mealName: 'core',
      mealType: 'gym ka Fruit',
      aag_temp: 150,
      weight_temp: 123,
      protein: 345,
      fat: 654,
      carbs: 2234,
    },
    {
      id: '3',
      img: meal,
      mealName: 'bhindi',
      mealType: 'sabzi',
      aag_temp: 534,
      weight_temp: 4564,
      protein: 154,
      fat: 124,
      carbs: 4362,
    },
    {
      id: '4',
      img: require('../images/mealexample.jpg'),
      mealName: 'zabby',
      mealType: 'gym ka landu',
      aag_temp: 150,
      weight_temp: 123,
      protein: 345,
      fat: 654,
      carbs: 2234,
    },
    {
      id: '5',
      img: require('../images/TouristVisaimage.png'),
      mealName: 'umer',
      mealType: 'gym ka phushtu',
      aag_temp: 150,
      weight_temp: 123,
      protein: 345,
      fat: 654,
      carbs: 2234,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <SafeAreaView>
          <View style={[styles.top]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../images/back_icon.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <Text style={styles.cardText}>Nutrition Library</Text>
            <Image
              source={require('../images/health-and-care.png')}
              style={{width: 30, height: 30}}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView>
          <View>
            <ScrollView horizontal={true} style={styles.filters}>
              <TouchableOpacity>
                <Text style={styles.filterButton}>Grains and Seeds</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterButton}>Fats</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterButton}>Milk</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterButton}>Fruits</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterButton}>Vegetables</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </SafeAreaView>
        <SafeAreaView style={{marginBottom: 2}}>
          <TextField
            label="Find more.."
            onChangeText={text => setFindMeal(text)}
            outlineColor={colorss.orange}
            left={
              <TextInput.Icon
                name={() => (
                  <Image
                    resizeMode="contain"
                    style={{width: 30}}
                    source={require('../images/search.png')}
                  />
                )}
              />
            }
          />
        </SafeAreaView>
        <FlatList
          horizontal={false}
          data={DATA}
          renderItem={({item}) => (
            <MealCard
              image={item.img}
              mealName={item.mealName}
              mealType={item.mealType}
              aag_temp={item.aag_temp}
              weight_temp={item.weight_temp}
              protein={item.protein}
              fat={item.fat}
              carbs={item.carbs}
            />
          )}></FlatList>
        {/* <MealCard /> */}
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
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 20,
    borderColor: colorss.grey,
    borderBottomWidth: 0.5,
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginVertical: 10,
    // paddingTop: 10,
    paddingBottom: 10,
    borderColor: colorss.grey,
    borderBottomWidth: 0.5,
  },
  filterButton: {
    backgroundColor: colorss.orange,
    color: colorss.white,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    fontSize: 20,
    paddingTop: 5,
    paddingHorizontal: 15,
    //  width:70
  },
});
