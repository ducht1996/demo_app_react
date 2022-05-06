import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxForgotPassword}>
                <Text style={styles.boxForgotPasswordTitle}>Bạn quên mật khẩu vào tài khoản?</Text>
                <Text style={styles.boxForgotPasswordNote}>Vui lòng nhập địa chỉ email đã đăng ký với chúng tôi để tạo mật khẩu mới. Chúng tôi sẽ gửi 1 email vào địa chỉ email cung cấp và yêu cầu xác minh trước khi có thể tạo mật khẩu mới</Text>
                <View style={styles.boxForgotPasswordInput}>
                    <TextInput style={styles.boxForgotPasswordInputCt} placeholder="Email" />
                </View>
                <TouchableOpacity style={styles.boxForgotPasswordButton}>
                    <Text style={styles.boxForgotPasswordButtonText}>Lấy lại mật khẩu</Text>
                </TouchableOpacity>
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
    boxForgotPassword: {
        width: winWidth,
        padding: 10,
        height: '100%',
    },
    boxForgotPasswordTitle: {
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '700'
    },
    boxForgotPasswordNote: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '300'
    },
    boxForgotPasswordInput: {
        width: '100%',
        marginBottom: 15,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    boxForgotPasswordInputCt: {
        width: '100%',
        height: 30,
    },
    boxForgotPasswordButton: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#D8262F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxForgotPasswordButtonText: {
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
    },

});
