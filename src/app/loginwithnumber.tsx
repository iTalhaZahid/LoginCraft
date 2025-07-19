import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import CustomStatusBar from '../components/atoms/customStatusBar';
import CustomButton from '../components/atoms/custombutton';
import RBSheet from 'react-native-raw-bottom-sheet';

// Define only the methods you plan to use from the ref
interface RBSheetRef {
  open: () => void;
  close: () => void;
}

const Loginwithnumber = () => {
  const [countryCode, setCountryCode] = useState('+92');
  const sheet = useRef<RBSheetRef | null>(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: moderateScale(20),
            backgroundColor: 'white',
          }}
          keyboardShouldPersistTaps="handled"
        >
          <CustomStatusBar backgroundColor="white" />

          <View>
            <Text style={styles.mainHeadingText}>Enter Your Phone Number</Text>
            <Text style={styles.headerText}>
              You will receive a 4 digit code to verify your number
            </Text>
          </View>

          <View style={styles.numberContainer}>
            <TouchableOpacity onPress={() => sheet.current?.open()}>
              <Text style={styles.countryCode}>{countryCode}</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={'#505060'}
              keyboardType="number-pad"
              style={styles.phoneInput}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.continueText}>Or Continue with</Text>

          <View style={{ gap: moderateVerticalScale(8) }}>
            <CustomButton
              text="Email"
              lefticon={
                <MaterialCommunityIcons
                  name="email-fast"
                  size={26}
                  color="black"
                />
              }
              containerStyle={styles.socialButtons}
              textStyle={styles.socialButtonsText}
            />
            <CustomButton
              text="Apple"
              lefticon={<Ionicons name="logo-apple" size={24} color="black" />}
              containerStyle={styles.socialButtons}
              textStyle={styles.socialButtonsText}
            />
            <CustomButton
              text="Google"
              lefticon={<AntDesign name="google" size={24} color="black" />}
              containerStyle={styles.socialButtons}
              textStyle={styles.socialButtonsText}
            />
            <CustomButton
              text="Facebook"
              lefticon={<Ionicons name="logo-facebook" size={24} color="black" />}
              containerStyle={styles.socialButtons}
              textStyle={styles.socialButtonsText}
            />
          </View>

          <View style={styles.footerContainer}>
            <Text style={{ fontSize: moderateScale(16), textAlign: 'center' }}>
              Not a member?<Text style={{ color: 'blue' }}> Sign Up</Text>
            </Text>
          </View>

          {/* @ts-ignore: prop not typed in lib, but supported */}
          <RBSheet
            ref={sheet}
            keyboardAvoidingViewEnabled={true}
            customStyles={{
              container: {
                padding: moderateScale(20),
                borderTopLeftRadius: moderateScale(20),
                borderTopRightRadius: moderateScale(20),
                minHeight: moderateVerticalScale(300),
              },
            }}
            customModalProps={{ animationType: 'slide', statusBarTranslucent: true }}
          >
            <View style={{ height: 300 }}>
              <CountryPicker
                withFilter
                withFlag
                withCallingCode
                withModal={false}
                onSelect={(e: Country) => {
                  setCountryCode(`+${e.callingCode}`);
                  sheet.current?.close();
                }}
              />
            </View>
          </RBSheet>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Loginwithnumber;

const styles = StyleSheet.create({
  mainHeadingText: {
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
  headerText: {
    fontSize: moderateScale(15),
    color: '#929292',
    fontWeight: '500',
    marginTop: moderateVerticalScale(8),
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3eff6',
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(8),
    gap: moderateScale(8),
    marginTop: moderateVerticalScale(50),
    marginBottom: moderateVerticalScale(8),
  },
  countryCode: {
    fontSize: moderateScale(15),
    textAlign: 'center',
    width:moderateScale(40),
  },
  phoneInput: {
    flex: 1,
    fontSize: moderateScale(16),
    height: moderateVerticalScale(44),
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(8),
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(20),
    textAlign: 'center',
  },
  continueText: {
    marginVertical: moderateVerticalScale(32),
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: '#222',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: moderateVerticalScale(14),
  },
  socialButtons: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP(90),
  },
  socialButtonsText: {
    color: '#222',
    fontSize: moderateScale(16),
    fontWeight: '500',
    textAlign: 'center',
  },
});
