import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { Asset } from 'expo-asset';
import { RadioButton, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/core';

export default function CartStep() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <CustommerInfo />
            </ScrollView>
        </SafeAreaView>
    );
}

const CustommerInfo = () => {
    return (
        <View style={styles.boxCustommerInfoCart}>
            <HeaderCart />

            <CustommerInfoCart />

            <SelecPayOption />

            <Bill />

            <TotalCart />
        </View>
    )
}

const HeaderCart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerCartStep}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <FontAwesome style={styles.goBackIcon} name="angle-left" />
            </TouchableOpacity>
            <Text style={styles.headerCartStepTitle}>Thanh toán</Text>
        </View>
    )
}

const CustommerInfoCart = () => {
    const [selecSex, setSelecSex] = React.useState('male');
    const [checkedInfo, setCheckedInfo] = React.useState(false);
    const [selectedProvince, setSelectedProvince] = React.useState();
    const [selectedDistrict, setSelectedDistrict] = React.useState();
    return (
        <View style={styles.noBg}>
            <View style={styles.boxInfoCusCartTitleAll}>
                <Text style={styles.boxInfoCusCartTitleAllNum}>1</Text>
                <Text style={styles.boxInfoCusCartTitle}>Thông tin khách hàng</Text>
            </View>
            <View style={styles.boxInfoCusCartHeading}>
                <Text style={styles.boxInfoCusCartHeadingText}>Thông tin người mua</Text>
                <Text style={styles.boxInfoCusCartHeadingNote}>(<Text style={styles.red}>*</Text>) Thông tin bắt buộc</Text>
            </View>
            <View style={styles.boxInfoCusCartItemSex}>
                <View style={styles.boxInfoCusCartItemSexIt}>
                    <View style={styles.itemRadio}>
                        <RadioButton color={'#243a76'} value={'male'} status={selecSex === 'male' ? 'checked' : 'unchecked'} onPress={() => setSelecSex('male')} />
                    </View>
                    <Text>Anh</Text>
                </View>
                <View style={styles.boxInfoCusCartItemSexIt}>
                    <View style={styles.itemRadio}>
                        <RadioButton color={'#243a76'} value={'female'} status={selecSex === 'female' ? 'checked' : 'unchecked'} onPress={() => setSelecSex('female')} />
                    </View>
                    <Text>Chị</Text>
                </View>
            </View>
            <View style={styles.boxInfoCusCartContent}>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Họ tên*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="SĐT*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Email*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Địa chỉ (Tên đường, Số nhà)*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemArea} multiline={true} numberOfLines={3} placeholder="Ghi chú" />
                </View>
            </View>
            <View style={styles.boxInfoCusCartHeading}>
                <Text style={styles.boxInfoCusCartHeadingText}>Thông tin người nhận</Text>
                <Text style={styles.boxInfoCusCartHeadingNote}>(<Text style={styles.red}>*</Text>) Thông tin bắt buộc</Text>
            </View>
            <View style={styles.boxInfoCusCartItemCheckInfo}>
                <View style={styles.itemRadio}>
                    <Checkbox status={checkedInfo ? 'checked' : 'unchecked'} onPress={() => setCheckedInfo(!checkedInfo)} />
                </View>
                <Text>Lấy thông tin người mua</Text>
            </View>
            <View style={styles.boxInfoCusCartContent}>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Họ tên*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="SĐT*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <View style={styles.boxInfoCusCartItemHalf}>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.onePickerItem}
                            selectedValue={selectedProvince}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedProvince(itemValue)
                            }
                        >
                            <Picker.Item label="-- Chọn tỉnh/TP --" value="0" />
                            <Picker.Item label="Hà Nội" value="1" />
                            <Picker.Item label="Đà Nẵng" value="2" />
                            <Picker.Item label="Hải Phòng" value="3" />
                            <Picker.Item label="TP Hồ Chí Minh" value="4" />
                        </Picker>
                    </View>
                    <View style={styles.boxInfoCusCartItemHalf}>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.onePickerItem}
                            selectedValue={selectedDistrict}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedDistrict(itemValue)
                            }
                        >
                            <Picker.Item label="-- Chọn Quận/Huyện --" value="0" />
                            <Picker.Item label="Hà Nội" value="1" />
                            <Picker.Item label="Đà Nẵng" value="2" />
                            <Picker.Item label="Hải Phòng" value="3" />
                            <Picker.Item label="TP Hồ Chí Minh" value="4" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Địa chỉ (tên đường, số nhà)*" />
                </View>
            </View>
        </View>
    )
}

const SelecPayOption = () => {
    const [checkedPayment, setCheckedPayment] = React.useState('pay1');
    const listPayment = [
        {
            id: 1,
            name: 'COD - Thanh toán khi nhận hàng',
            description: '',
            image: require('../assets/images/pay_1.png'),
        },
        {
            id: 2,
            name: 'Thanh toán trực tuyến (bằng thẻ ATM, VISA, MASTER) ',
            description: '',
            image: require('../assets/images/pay_2.png'),
        },
        {
            id: 3,
            name: 'Trả góp qua Alepay (Ngân Lượng)',
            description: '',
            image: require('../assets/images/pay_2.png'),
        },
    ]
    return (
        <View style={styles.boxPayment}>
            <View style={styles.boxInfoCusCartTitleAll}>
                <Text style={styles.boxInfoCusCartTitleAllNum}>1</Text>
                <Text style={styles.boxInfoCusCartTitle}>Phương thức thanh toán</Text>
            </View>
            <Text style={styles.boxPaymentTitle}>Chọn phương thức thanh toán</Text>
            <View style={styles.boxPaymentList}>
                {
                    listPayment.map(item => {
                        let idpay = 'pay' + item.id;
                        return (
                            <View style={styles.paymentItem} key={item.id}>
                                <View style={styles.paymentItemImage}>
                                    <Image style={styles.paymentItemImageCt} source={item.image} />
                                </View>
                                <Text style={styles.paymentItemText}>{item.name}</Text>
                                <View style={styles.paymentItemRadio}>
                                    <RadioButton color={'#243a76'} value={idpay} status={checkedPayment === idpay ? 'checked' : 'unchecked'} onPress={() => setCheckedPayment(idpay)} />
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const Bill = () => {
    const [checkedBill, setCheckedBill] = React.useState(false);
    return (
        <View style={styles.boxBill}>
            <View style={styles.boxInfoCusCartItemCheckInfo}>
                <View style={styles.itemRadio}>
                    <Checkbox status={checkedBill ? 'checked' : 'unchecked'} onPress={() => setCheckedBill(!checkedBill)} />
                </View>
                <Text style={styles.boxBillText}>Yêu cầu xuất hóa đơn GTGT cho đơn hàng này</Text>
            </View>
            <View style={checkedBill ? [styles.boxBillList, styles.active] : styles.boxBillList}>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Tên công ty*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Địa chỉ*" />
                </View>
                <View style={styles.boxInfoCusCartItem}>
                    <TextInput style={styles.boxInfoCusCartItemInput} placeholder="Mã số thuế*" />
                </View>
            </View>
        </View>
    )
}



const TotalCart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxTotalCart}>
            <View style={styles.boxTotalCartXu}>
                <Image style={styles.boxTotalCartXuImg} source={require('../assets/images/icon_xu.png')} />
                <TouchableOpacity style={styles.boxTotalCartXuButton}>
                    <Text style={styles.boxTotalCartButtonTex}>Bạn chưa có Naga Xu </Text>
                    <FontAwesome style={styles.boxTotalCartButtonIcon} name="question-circle" />
                </TouchableOpacity>
            </View>
            <View style={styles.boxTotalCartItem}>
                <Text style={styles.boxTotalCartItemLeft}>Tổng cộng</Text>
                <Text style={styles.boxTotalCartItemRight}>5.000.000đ</Text>
            </View>
            <View style={styles.boxTotalCartItem}>
                <Text style={styles.boxTotalCartItemLeft}>Giảm giá Voucher</Text>
                <Text style={styles.boxTotalCartItemRight}>00đ</Text>
            </View>
            <View style={styles.boxTotalCartItem}>
                <Text style={styles.boxTotalCartItemLeft}>Phí giao hàng</Text>
                <Text style={styles.boxTotalCartItemRight}>00đ</Text>
            </View>
            <View style={styles.boxTotalCartItem}>
                <Text style={[styles.boxTotalCartItemLeft, styles.TextBold]}>Thanh toán</Text>
                <Text style={[styles.boxTotalCartItemRight, styles.TextBold, styles.red]}>5.000.000đ</Text>
            </View>
            <View style={styles.boxTotalCartItem}>
                <Text style={[styles.boxTotalCartItemCoin, styles.TextBold]}>Nhận thêm 500 xu</Text>
            </View>
            <View style={styles.boxTotalCartItemAll}>
                <Text style={styles.boxTotalCartItemAllText}>Tổng cộng:</Text>
                <Text style={[styles.boxTotalCartItemAllPrice, styles.TextBold]}>5.000.000 đ</Text>
            </View>
            <View style={styles.boxTotalCartSubmit}>
            <TouchableOpacity onPress={() => navigation.navigate('CartPayInstallment')} style={styles.boxTotalCartSubmitButtonTragop}>
                    <Text style={styles.boxTotalCartSubmitTextTragop}>Mua trả góp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxTotalCartSubmitButton}>
                    <Text style={styles.boxTotalCartSubmitText}>Đặt hàng</Text>
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
        backgroundColor: '#fff',
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
    boxCustommerInfoCart: {
        width: winWidth,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    green: {
        color: '#008445',
    },
    boxInfoCusCart: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        display: 'none',
    },
    boxInfoCusCartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#008445',
    },
    boxInfoCusCartTitleAll: {
        width: '100%',
        marginBottom: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ababab',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    boxInfoCusCartTitleAllNum: {
        width: 30,
        height: 30,
        textAlign: 'center',
        lineHeight: 30,
        borderColor: '#008445',
        borderWidth: 1,
        borderRadius: 15,
        marginRight: 10,
    },
    boxInfoCusCartHeading: {
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxInfoCusCartHeadingText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    boxInfoCusCartHeadingNote: {},
    boxInfoCusCartItemSex: {
        padding: 10,
        marginBottom: 10,
        width: '100%',
        flexDirection: 'row',
    },
    boxInfoCusCartItemSexIt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    itemRadio: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginRight: 5,
    },
    boxInfoCusCartContent: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    boxInfoCusCartItem: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxInfoCusCartItemInput: {
        width: '100%',
        height: 42,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    red: {
        color: '#d9282f'
    },
    boxInfoCusCartItemHalf: {
        width: winWidth / 2 - 15,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    boxInfoCusCartItemArea: {
        width: '100%',
        height: 85,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    boxInfoCusCartItemCheckInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    picker: {
        height: 42,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    onePickerItem: {
        height: 46,
        color: '#222',
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#fff',
    },
    active: {
        display: 'flex',
    },
    noBg: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    boxPayment: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    boxPaymentHead: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#008445',
        lineHeight: 40,
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },
    boxPaymentTitle: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    boxPaymentList: {},
    paymentItem: {
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paymentItemImage: {
        width: 31,
        height: 31,
        borderRadius: 15.5,
        overflow: 'hidden',
        marginRight: 10,
    },
    paymentItemImageCt: {
        width: 31,
        height: 31,
    },
    paymentItemText: {
        width: winWidth - 130,
    },
    paymentItemRadio: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginLeft: 10,
    },
    boxBill: {
        width: '100%',
        paddingVertical: 10,
        marginBottom: 20,
    },
    boxBillList: {
        display: 'none',
    },
    boxBillText: {
        fontSize: 12,
    },
    boxCartItem: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    boxCartItemBuyOther: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxCartItemBuyOtherIcon: {
        fontSize: 15,
        color: '#d9282f',
        marginRight: 5,
    },
    boxCartItemBuyOtherIconText: {
        fontSize: 15,
        color: '#d9282f',
        marginRight: 5,
        textTransform: 'uppercase'
    },
    boxVoucher: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    boxVoucherForm: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    boxVoucherFormInput: {
        width: winWidth - 98,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        overflow: 'hidden',
    },
    boxVoucherFormButton: {
        width: 78,
        height: 40,
        backgroundColor: '#6c757d',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxVoucherFormButtonText: {
        color: '#fff',
    },
    boxVoucherShowPop: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    boxVoucherShowPopButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },
    boxVoucherShowPopButtonCt: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxVoucherShowPopImg: {
        marginRight: 10,
    },
    boxVoucherShowPopText: {
        color: '#d9282f',
    },
    boxVoucherShowPopIcon: {},
    boxXuShowPopButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },
    boxXuShowPopButtonImg: {
        marginRight: 10,
    },
    boxXuShowPopButtonText: {
        marginRight: 10,
    },
    boxXuShowPopButtonIcon: {},
    boxVoucherNote: {
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
    boxVoucherNoteText: {
        marginBottom: 10,
        fontStyle: 'italic',
    },
    TextBold: {
        fontWeight: 'bold',
    },
    boxCloseModalVoucher: {
        width: winWidth,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    boxCloseModalVoucherPress: {
        width: '100%',
    },
    contentPopVoucher: {
        width: winWidth,
        padding: 10,
        height: winHeight,
        paddingTop: 50,
    },
    contentPopVoucherHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    contentPopVoucherBack: {
        width: 50,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentPopVoucherBackIcon: {
        fontSize: 24,
        height: 24,
    },
    contentPopVoucherTitle: {
        width: winWidth - 70,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        fontWeight: '700'
    },
    contentPopVoucherForm: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentPopVoucherFormText: {
        width: 78,
    },
    contentPopVoucherFormInput: {
        width: winWidth - 205,
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ababab'
    },
    contentPopVoucherFormButton: {
        width: 72,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#d9282f',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentPopVoucherFormButtonText: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold'
    },
    contentPopVoucherPop: {
        width: '100%',
        height: winHeight - 350,
    },
    contentPopVoucherPopTitle: {
        marginBottom: 10,
    },
    contentPopVoucherPopList: {
        width: '100%',
        height: winHeight - 370,
    },
    contentPopVoucherPopItem: {
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#999',
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        paddingRight: 8,
    },
    contentPopVoucherPopItemLeft: {
        width: 130,
        padding: 10,
        backgroundColor: '#999',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contentPopVoucherPopItemHasUse: {
        borderColor: '#008445',
    },
    contentPopVoucherPopItemLeftHasUse: {
        backgroundColor: '#008445'
    },
    contentPopVoucherPopItemLeftSt: {
        color: '#fff',
        marginBottom: 5,
        fontSize: 15,
    },
    contentPopVoucherPopItemLeftNd: {
        color: '#fff',
        marginBottom: 5,
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    contentPopVoucherPopItemCenter: {

    },
    contentPopVoucherPopItemCenterText: {
        width: winWidth - 194,
        paddingHorizontal: 10,
    },
    contentPopVoucherPopItemCheck: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#999',
    },
    contentPopVoucherPopBot: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentPopVoucherPopBotBack: {
        width: winWidth / 2 - 15,
        backgroundColor: '#ebebeb',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
    },
    contentPopVoucherPopBotBackText: {
        fontSize: 18,
        textTransform: 'uppercase',
    },
    contentPopVoucherPopBotOk: {
        width: winWidth / 2 - 15,
        backgroundColor: '#d9282f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
    },
    contentPopVoucherPopBotOkText: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
    },
    boxTotalCart: {
    },
    boxTotalCartXu: {
        width: '100%',
        paddingVertical: 15,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxTotalCartXuImg: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    boxTotalCartXuButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxTotalCartButtonTex: {},
    boxTotalCartButtonIcon: {},
    boxTotalCartItem: {
        width: '100%',
        paddingVertical: 15,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxTotalCartItemLeft: {
        fontSize: 14,
        textTransform: 'uppercase',
    },
    boxTotalCartItemRight: {
        fontSize: 14,
    },
    boxTotalCartItemCoin: {
        color: '#FE9923',
        textAlign: 'right',
        width: '100%'
    },
    boxTotalCartSubmit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxTotalCartSubmitButton: {
        width: winWidth / 2 - 15,
        height: 40,
        backgroundColor: '#d9282f',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    boxTotalCartSubmitText: {
        fontSize: 15,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    boxTotalCartItemAll: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
    boxTotalCartItemAllText: {
        marginRight: 5,
    },
    boxTotalCartItemAllPrice: {
        fontSize: 16,
        color: '#D8262F',
    },
    boxTotalCartSubmitButtonTragop: {
        width: winWidth / 2 - 15,
        height: 40,
        backgroundColor: '#FE9923',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    boxTotalCartSubmitTextTragop: {
        fontSize: 15,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
