import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import CustomButton from '../components/atoms/custombutton'
import CustomStatusBar from '../components/atoms/customStatusBar'
import imagePath from '../constants/imagePath'
import { SafeAreaView } from 'react-native-safe-area-context'

const setting = () => {
    const [form, setForm] = useState({
        darkMode: false,
        emailNotifications: true,
        pushNotifications: false,
    });
    // render
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'white' }} edges={['left', 'right', 'bottom']}>

            <ScrollView style={{ backgroundColor: 'white', paddingLeft: moderateScale(20), paddingRight: moderateScale(20)  } }>
                <View style={{}}>
                    {/* <CustomStatusBar backgroundColor='transparent' /> */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', gap: moderateScale(5)}}>
                        <Image source={imagePath.logo} style={styles.img} />
                        <Text style={styles.username}>John Doe</Text>
                        <Text style={styles.useradress}>123 Maple Street, Anytown, PA, 17010</Text>
                    </View>
                    <View style={{ marginTop: moderateVerticalScale(10) }}>
                        <Text style={styles.title}>Preferences</Text>
                        <View style={{ backgroundColor: '#f2f2f2', paddingHorizontal: 4, borderRadius: 12 }}>

                            <CustomButton containerStyle={styles.button}
                                leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#fe9400' }]}
                                textStyle={styles.buttonText}
                                lefticon={<Feather name="globe" size={20} color="#fff" />}
                                text='Language'
                                rightIcon={<Entypo name="chevron-small-right" size={20} color="#C6C6C6" />}
                            />

                            <View style={styles.hr} />
                            <CustomButton containerStyle={styles.button}
                                leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#007afe' }]}
                                textStyle={styles.buttonText}
                                lefticon={<Feather name="moon" size={20} color="#fff" />}
                                text='Dark Mode'
                                switchbtn={form.darkMode} onPress={() => setForm({ ...form, darkMode: !form.darkMode })}
                            />
                            <View style={styles.hr} />

                            <CustomButton containerStyle={styles.button}
                                leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#38C959' }]}
                                textStyle={styles.buttonText}
                                lefticon={<Feather name="navigation" size={20} color="#fff" />}
                                text='Location'
                                rightIcon={<Entypo name="chevron-small-right" size={20} color="#C6C6C6" />}
                            />
                            <View style={styles.hr} />

                            <CustomButton
                                containerStyle={styles.button}
                                leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#38C959' }]}
                                textStyle={styles.buttonText}
                                lefticon={<Entypo name="email" size={20} color="#fff" />}
                                text='Email Notifications'
                                switchbtn={form.emailNotifications} onPress={() => setForm({ ...form, emailNotifications: !form.emailNotifications })}
                            />
                            <View style={styles.hr} />


                            <CustomButton
                                containerStyle={styles.button}
                                leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#38C959' }]}
                                textStyle={styles.buttonText}
                                lefticon={<FontAwesome5 name="bell" size={20} color="#fff" />}
                                text='Push Notifications'
                                switchbtn={form.pushNotifications} onPress={() => setForm({ ...form, pushNotifications: !form.pushNotifications })}
                            />
                        </View>

                    </View>
                    <View style={{marginBottom:moderateVerticalScale(20)}}>
                        <Text style={styles.title}>Help</Text>
                        <View style={{ backgroundColor: '#f2f2f2', paddingHorizontal: 4, borderRadius: 12 }}>
                            <CustomButton containerStyle={styles.button} lefticon={<Feather name="flag" size={20} color="#fff" />} leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#8e8d91' }]} textStyle={styles.buttonText} text='Report Bug ' rightIcon={<Entypo name="chevron-small-right" size={20} color="#C6C6C6" />} />
                            <View style={styles.hr} />
                            <CustomButton containerStyle={styles.button} lefticon={<AntDesign name="mail" size={20} color="#fff" />} leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#007afe' }]} textStyle={styles.buttonText} text='Contact Us ' rightIcon={<Entypo name="chevron-small-right" size={20} color="#C6C6C6" />} />
                            <View style={styles.hr} />
                            <CustomButton containerStyle={styles.button} lefticon={<AntDesign name="staro" size={20} color="#fff" />} leftIconContainer={[styles.btnLeftIcon, { backgroundColor: '#32c759' }]} textStyle={styles.buttonText} text='Rate in App Store ' rightIcon={<Entypo name="chevron-small-right" size={20} color="#C6C6C6" />} />
                        </View>
                    </View>
                </View >
            </ScrollView >
        </SafeAreaView>
    )
}

export default setting
const styles = StyleSheet.create({
    img: {
        height: heightPercentageToDP(15),
        width: widthPercentageToDP(33),
        borderRadius: moderateScale(100),
    },
    title: {
        paddingVertical: moderateScale(12),
        fontSize: moderateScale(12),
        fontWeight: '600',
        color: '#9e9e9e',
        textTransform: 'uppercase',
        letterSpacing: moderateScale(1.1),
    },
    button: {
        width: widthPercentageToDP(85),
        backgroundColor: '#f2f2f2',
        borderRadius: 8,

    },
    buttonText: {
        fontSize:  moderateScale(17),
        fontWeight: '400',
        color: '#0c0c0c',
        flex: 1,
    },
    username: {
        fontSize: moderateScale(19),
        fontWeight: '600',
        color: '#414d63',
        textAlign: 'center',
    },
    useradress: {
        fontSize: moderateScale(16),
        color: '#989898',
        textAlign: 'center',
    },
    hr: {
        alignSelf: 'center',
        width: widthPercentageToDP(80),
        height: moderateVerticalScale(1),
        backgroundColor: '#727272',
        paddingHorizontal: 10,
    },
    btnLeftIcon: {
        borderRadius: moderateScale(50),
        height: moderateVerticalScale(30),
        justifyContent: 'center',
        alignItems: 'center'
    }
})