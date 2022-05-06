import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxLogin}>
                <View style={styles.boxLoginTop}>
                    <TouchableOpacity style={styles.boxLoginLogo}>
                        <Image source={require('../assets/images/logo.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxLoginItemList}>
                    <View style={styles.boxLoginItem}>
                        <Ionicons style={styles.boxLoginItemIcon} name="person-outline" />
                        <TextInput style={styles.boxLoginItemInput} placeholder="Email đăng nhập*" />
                    </View>
                    <View style={styles.boxLoginItem}>
                        <Ionicons style={styles.boxLoginItemIcon} name="lock-closed-outline" />
                        <TextInput style={[styles.boxLoginItemInput, styles.boxLoginItemInputMk]} placeholder="Mật khẩu" />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.boxLoginItemForgitPas}>
                            <Text style={styles.boxLoginItemForgitPasText}>Quên?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AccountHome')} style={styles.boxLoginButton}>
                    <Text style={styles.boxLoginButtonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.boxLoginButtonRegis}>
                    <Text style={styles.boxLoginButtonRegisText}>Khách hàng mới?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.boxLoginButtonRegisBt}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxLoginLineChia}>
                    <View style={styles.boxLoginLine}></View>
                    <Text style={styles.boxLoginLineChiaText}>Hoặc</Text>
                    <View style={styles.boxLoginLine}></View>
                </View>
                <View style={styles.loginSocial}>
                    <TouchableOpacity style={[styles.loginSocialItem, styles.loginSocialItemFace]}>
                        <FontAwesome style={styles.loginSocialItemIcon} name="facebook" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginSocialItem, styles.loginSocialItemGoogle]}>
                        <FontAwesome style={styles.loginSocialItemIcon} name="google" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginSocialItem, styles.loginSocialItemZalo]}>
                        <Image style={styles.loginSocialItemImg} source={require('../assets/images/zalo-login.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLogin: {
        width: winWidth,
        height: winHeight - 130,
        padding: 10,
    },
    boxLoginTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    boxLoginLogo: {},
    boxLoginItemList: {},
    boxLoginItem: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        paddingBottom: 5,
        position: 'relative',
    },
    boxLoginItemIcon: {
        fontSize: 24,
        width: 32,
    },
    boxLoginItemInput: {
        width: winWidth - 52,
        height: 30,
    },
    boxLoginItemInputMk: {
        paddingRight: 50,
    },
    boxLoginItemForgitPas: {
        position: 'absolute',
        right: 0,
        borderLeftColor: '#e1e1e1',
        borderLeftWidth: 1,
        width: 50,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    boxLoginItemForgitPasText: {
        color: '#0070C7'
    },
    boxLoginButton: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#D8262F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLoginButtonText: {
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
    },
    boxLoginButtonRegis: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxLoginButtonRegisText: {
        marginRight: 5,
    },
    boxLoginButtonRegisBt: {
        color: '#0070C7',
    },
    boxLoginLineChia: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxLoginLine: {
        width: 80,
        height: 1,
        backgroundColor: '#e1e1e1',
    },
    boxLoginLineChiaText: {
        marginHorizontal: 5,
        color: '#777',
        fontWeight: '300',
    },
    loginSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSocialItem: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#3B5998',
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSocialItemIcon: {
        fontSize: 18,
        color: '#fff'
    },
    loginSocialItemImg: {
        width: 22,
        height: 24,
    },
    loginSocialItemFace: {},
    loginSocialItemGoogle: {
        backgroundColor: '#DF4A32',
    },
    loginSocialItemZalo: {
        backgroundColor: '#0F8EDD'
    },
});
