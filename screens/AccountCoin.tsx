import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Modal, Pressable, Share } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

export default function AccountCoin() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderAccountOrderList />

                <NoteCoin />
            </ScrollView>
        </SafeAreaView>
    )
}

function formatCurrency(price: string | number) {
    let priceConvert = parseFloat(`${price}`).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1.").toString();
    let len = priceConvert.length;
    return priceConvert.substring(0, len - 3);
}

const HeaderAccountOrderList = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerCoin}>
            <Image style={styles.headerCoinBg} source={require('../assets/images/bg-coin.png')} />
            <View style={styles.headerAOL}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerAOLBack}>
                    <FontAwesome style={styles.headerAOLBackIcon} name="angle-left" />
                </TouchableOpacity>
                <Text style={styles.headerAOLTitle}>Naga Xu</Text>
            </View>
            <View style={styles.headerCoinCtBot}>
                <View style={styles.headerCoinCount}>
                    <Image style={styles.headerCoinCountImg} source={require('../assets/images/coin.png')} />
                    <Text style={styles.headerCoinCountText}>10</Text>
                </View>
                <Text style={styles.headerCoinText}>B???n c?? <Text style={styles.textBold}>10</Text> xu trong t??i kho???n</Text>
            </View>
        </View>
    )
}

const NoteCoin = () => {
    return(
        <View style={styles.noteCoin}>
            <Text style={styles.noteCoinText}>Gi???i thi???u v??? Naga xu</Text>
            <Text style={styles.noteCoinText}>- Naga Xu l?? h??? th???ng t??ch ??i???m d??nh cho Kh??ch h??ng c???a Nagakawa Shop.</Text>
            <Text style={styles.noteCoinText}>- 10 Naga Xu = 1.000 ?????ng.</Text>
            <Text style={styles.noteCoinText}>- Th???i gian s??? d???ng Naga Xu l?? 01 n??m t??? khi b???t ?????u ????ng k?? t??i kho???n t???i website</Text>
            <Text style={styles.noteCoinText}>- Kh??ch h??ng nh???n Naga Xu khi mua h??ng ho???c t????ng t??c comment t???i website Nagakawa</Text>
        </View>
    )
}

const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height
const winWidthP10 = winWidth - 20;
const halfWinWidth = winWidth / 2;
const ratio = winWidthP10 / 850; //541 is actual image width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    headerAOL: {
        width: winWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 50,
        left: 0,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    headerAOLBack: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerAOLBackIcon: {
        fontSize: 24,
        color: '#fff',
    },
    headerAOLSearch: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerAOLSearchIcon: {
        fontSize: 24,
    },
    headerAOLTitle: {
        width: winWidth - 60,
        textAlign: 'center',
        fontWeight: '700',
        color: '#fff',
    },
    GreenColor: {
        color: '#008445',
    },
    OrangeColor: {
        color: '#FE9923',
    },
    RedColor: {
        color: '#D8262F',
    },
    headerCoin: {
        width: winWidth,
        position: 'relative',
    },
    headerCoinBg: {
        width: winWidth,
    },
    headerCoinCtBot: {
        width: winWidth,
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    headerCoinCount: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    headerCoinCountImg: {
        width: 105,
        height: 105,
        marginRight: 10,
    },
    headerCoinCountText: {
        fontSize: 50,
        fontWeight: '700',
        marginLeft: 10,
        color: '#fff'
    },
    headerCoinText: {
        width: '100%',
        textAlign: 'center',
        color: '#fff'
    },
    textBold: {
        fontWeight: '700',
        color: '#fff',
    },
    noteCoin: {
        width: winWidth,
        padding: 10,
    },
    noteCoinText: {
        width: '100%',
        marginBottom: 6,
        fontWeight: '300',
    },
})