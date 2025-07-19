import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { CheckBox } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";
import Custombutton from "../components/atoms/custombutton";
import CustomStatusBar from '../components/atoms/customStatusBar';
import imagePath from "../constants/imagePath";


export default function SimpleLogin() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.main}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
       <CustomStatusBar backgroundColor='#e8ecf4' />
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.top}>
            <Image resizeMode='contain' style={styles.img} source={imagePath.logo} />
            <Text style={styles.imgtext}>Built with React Native</Text>
          </View>

          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.label}>Email or Username</Text>
              <TextInput style={styles.input} placeholder="email@example.com" placeholderTextColor={'rgb(182, 178, 178)'} />
            </View>

            <View style={styles.passRow}>
              <Text style={styles.label}>Password</Text>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
            <TextInput style={styles.input} placeholder="**********" placeholderTextColor={'rgb(182, 178, 178)'} secureTextEntry={true} />


            <CheckBox
              title="Remember me"
              checked={checked}
              onPress={() => setChecked(!checked)}
              titleProps={{
                style: {
                  fontSize: moderateScale(16),
                  fontWeight: '600',
                }

              }}
              checkedColor="#1E90FF"       // color of check mark
              uncheckedColor="#000000"     // border color of unchecked box
              containerStyle={{
                backgroundColor: 'transparent',
                padding: 0,
                marginLeft: 0,
                marginTop: 0,
                marginBottom: 0
              }}
            />

          </View>
          <View style={styles.orRow}>
            <View style={styles.hr}></View>
            <View style={styles.orContainer}>
              <Text>OR</Text>
            </View>
            <View style={styles.hr}></View>
          </View>

          <View style={styles.buttonGroup}>
            <Custombutton
              text="Continue with Google"
              lefticon={<AntDesign name="google" size={24} color="white" />}
              containerStyle={styles.button}
              textStyle={{ fontSize: moderateScale(16), fontWeight: '500' }}
            />
            <Custombutton
              text="Continue with email"
              lefticon={<Entypo name="mail" size={24} color="white" />}
              containerStyle={styles.button }
              textStyle={{ fontSize: moderateScale(16), fontWeight: '500' }}
            />
            <Custombutton
              text="Continue with Facebook"
              lefticon={<FontAwesome name="facebook" size={24} color="white" />}
              containerStyle={styles.button}
              textStyle={{ fontSize: moderateScale(16), fontWeight: '500' }}
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e8ecf4',
  },
  scrollContent: {
    justifyContent: 'space-between',
    paddingVertical: verticalScale(16),
    paddingHorizontal: moderateScale(24),
  },
  top: {
    paddingVertical: moderateVerticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
    gap:moderateScale(10),
  },
  img: {
    height: heightPercentageToDP(15),
    width: widthPercentageToDP(33),
    borderRadius: moderateScale(100),

  },
  imgtext: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginTop: verticalScale(8),
  },
  inputContainer: {
   marginBottom:moderateVerticalScale(14),
  },
  label: {
    paddingVertical: moderateVerticalScale(3),
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  input: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    marginTop: moderateScale(8),
    height: verticalScale(40),
    fontSize: moderateScale(16),
    paddingHorizontal: moderateScale(10),
    marginBottom: verticalScale(12),
    backgroundColor: 'rgba(255, 255, 255, 0.69)',
  },
  passRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgot: {
    color: '#007AFF',
    fontSize: moderateScale(14),
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(16),
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  orContainer: {
    paddingHorizontal: moderateScale(8),
  },
  buttonGroup: {
    gap: verticalScale(8),
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF' ,
  },
});
