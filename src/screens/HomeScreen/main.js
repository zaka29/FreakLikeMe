/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment, useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {HomeScreenStyles} from './styling/styling';
import Logo from '../../common/assets/svgs/logo.svg';
// import {getTracks, getUser} from './actions';
import {useFetch} from '../../common/hooks/useFetch';

const HomeScreen = ({navigation}) => {
  const seshId = navigation.getParam('sessionId');
  const [data, loading] = useFetch('/user/compatibilities', seshId);

  if (loading)
    return <Text style={HomeScreenStyles.buttonText}>Loading..</Text>;

  console.log('data -> ', data);

  return (
    <View style={HomeScreenStyles.screenContainer}>
      <View style={HomeScreenStyles.logoContainer}>
        <Logo width={200} />
      </View>
      <SafeAreaView>
        <View style={HomeScreenStyles.userContainer}>
          {!loading &&
            data.map(user => {
              return (
                <View key={user.id}>
                  <View>
                    <Image
                      resizeMethod="scale"
                      style={{width: 150, height: 300}}
                      source={{uri: user.images[0].url}}
                    />
                  </View>
                  <Text style={HomeScreenStyles.buttonText}>
                    {user.display_name}kk
                  </Text>
                </View>
              );
            })}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
