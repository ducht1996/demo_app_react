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

export default function AccountProductSave() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderAccountOrderList />

                <ProductBought />
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
            <Text style={styles.headerAOLTitle}>Sản phẩm mua sau</Text>
        </View>
    )
}

const ShowProductItemBought = (props: { id: number, productName: string, productSKU: string, summary: string, productImage: { small: string, medium: string, large: string, original: string }, price: number, marketPrice: number, quantity: number }) => {

    const { id, productName, productSKU, summary, productImage, price, marketPrice, quantity } = props;
    const discount = Math.ceil(100 - (price / marketPrice * 100));


    return (
        <View style={[styles.itemProduct]}>
            <View style={styles.itemProducCt}>
                <View style={styles.pBloxImgProduct}>
                    <View style={styles.pBloxImgProductBao}>
                        <Image style={styles.pImgProduct} source={{ uri: productImage.large }} />
                    </View>
                    <TouchableOpacity style={styles.pBloxImgProductDelete}>
                        <Ionicons style={styles.pBloxImgProductDeleteIcon} name="trash" />
                    </TouchableOpacity>
                </View>
                <View style={styles.pBloxImgProductInfo}>
                    <Text style={styles.pNameProduct}>
                        {productName}
                    </Text>
                    <View style={styles.pNameProductFavo}>
                        <Text style={styles.priceProduct}>{formatCurrency(price)} đ</Text>
                        <View style={styles.pNameProductFavoBt}>
                            <TouchableOpacity style={styles.pNameProductFavoCart}>
                                <Ionicons style={styles.pNameProductFavoCartIcon} name="cart-outline" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
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

const ProductBought = () => {
    return (
        <View style={styles.boxProductSave}>
            <View style={styles.listProductSave}>
                {
                    productData.map(item => <ShowProductItemBought key={item.id} id={item.id} productName={item.productName}
                        productSKU={item.productSKU} summary={item.summary} productImage={item.productImage} price={item.price} marketPrice={item.marketPrice} quantity={item.quantity}
                    />)
                }
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
    boxProductSave: {
        backgroundColor: '#f2f2f2'
    },
    listProductSave: {
        backgroundColor: '#f2f2f2'
    },
    itemProduct: {
        padding: 10,
        marginBottom: 10,
    },
    itemProducCt: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    pBloxImgProduct: {
        width: 96,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    pBloxImgProductBao: {
        width: 96,
        position: 'relative',
        paddingTop: 96,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    pImgProduct: {
        position: 'absolute',
        top: 0,
        left: '5%',
        right: 0,
        bottom: 0,
        maxHeight: 500,
        width: '90%',
    },
    pBloxImgProductInfo: {
        width: winWidth - 136,
    },
    pNameProduct: {
        fontSize: 16,
        color: '#111',
        marginBottom: 10,
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    priceProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f10000',
        marginBottom: 5,
    },
    proReview: {
        width: '100%',
        height: 40,
        backgroundColor: '#D8262F',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    proReviewText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#fff'
    },
    pNameProductFavo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pNameProductFavoBt: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pNameProductFavoHeart: {
        marginRight: 10,
    },
    pNameProductFavoHeartIcon: {
        fontSize: 24,
        color: '#D8262F',
    },
    pNameProductFavoCart: {
        width: 32,
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8262F',
        borderRadius: 3,
    },
    pNameProductFavoCartIcon: {
        fontSize: 18,
        color: '#fff',
    },
    pBloxImgProductDelete: {
        marginTop: 10,
        padding: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#ababab',
    },
    pBloxImgProductDeleteIcon: {
        fontSize: 16,
        color: '#ababab',
    },
})