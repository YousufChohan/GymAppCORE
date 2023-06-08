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
import React from 'react';
import {colorss} from './colorss';
import Dot from 'react-native-vector-icons/Octicons';

const MealCard = props => {
  return (
    <View>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={styles.imgbg}
        source={require('../images/whitegradient.png')}>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.cardImage}
              source={require('../images/mealexample.jpg')}
            />
          </View>
          <View
            style={{
              marginLeft: 10,
              height: 150,
              width: '65%',
              //   backgroundColor: colorss.white,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.mealName}>Bhindi</Text>
              <Text style={styles.button}>Sabzi Bhaaji</Text>
            </View>
            <View style={styles.row}>
              <Image
                style={styles.icon}
                source={require('../images/fire.png')}
              />
              <Text style={styles.cardText2}>200</Text>

              <Image
                style={[styles.icon, {marginLeft: 20}]}
                source={require('../images/weight-scale.png')}
              />
              <Text style={styles.cardText2}>200</Text>
            </View>

            <View style={styles.row}>
              <Dot
                style={{marginRight: 5}}
                name="dot-fill"
                size={24}
                color={colorss.green}
              />
              <Text style={styles.cardText3}>30g Protein</Text>
              <Dot
                style={{marginHorizontal: 5}}
                name="dot-fill"
                size={24}
                color={colorss.yellow}
              />
              <Text style={styles.cardText3}>30g Fat</Text>
            </View>
            <View style={styles.row}>
              <Dot
                style={{marginRight: 5}}
                name="dot-fill"
                size={24}
                color={colorss.red}
              />
              <Text style={styles.cardText3}>16g Carbohydrates</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

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
  mealName: {
    color: colorss.black,
    fontSize: 22,
    fontFamily: 'Nunito Sans Normal',
  },
  cardText2: {
    color: colorss.black,
    fontSize: 18,
    marginLeft: 4,
  },
  cardText3: {
    color: colorss.black,
    fontSize: 16,
    // marginLeft: 4,
  },
  cardImage: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: 'cover',
    width: 100,
    height: 140,
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: colorss.orange,
    color: colorss.white,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 5,
    height: 25,
    fontSize: 18,
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
    flexDirection: 'row',
  },
});
export default MealCard;
