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

export default function AccountOrderDetail() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView>
                    <HeaderAccountOrderList />

                    <AccountOrderDetailContent />
                </ScrollView>
                <AccountOrderDetailBottom />
            </View>
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
        <View style={styles.headerAOL}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerAOLBack}>
                <FontAwesome style={styles.headerAOLBackIcon} name="angle-left" />
            </TouchableOpacity>
            <Text style={styles.headerAOLTitle}>Đơn hàng 88899999</Text>
            <TouchableOpacity style={styles.headerAOLChat}>
                <Ionicons style={styles.headerAOLChatIcon} name="chatbubble-ellipses-outline" />
            </TouchableOpacity>
        </View>
    )
}

const AccountOrderDetailContent = () => {
    return (
        <View style={styles.boxAccOrDt}>
            <View style={styles.boxAccOrDtCtTop}>
                <Text style={styles.boxAccOrDtCtTopTextLeft}>Thời gian đặt mua: </Text>
                <Text style={styles.boxAccOrDtCtTopTextRight}>06-05-2021, 4:01 pm</Text>
            </View>
            <View style={styles.boxAccOrDtCtTop}>
                <Text style={styles.boxAccOrDtCtTopTextLeft}>Tình trạng: </Text>
                <Text style={[styles.boxAccOrDtCtTopTextRight, styles.OrangeColor]}>Giao hàng thành công</Text>
            </View>
            <View style={styles.boxAccOrDtCus}>
                <View style={styles.boxAccOrDtTitle}>
                    <Text style={styles.boxAccOrDtTitleNum}>1</Text>
                    <Text style={styles.boxAccOrDtTitleText}>Thông tin khách hàng</Text>
                </View>
                <View style={styles.boxAccOrDtCusInfo}>
                    <View style={styles.boxAccOrDtCusInfoItem}>
                        <Text style={styles.boxAccOrDtCusInfoItemLeft}>Họ tên:</Text>
                        <Text style={styles.boxAccOrDtCusInfoItemRight}>Nguyễn Quỳnh</Text>
                    </View>
                    <View style={styles.boxAccOrDtCusInfoItem}>
                        <Text style={styles.boxAccOrDtCusInfoItemLeft}>Email:</Text>
                        <Text style={styles.boxAccOrDtCusInfoItemRight}>Quynhqt@gmail.com</Text>
                    </View>
                    <View style={styles.boxAccOrDtCusInfoItem}>
                        <Text style={styles.boxAccOrDtCusInfoItemLeft}>Số điện thoại:</Text>
                        <Text style={styles.boxAccOrDtCusInfoItemRight}>0932108199</Text>
                    </View>
                    <View style={styles.boxAccOrDtCusInfoItem}>
                        <Text style={styles.boxAccOrDtCusInfoItemLeft}>Địa chỉ:</Text>
                        <Text style={styles.boxAccOrDtCusInfoItemRight}>100 Láng Hạ</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.boxAccOrDtTitle}>
                    <Text style={styles.boxAccOrDtTitleNum}>1</Text>
                    <Text style={styles.boxAccOrDtTitleText}>Thông tin đơn hàng</Text>
                </View>
                <View style={styles.boxAccOrDtList}>
                    <View style={styles.boxAccOrDtListItem}>
                        <Image style={styles.boxAccOrDtListItemImg} source={require('../assets/images/product.png')} />
                        <View style={styles.boxAccOrDtListItemInfo}>
                            <Text style={styles.boxAccOrDtListItemName}>ĐIỀU HÒA 1 CHIỀU 9000 BTU/H NAGAKAWA NS-C09R1M05 - MADE IN MALAYSIA - BẢO HÀNH 2 NĂM()</Text>
                            <Text style={styles.boxAccOrDtListItemPrice}>15.000.000đ</Text>
                            <Text style={styles.boxAccOrDtListItemQuan}>Số lượng: 1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const AccountOrderDetailBottom = () => {
    return (
        <View style={styles.accDtBt}>
            <View style={styles.accDtBtItem}>
                <Text style={styles.accDtBtItemTextLeft}>Giá trị</Text>
                <Text style={styles.accDtBtItemTextRight}>10.500.000đ</Text>
            </View>
            <View style={styles.accDtBtItem}>
                <Text style={styles.accDtBtItemTextLeft}>Phí vận chuyển</Text>
                <Text style={styles.accDtBtItemTextRight}>0đ</Text>
            </View>
            <View style={styles.accDtBtItem}>
                <Text style={styles.accDtBtItemTextLeft}>Tổng giá trị đơn hàng</Text>
                <Text style={styles.accDtBtItemTextRight}>10.500.000đ</Text>
            </View>
            <TouchableOpacity style={styles.accDtBtButton}>
                <Text style={styles.accDtBtButtonText}>Đặt lại</Text>
            </TouchableOpacity>
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
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerAOLBack: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerAOLBackIcon: {
        fontSize: 24,
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
        width: winWidth - 100,
        textAlign: 'center',
        fontWeight: '700',
    },
    headerAOLChat: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    headerAOLChatIcon: {
        fontSize: 24,
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
    boxAccOrDt: {
        width: winWidth,
        padding: 10,
    },
    boxAccOrDtCtTop: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    boxAccOrDtCtTopTextLeft: {
        fontWeight: '700',
    },
    boxAccOrDtCtTopTextRight: {},
    boxAccOrDtCus: {
        marginBottom: 10,
        marginTop: 10,
    },
    boxAccOrDtTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
        marginBottom: 10,
        borderBottomColor: '#ababab',
        borderBottomWidth: 1,
    },
    boxAccOrDtTitleNum: {
        width: 20,
        height: 20,
        fontSize: 16,
        fontWeight: '700',
        color: '#008445',
        textAlign: 'center',
        lineHeight: 20,
        borderColor: '#008445',
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 10,
    },
    boxAccOrDtTitleText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#008445',
        textTransform: 'uppercase',
    },
    boxAccOrDtCusInfo: {},
    boxAccOrDtCusInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    boxAccOrDtCusInfoItemLeft: {
        width: 100,
        fontWeight: '300',
    },
    boxAccOrDtCusInfoItemRight: {
        width: winWidth - 120,
        fontWeight: '300',
    },
    boxAccOrDtList: {},
    boxAccOrDtListItem: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
    },
    boxAccOrDtListItemImg: {
        width: 48,
        height: 48,
        marginRight: 10,
    },
    boxAccOrDtListItemInfo: {
        width: winWidth - 78,
    },
    boxAccOrDtListItemName: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10,
    },
    boxAccOrDtListItemPrice: {
        fontSize: 18,
        fontWeight: '700',
        color: '#D8262F',
        marginBottom: 10,
    },
    boxAccOrDtListItemQuan: {},
    accDtBt: {
        width: winWidth,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    accDtBtItem: {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    accDtBtItemTextLeft: {
        fontSize: 12,
        marginRight: 10,
    },
    accDtBtItemTextRight: {
        fontWeight: '700',
        width: 150,
    },
    accDtBtButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#D8262F',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    accDtBtButtonText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#fff'
    },
})