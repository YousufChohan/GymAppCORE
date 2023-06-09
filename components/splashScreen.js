import React from 'react';
import Lottie from 'lottie-react-native';
import {Dimensions, Modal, Text, Image} from 'react-native';
const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');
const SplashScreenModal = props => {
  const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] =
    React.useState(false);

  // We only want to hide the Splash Screen after it has played at least once
  const handleAnimationFinish = () => {
    console.log('finished');
    setHasAnimationPlayedOnce(true);
  };

  const isModalVisible = !(props.isAppInitialized && hasAnimationPlayedOnce);

  return (
    <Modal
      visible={isModalVisible}
      animationType="fade"
      style={{
        width: 150,
        height: 150,
        backgroundColor: '#000',
      }}>
      <Lottie
        // resizeMode="cover"
        // style={{width: PAGE_WIDTH + 20, height: PAGE_HEIGHT, marginLeft: 1}}
        style={{
          // width: 250,
          // aspectRatio: 375 / 812,
          flexGrow: 1,
          // alignSelf: 'center',
        }}
        source={require('../images/SplashDumble.json')}
        loop={false}
        autoPlay
        onAnimationFinish={handleAnimationFinish}
      />
      <Image
        style={{
          alignSelf: 'center',
          marginTop: 140,
          width: 230,
          height: 160,
          resizeMode: 'contain',
        }}
        source={require('../images/CORE2.png')}
      />
    </Modal>
  );
};

export default SplashScreenModal;
