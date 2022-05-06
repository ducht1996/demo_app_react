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

export default function AccountProductViewHistory() {
    return (
        <SafeAreaView style={styles.container}>
                <ScrollView>
                    <HeaderAccountOrderList />

                    <ProductCategory />
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
            <Text style={styles.headerAOLTitle}>Sản phẩm đã xem</Text>
        </View>
    )
}

const ProductCategory = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxProductCategoryList}>
            <View style={styles.pItem}>
                <View style={styles.pContainer}>
                    <View style={styles.pImgContent}>
                        <Image style={styles.pNew} source={require('../assets/images/icon_new.png')} />
                        <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                        <Image style={styles.pTraGop} source={require('../assets/images/icon_tragop.png')} />
                    </View>
                    <View style={styles.pInfo}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                            <Text style={styles.pName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
                        </TouchableOpacity>
                        <Text style={styles.pPrice}>1.292.000đ</Text>
                        <View style={styles.pAllSale}>
                            <Text style={styles.pOldPrice}>1.634.000đ</Text>
                            <Text style={styles.pDiscount}>-30%</Text>
                        </View>
                        <View style={styles.pOffer}>
                            <Text style={styles.pOfferText}>*3 khuyến mãi trị giá </Text>
                            <Text style={styles.pOfferPrice}>500.000đ</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.pItem}>
                <View style={styles.pContainer}>
                    <View style={styles.pImgContent}>
                        <Image style={styles.pNew} source={require('../assets/images/icon_new.png')} />
                        <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                        <Image style={styles.pTraGop} source={require('../assets/images/icon_tragop.png')} />
                    </View>
                    <View style={styles.pInfo}>
                        <Text style={styles.pName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
                        <Text style={styles.pPrice}>1.292.000đ</Text>
                        <View style={styles.pAllSale}>
                            <Text style={styles.pOldPrice}>1.634.000đ</Text>
                            <Text style={styles.pDiscount}>-30%</Text>
                        </View>
                        <View style={styles.pOffer}>
                            <Text style={styles.pOfferText}>*3 khuyến mãi trị giá </Text>
                            <Text style={styles.pOfferPrice}>500.000đ</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.pItem}>
                <View style={styles.pContainer}>
                    <View style={styles.pImgContent}>
                        <Image style={styles.pNew} source={require('../assets/images/icon_new.png')} />
                        <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                        <Image style={styles.pTraGop} source={require('../assets/images/icon_tragop.png')} />
                    </View>
                    <View style={styles.pInfo}>
                        <Text style={styles.pName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
                        <Text style={styles.pPrice}>1.292.000đ</Text>
                        <View style={styles.pAllSale}>
                            <Text style={styles.pOldPrice}>1.634.000đ</Text>
                            <Text style={styles.pDiscount}>-30%</Text>
                        </View>
                        <View style={styles.pOffer}>
                            <Text style={styles.pOfferText}>*3 khuyến mãi trị giá </Text>
                            <Text style={styles.pOfferPrice}>500.000đ</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.pItem}>
                <View style={styles.pContainer}>
                    <View style={styles.pImgContent}>
                        <Image style={styles.pNew} source={require('../assets/images/icon_new.png')} />
                        <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                        <Image style={styles.pTraGop} source={require('../assets/images/icon_tragop.png')} />
                    </View>
                    <View style={styles.pInfo}>
                        <Text style={styles.pName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
                        <Text style={styles.pPrice}>1.292.000đ</Text>
                        <View style={styles.pAllSale}>
                            <Text style={styles.pOldPrice}>1.634.000đ</Text>
                            <Text style={styles.pDiscount}>-30%</Text>
                        </View>
                        <View style={styles.pOffer}>
                            <Text style={styles.pOfferText}>*3 khuyến mãi trị giá </Text>
                            <Text style={styles.pOfferPrice}>500.000đ</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const productData = [
    {
        id: 1,
        productName: 'Máy làm mát Nagakawa NFC452 (110W) - Hàng chính hãng',
        productSKU: 'TESTSKU',
        productImage: {
            small: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
            medium: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
            large: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
            original: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
        },
        price: 30000000,
        marketPrice: 50000000,
        quantity: 1,
        summary: 'CPU: Intel Core i5 1035G1\nRAM: 8GB\nỔ cứng: 256GB SSD\nMàn hình: 15.6 inch FHD\nHĐH: Win 10\nMàu: Đen'
    },
    {
        id: 2,
        productName: 'Máy làm mát Nagakawa NFC452 (110W) - Hàng chính hãng',
        productSKU: 'TESTSKU',
        productImage: {
            small: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
            medium: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
            large: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
            original: 'https://shop.nagakawa.com.vn/media/product/137_nfc452.jpg',
        },
        price: 25000000,
        marketPrice: 50000000,
        quantity: 0,
        summary: 'CPU: Intel Core i5 1035G1\nRAM: 8GB\nỔ cứng: 256GB SSD\nMàn hình: 15.6 inch FHD\nHĐH: Win 10\nMàu: Đen'
    },
]

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
        width: winWidth - 60,
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
    pContainer: {
        width: '100%',
        padding: 10,
    },
    pImgContent: {
        width: '100%',
        position: 'relative',
        paddingTop: '100%',
        marginBottom: 10,
    },
    pNew: {
        width: 24,
        height: 18,
        position: 'absolute',
        zIndex: 6,
        top: 0,
        left: 0,
    },
    pImg: {
        width: '100%',
        position: 'absolute',
        zIndex: 5,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    pTraGop: {
        width: 68,
        height: 16,
        position: 'absolute',
        zIndex: 6,
        bottom: 0,
        left: '50%',
        transform: [{ translateX: -34 }],
    },
    pInfo: {
        width: '100%',
    },
    pName: {
        width: '100%',
        fontSize: 14,
        marginBottom: 10,
    },
    pPrice: {
        width: '100%',
        fontSize: 18,
        marginBottom: 10,
        color: '#D8262F',
        fontWeight: 'bold',
    },
    pAllSale: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    pOldPrice: {
        color: '#A1A1A1',
        fontSize: 14,
        textDecorationLine: 'line-through',
    },
    pDiscount: {
        paddingVertical: 5,
        backgroundColor: '#D8262F',
        width: 50,
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: 5,
    },
    pOffer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pOfferText: {
        fontSize: 10,
        color: '#A1A1A1',
    },
    pOfferPrice: {
        fontSize: 10,
        color: '#D8262F',
    },
    pItem: {
        width: winWidth / 2 - 15,
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    boxProductCategoryList: {
        width: winWidth,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: '#f2f2f2',
    },
})