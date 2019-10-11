/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Linking,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {LogoContainer, WelcomeScreenStyles} from './styling/styling';
import Logo from '../../common/assets/svgs/logo.svg';
import Spotify from '../../common/assets/svgs/Spotify.svg';
import {parseURL} from '../../utility/urlParser';
const openLink = () => {
  Linking.openURL('http://agecold.ru:8888/login').catch(err =>
    console.error('An error occurred', err),
  );
};

// 3e358872589c00c3a753df
const WelcomeScreen = ({navigation}) => {
  const navigateToScreen = url => {
    console.log('navigate url -> ', url);
    if (!url) return null;

    const {navigate} = navigation;
    const urlParams = parseURL(url);
    // const routeName = route.split('/')[0];
    console.log('url params -> ', urlParams);

    const {sessionId} = urlParams;
    console.log('sesh - > ', sessionId);

    if (sessionId) {
      navigate('HomeScreen', {sessionId});
    } else {
      navigate('WelcomeScreen');
    }
  };

  const handleOpenURL = event => {
    navigateToScreen(event.url);
  };

  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate:
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        navigateToScreen(url);
      });
    } else {
      Linking.addEventListener('url', handleOpenURL);
    }
  });

  const {width} = Dimensions.get('window');

  return (
    <View style={WelcomeScreenStyles.screenContainer}>
      <SafeAreaView>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ImageBackground
          source={require('../../common/assets/images/freak.png')}
          style={{width, height: '87%'}}>
          <View style={WelcomeScreenStyles.spotifyButtonView}>
            <TouchableOpacity
              onPress={() => openLink()}
              style={WelcomeScreenStyles.spotifyButton}>
              <Text style={WelcomeScreenStyles.buttonText}>
                Sign Up with Spotify
              </Text>
              <Spotify width={48} height={48} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
