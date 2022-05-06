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

export default function AccountOrderList() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderAccountOrderList />

                <ListOrder />
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
        <View style={styles.headerAOL}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerAOLBack}>
                <FontAwesome style={styles.headerAOLBackIcon} name="angle-left" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerAOLSearch}>
                <Ionicons style={styles.headerAOLSearchIcon} name="search-outline" />
            </TouchableOpacity>
            <Text style={styles.headerAOLTitle}>Đơn hàng của tôi</Text>
            <TouchableOpacity style={styles.headerAOLChat}>
                <Ionicons style={styles.headerAOLChatIcon} name="chatbubble-ellipses-outline" />
            </TouchableOpacity>
        </View>
    )
}

const ListOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.ListOrder}>
            <View style={styles.ListOrderItem}>
                <View style={styles.ListOrderItemLeft}>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Mã đơn hàng</Text>
                        <Text style={[styles.ListOrderItemLineTextRight, styles.GreenColor]}>09888888</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Ngày mua</Text>
                        <Text style={styles.ListOrderItemLineTextRight}>15/5/2021</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Tổng tiền</Text>
                        <Text style={styles.ListOrderItemLineTextRight}>5.000.000đ</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Trạng thái</Text>
                        <Text style={[styles.ListOrderItemLineTextRight, styles.OrangeColor]}>Giao hàng thành công</Text>
                    </View>
                    <TouchableOpacity style={styles.ListOrderItemBt}>
                        <Text style={styles.ListOrderItemBtText}>Đặt lại</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AccountOrderDetail')} style={styles.ListOrderItemBtDetail}>
                    <FontAwesome style={styles.ListOrderItemBtDetailIcon} name="angle-right" />
                </TouchableOpacity>
            </View>
            <View style={styles.ListOrderItem}>
                <View style={styles.ListOrderItemLeft}>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Mã đơn hàng</Text>
                        <Text style={[styles.ListOrderItemLineTextRight, styles.GreenColor]}>09888888</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Ngày mua</Text>
                        <Text style={styles.ListOrderItemLineTextRight}>15/5/2021</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Tổng tiền</Text>
                        <Text style={styles.ListOrderItemLineTextRight}>5.000.000đ</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Trạng thái</Text>
                        <Text style={[styles.ListOrderItemLineTextRight, styles.OrangeColor]}>Giao hàng thành công</Text>
                    </View>
                    <TouchableOpacity style={styles.ListOrderItemBt}>
                        <Text style={styles.ListOrderItemBtText}>Đặt lại</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AccountOrderDetail')} style={styles.ListOrderItemBtDetail}>
                    <FontAwesome style={styles.ListOrderItemBtDetailIcon} name="angle-right" />
                </TouchableOpacity>
            </View>
            <View style={styles.ListOrderItem}>
                <View style={styles.ListOrderItemLeft}>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Mã đơn hàng</Text>
                        <Text style={[styles.ListOrderItemLineTextRight, styles.GreenColor]}>09888888</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Ngày mua</Text>
                        <Text style={styles.ListOrderItemLineTextRight}>15/5/2021</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Tổng tiền</Text>
                        <Text style={styles.ListOrderItemLineTextRight}>5.000.000đ</Text>
                    </View>
                    <View style={styles.ListOrderItemLine}>
                        <Text style={styles.ListOrderItemTextLeft}>Trạng thái</Text>
                        <Text style={[styles.ListOrderItemLineTextRight, styles.RedColor]}>Đã hủy</Text>
                    </View>
                    <TouchableOpacity style={styles.ListOrderItemBt}>
                        <Text style={styles.ListOrderItemBtText}>Đặt lại</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AccountOrderDetail')} style={styles.ListOrderItemBtDetail}>
                    <FontAwesome style={styles.ListOrderItemBtDetailIcon} name="angle-right" />
                </TouchableOpacity>
            </View>

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
        width: winWidth - 140,
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
    ListOrder: {
        width: winWidth,
        backgroundColor: '#f2f2f2',
    },
    ListOrderItem: {
        width: winWidth,
        padding: 10,
        marginTop: 10,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ListOrderItemLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ListOrderItemTextLeft: {
        width: 100,
        fontSize: 14,
        fontWeight: '300',
        color: '#777777',
    },
    ListOrderItemLineTextRight: {
        width: winWidth - 170,
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
    ListOrderItemBt: {
        width: 104,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D8262F',
        borderWidth: 1,
        borderRadius: 5,
    },
    ListOrderItemBtText: {
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#D8262F',
    },
    ListOrderItemLeft: {
        width: winWidth - 70,
    },
    ListOrderItemBtDetail: {
        width: 50,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ListOrderItemBtDetailIcon: {
        fontSize: 26,
    },
})