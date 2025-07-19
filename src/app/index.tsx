import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../components/atoms/custombutton'
import { useRouter } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'
import CustomStatusBar from '../components/atoms/customStatusBar'


const index = () => {
  // render
  const route = useRouter();
  const login = () => {
    route.push('/simpleLogin');
  };
  const numlogin = () => {
    route.push('/loginwithnumber');
  };
  const setting = () => {
    route.push('/setting');
  };

  return (
    <>
      <CustomStatusBar backgroundColor='transparent' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton text='Login with Email' containerStyle={{ alignItems: 'center' }} textStyle={{ textAlign: 'center' }} onPress={login} />
        <CustomButton text='Login with Number' containerStyle={{ marginTop: moderateScale(10), alignItems: 'center' }} textStyle={{ textAlign: 'center' }} onPress={numlogin} />
        <CustomButton text='Setting' containerStyle={{ marginTop: moderateScale(10), alignItems: 'center' }} textStyle={{ textAlign: 'center' }} onPress={setting} />

      </View>
    </>

  )
}

export default index
