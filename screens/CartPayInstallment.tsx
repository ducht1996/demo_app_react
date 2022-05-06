import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function CartPayInstallment() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderCart />

                <CartItemPayInstall />

                <BoxPayInstallForm />
            </ScrollView>
        </SafeAreaView>
    );
}

const HeaderCart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerCartStep}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.navigate('Cart')}>
                <FontAwesome style={styles.goBackIcon} name="angle-left" />
            </TouchableOpacity>
            <Text style={styles.headerCartStepTitle}>Mua trả góp</Text>
        </View>
    )
}

const CartItemPayInstall = () => {
    return(
        <View style={styles.boxItemCartPayInstall}>
            <View style={styles.boxItemCartPayInstallItem}>
                <View style={styles.boxItemCartPayInstallItemLeft}>
                    <Image style={styles.boxItemCartPayInstallItemImg} source={require('../assets/images/product.png')} />
                    <TouchableOpacity style={styles.boxItemCartPayInstallItemDelete}>
                        <FontAwesome style={styles.boxItemCartPayInstallItemDeleteIcon} name="trash" />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxItemCartPayInstallItemInfo}>
                    <Text style={styles.boxItemCartPayInstallItemName}>ĐIỀU HÒA 1 CHIỀU 9000 BTU/H NAGAKAWA NS-C09R1M05 - MADE IN MALAYSIA - BẢO HÀNH 2 NĂM()</Text>
                    <Text style={styles.boxItemCartPayInstallItemPrice}>10.000.000đ</Text>
                </View>
            </View>
            <View style={styles.boxItemCartPayInstallItem}>
                <View style={styles.boxItemCartPayInstallItemLeft}>
                    <Image style={styles.boxItemCartPayInstallItemImg} source={require('../assets/images/product.png')} />
                    <TouchableOpacity style={styles.boxItemCartPayInstallItemDelete}>
                        <FontAwesome style={styles.boxItemCartPayInstallItemDeleteIcon} name="trash" />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxItemCartPayInstallItemInfo}>
                    <Text style={styles.boxItemCartPayInstallItemName}>ĐIỀU HÒA 1 CHIỀU 9000 BTU/H NAGAKAWA NS-C09R1M05 - MADE IN MALAYSIA - BẢO HÀNH 2 NĂM()</Text>
                    <Text style={styles.boxItemCartPayInstallItemPrice}>10.000.000đ</Text>
                </View>
            </View>
        </View>
    )
}

const BoxPayInstallForm = () => {
    return(
        <View style={styles.boxPayForm}>
            <View style={styles.boxPayFormHeader}>
                <Text style={styles.boxPayFormHeaderText}>Trả góp 0% bằng thẻ tín dụng</Text>
                <Image style={styles.boxPayFormHeaderImg} source={require('../assets/images/payinstall-bank.png')} />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Giá trị sản phẩm (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="0" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Số tiền trả góp (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="0" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Tiền tệ (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="VND" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Họ tên (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Địa chỉ (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Số tiền trả trước (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="0" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Số lượng (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="1" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Email (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="Email" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Số điện thoại (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="Số điện thoại" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <Text  style={styles.boxPayFormItemText}>Thành phố (*)</Text>
                <TextInput style={styles.boxPayFormItemInput} value="Hà Nội" />
            </View>
            <View  style={styles.boxPayFormItem}>
                <TouchableOpacity style={styles.boxPayFormItemSend}>
                    <Text style={styles.boxPayFormItemSendText}>Thanh toán trả góp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCartStep: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    goBack: {
        width: 50,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackIcon: {
        fontSize: 24,
    },
    headerCartStepTitle: {
        fontWeight: '700',
        width: winWidth - 70,
        textAlign: 'center'
    },
    boxItemCartPayInstall: {
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
    },
    boxItemCartPayInstallItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    boxItemCartPayInstallItemLeft: {
        width: 65,
        paddingRight: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },
    boxItemCartPayInstallItemImg: {
        width: '100%',
        height: 50,
        marginBottom: 10,
    },
    boxItemCartPayInstallItemDelete: {
        padding: 5,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 3,
    },
    boxItemCartPayInstallItemDeleteIcon: {
        fontSize: 16,
        color: '#999'
    },
    boxItemCartPayInstallItemInfo: {
        width: winWidth - 85,
    },
    boxItemCartPayInstallItemName: {
        marginBottom: 10,
        fontWeight: '700'
    },
    boxItemCartPayInstallItemPrice: {
        fontSize: 18,
        fontWeight: '700',
        color: '#D8262F',
    },
    boxPayForm: {
        width: winWidth,
        padding: 10,
    },
    boxPayFormHeader: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#008445',
        backgroundColor: '#DBF1E6',
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxPayFormHeaderText: {
        marginBottom: 10,
        fontWeight: '700',
        fontSize: 16,
    },
    boxPayFormHeaderImg: {
        width: 149,
        height: 24,
    },
    boxPayFormItem: {
        marginBottom: 15,
    },
    boxPayFormItemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    boxPayFormItemInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        borderColor: '#ABABAB',
        borderWidth: 1,
        borderRadius: 3,
    },
    boxPayFormItemSend: {
        width: '100%',
        height: 40,
        backgroundColor: '#D8262F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    boxPayFormItemSendText: {
        fontSize: 14,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
