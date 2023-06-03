import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Dimensions,
  Pressable,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {RadioButton, TextInput} from 'react-native-paper';
import TextField from '../components/inputField';
import React, {useState, useRef} from 'react';
import IntlPhoneInput from 'react-native-international-telephone-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Lottie from 'lottie-react-native';
import {REACT_APP_BASE_URL} from '@env';
import {colorss} from '../components/colorss';
import {ToggleButton} from 'react-native-paper';
import {source} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

export default function Register({navigation}) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dialCode, setDialCode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [companyName, setCompanyName] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState('Gender');

  function sendData() {
    console.log({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      mobile: phoneNumber,
      dialCode: dialCode,
      isVerified: false,
      role: 'client',
    });
    axios({
      method: 'POST',
      url: `${REACT_APP_BASE_URL}/signup`,
      data: {
        name: firstName + lastName,
        email: email,
        mobile: phoneNumber,
        dialCode: dialCode,
        isVerified: false,
        role: 'client',
        companyName: companyName,
      },
    })
      .then(res => {
        console.log(res.message);
        const _storeData = async () => {
          try {
            setModalVisible(true);
          } catch (error) {
            console.log(error);
          }
        };
        _storeData();
        setModalVisible(true);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('', 'Email already registered', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      });
    //     if (firstName &&
    // lastName &&
    // email &&
    // phoneNumber

    // ){
    //     setModalVisible(true)}
    //     else{
    //       Alert.alert('', 'Please fill in All the required details.', [
    //               {text: 'OK', onPress: () => console.log('OK Pressed')},
    //              ]);
    //     }
  }

  return (
    <View style={{height: '100%'}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={[
            styles.centeredView,
            modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '',
          ]}>
          <View style={styles.modalView}>
            {/* <Image
              style={{width: 150, height: 150}}
              resizeMode="contain"
              source={require('../images/Icon.png')}
            /> */}

            <Lottie
              resizeMode="cover"
              style={{
                width: 150,
                // height: '100%',
              }}
              source={require('../images/success_lottie.json')}
              loop={false}
              autoPlay
            />

            <Text
              style={{
                paddingTop: 31,
                fontSize: 24,
                fontWeight: '500',
                color: '#1A8E2D',
                textAlign: 'center',
              }}>
              Successful
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 15,
                fontWeight: '500',
                color: '#000',
                textAlign: 'center',
              }}>
              Your account has been successfully registered{' '}
            </Text>
            <Pressable
              style={[styles.doneButton]}
              onPress={() => navigation.goBack()}>
              <Text style={{color: '#FFF', fontSize: 17, fontWeight: '700'}}>
                Done
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ImageBackground
        source={require('../images/Signup.png')}
        style={{width: '100%', height: 250}}>
        <View style={styles.topheader}>
          <View style={styles.textView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{alignItems: 'flex-start', padding: 0}}>
              <Image
                style={{padding: 0, alignSelf: 'flex-start'}}
                source={require('../images/Back.png')}
              />
            </TouchableOpacity>
            <Text style={[styles.textStyle, {paddingTop: 25}]}>
              Register for
            </Text>
            <Text style={[styles.textStyle]}>New Account</Text>
            {/* <Text style={styles.textStyle2}>
              Fill out the details below to signup for a Virtuzone official
              account.
            </Text> */}
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={styles.bottomSection}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={{height: '100%', padding: 24}}>
            <SafeAreaView style={{marginBottom: 20}}>
              <TextField
                label="First Name"
                onChangeText={text => setFirstName(text)}
                left={
                  <TextInput.Icon
                    resizeMode="contain"
                    style={{width: 25}}
                    name={() => (
                      <Image
                        resizeMode="contain"
                        style={{width: 25}}
                        source={require('../images/User1.png')}
                      />
                    )}
                  />
                }
              />
            </SafeAreaView>
            <SafeAreaView style={{marginBottom: 20}}>
              <TextField
                label="Last Name"
                onChangeText={text => setLastName(text)}
                left={
                  <TextInput.Icon
                    name={() => (
                      <Image
                        resizeMode="contain"
                        style={{width: 25}}
                        source={require('../images/User1.png')}
                      />
                    )}
                  />
                }
              />
            </SafeAreaView>

            <SafeAreaView
              style={{
                backgroundColor: colorss.white,
                marginBottom: 20,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: colorss.purple,
              }}>
              <View
                style={{marginTop: 5, display: 'flex', flexDirection: 'row'}}>
                <Image
                  resizeMode="contain"
                  style={{marginTop: 20, marginLeft: 9, width: 25, height: 25}}
                  source={require('../images/gender.png')}
                />
                <Text style={{marginTop: 20, marginLeft: 5, fontSize: 16}}>
                  Gender
                </Text>
                <ToggleButton.Row
                  style={{marginLeft: 150, marginTop: 0, marginBottom: 5}}
                  onValueChange={gender => setGender(gender)}
                  gender={gender}>
                  <View>
                    <ToggleButton
                      gender="Male"
                      icon={require('../images/male.png')}></ToggleButton>
                    <Text style={{marginLeft: 3}}>Male</Text>
                  </View>
                  <View>
                    <ToggleButton
                      style={{marginLeft: 10}}
                      gender="Female"
                      icon={require('../images/femenine.png')}></ToggleButton>
                    <Text style={{marginLeft: 6}}>Female</Text>
                  </View>
                </ToggleButton.Row>
              </View>
            </SafeAreaView>
            <SafeAreaView style={{marginBottom: 20}}>
              <TextField
                label="Email Address"
                onChangeText={text => setEmail(text)}
                left={
                  <TextInput.Icon
                    name={() => (
                      <Image
                        resizeMode="contain"
                        style={{width: 25}}
                        source={require('../images/EnvelopeClosed.png')}
                      />
                    )}
                  />
                }
              />
            </SafeAreaView>
            <SafeAreaView style={{marginBottom: 20}}>
              <IntlPhoneInput
                // flagStyle={{display: 'none'}}
                defaultCountry="AE"
                renderAction={() => <Text>XX</Text>}
                containerStyle={styles.phoneInput}
                onChangeText={data => {
                  if (data.phoneNumber[0] === '0') {
                    setPhoneNumber(
                      `${data.phoneNumber.substring(1)}`.replace(' ', ''),
                    );
                    setDialCode(data.dialCode);
                  } else {
                    setPhoneNumber(`${data.phoneNumber}`.replace(' ', ''));
                    setDialCode(`${data.dialCode}`);
                  }
                }}
                lang="EN"
              />
            </SafeAreaView>

            {/* <View style={{marginBottom: 20}}>
            <TextField
              label="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              left={
                <TextInput.Icon
                  name={() => (
                    <Image
                      resizeMode="contain"
                      style={{width: 25}}
                      source={require('../images/password_icon.png')}
                    />
                  )}
                />
              }
              right={
                <TextInput.Icon
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                  name={() =>
                    showPassword ? (
                      <Image
                        resizeMode="contain"
                        style={{width: 25}}
                        source={require('../images/eyeOpen.png')}
                      />
                    ) : (
                      <Image
                        resizeMode="contain"
                        style={{width: 25}}
                        source={require('../images/Hide.png')}
                      />
                    )
                  }
                />
              }
            />
          </View>

          <View style={{marginBottom: 20}}>
            <TextField
              label="Confirm Password"
              secureTextEntry
              onChangeText={text => setConfirmPassword(text)}
              left={
                <TextInput.Icon
                  name={() => (
                    <Image
                      resizeMode="contain"
                      style={{width: 25}}
                      source={require('../images/password_icon.png')}
                    />
                  )}
                />
              }
              right={
                <TextInput.Icon
                  onPress={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  name={() =>
                    showConfirmPassword ? (
                      <Image
                        resizeMode="contain"
                        style={{width: 25}}
                        source={require('../images/eyeOpen.png')}
                      />
                    ) : (
                      <Image
                        resizeMode="contain"
                        style={{width: 25}}
                        source={require('../images/Hide.png')}
                      />
                    )
                  }
                />
              }
            />
          </View> */}

            <TouchableOpacity
              style={styles.signInButton}
              onPress={async () => {
                const _storeData = async () => {
                  try {
                    await AsyncStorage.setItem('@email', email);
                  } catch (error) {
                    console.log(error);
                  }
                };
                _storeData();
                sendData();
              }}>
              <Text style={{textAlign: 'center', fontSize: 20, color: '#FFF'}}>
                Register Now
              </Text>
            </TouchableOpacity>

            {/* <View
              style={{
                marginBottom: 24,
                alignSelf: 'center',
                justifyContent: 'flex-start',
              }}>
              <Image
                resizeMode="contain"
                style={{width: PAGE_WIDTH - 186}}
                source={require('../images/Tagline.png')}
              />
            </View> */}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topheader: {
    height: 250,
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  textStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colorss.white,
  },
  textStyle2: {fontSize: 16, fontWeight: '400', color: '#FFF'},

  bottomSection: {
    backgroundColor: '#f1f1f1',
    height: '100%',
    width: '100%',
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.20)',
    roundness: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#ffffff',
  },

  signInButton: {
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: colorss.purple,
    marginBottom: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  doneButton: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: '#000',
    marginTop: 40,
    marginBottom: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
