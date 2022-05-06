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

export default function Cart() {
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

            <CartItem />

            <VoucherList />

            <TotalPriceCatStepSt />

            <Voucher />
        </View>
    )
}

const HeaderCart = () => {
    return (
        <View style={styles.headerCart}>
            <View style={styles.headerCartLeft}>
                <Text style={styles.headerCartTextSt}>Giỏ hàng</Text>
                <Text style={styles.headerCartCount}>(0)</Text>
            </View>
            <View style={styles.headerCartRight}>
                <TouchableOpacity style={styles.headerCartDelete}>
                    <FontAwesome style={styles.headerCartDeleteIcon} name="trash-o" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CartItem = () => {
    const [selectCartItem, setSelectedCartItem] = React.useState(false);
    return (
        <View style={styles.boxCartItem}>
            <View style={styles.boxCartItemContent}>
                <View style={styles.boxCartItemList}>
                    <View style={styles.boxCartItemItem}>
                        <View style={styles.boxCartItemItemCheck}>
                            <Checkbox status={selectCartItem ? 'checked' : 'unchecked'} onPress={() => setSelectedCartItem(!selectCartItem)} />
                        </View>
                        <View style={styles.boxCartItemItemImage}>
                            <TouchableOpacity>
                                <View style={styles.boxCartItemItemImageCt}>
                                    <Image style={styles.boxCartItemItemImageCtImg} source={require('../assets/images/product.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxCartItemItemContent}>
                            <TouchableOpacity>
                                <Text style={styles.boxCartItemItemImageName}>Khẩu trang vải kháng khuẩn Nagakawa 2 lớp - Công nghệ Nhật Bản Hộp 10 chiếc  (Hộp 10 chiếc - L)</Text>
                            </TouchableOpacity>
                            <View style={styles.boxCartItemItemPriceAll}>
                                <View style={styles.boxCartItemItemPriceAllLeft}>
                                    <Text style={styles.boxCartItemItemPrice}>121.000.000 đ</Text>
                                    <View style={styles.selecCountContent}>
                                        <TouchableOpacity style={styles.selecCountButton}>
                                            <Text style={styles.selecCountButtonText}>+</Text>
                                        </TouchableOpacity>
                                        <TextInput style={styles.selecCountInput} value="1" />
                                        <TouchableOpacity style={styles.selecCountButton}>
                                            <Text style={styles.selecCountButtonText}>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={styles.boxCartItemItemImageBuyAfter}>Để dành mua sau</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.boxCartItemItem}>
                        <View style={styles.boxCartItemItemCheck}>
                            <Checkbox status={selectCartItem ? 'checked' : 'unchecked'} onPress={() => setSelectedCartItem(!selectCartItem)} />
                        </View>
                        <View style={styles.boxCartItemItemImage}>
                            <TouchableOpacity>
                                <View style={styles.boxCartItemItemImageCt}>
                                    <Image style={styles.boxCartItemItemImageCtImg} source={require('../assets/images/product.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxCartItemItemContent}>
                            <TouchableOpacity>
                                <Text style={styles.boxCartItemItemImageName}>Khẩu trang vải kháng khuẩn Nagakawa 2 lớp - Công nghệ Nhật Bản Hộp 10 chiếc  (Hộp 10 chiếc - L)</Text>
                            </TouchableOpacity>
                            <View style={styles.boxCartItemItemPriceAll}>
                                <View style={styles.boxCartItemItemPriceAllLeft}>
                                    <Text style={styles.boxCartItemItemPrice}>121.000.000 đ</Text>
                                    <View style={styles.selecCountContent}>
                                        <TouchableOpacity style={styles.selecCountButton}>
                                            <Text style={styles.selecCountButtonText}>+</Text>
                                        </TouchableOpacity>
                                        <TextInput style={styles.selecCountInput} value="1" />
                                        <TouchableOpacity style={styles.selecCountButton}>
                                            <Text style={styles.selecCountButtonText}>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={styles.boxCartItemItemImageBuyAfter}>Để dành mua sau</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const VoucherList = () => {
    return (
        <View>
            <View style={styles.boxVoucherList}>
                <View style={styles.boxVoucherListItem}>
                    <Image style={styles.boxVoucherListItemImg} source={require('../assets/images/img-cart-voucher.png')} />
                    <Text style={styles.boxVoucherListItemText}>Voucher 1.000.000đ dành riêng cho điều hòa NS-C09R1M05</Text>
                </View>
                <View style={styles.boxVoucherListItem}>
                    <Image style={styles.boxVoucherListItemImg} source={require('../assets/images/icon_xu.png')} />
                    <Text style={styles.boxVoucherListItemText}>Đăng ký tài khoản nhận ngay 500 NagaXu = 50.000đ</Text>
                </View>
                <View style={styles.boxVoucherListItem}>
                    <Image style={styles.boxVoucherListItemImg} source={require('../assets/images/product.png')} />
                    <Text style={styles.boxVoucherListItemText}>Bộ 3 nồi inox 4 đáy Nagakawa NAG1306 (16cm, 20cm, 24cm) - Quai mạ vàng - Dùng trên mọi loại bếp- Hàng Chính Hãng</Text>
                </View>
            </View>
            <View style={styles.boxVoucherNote}>
                <Text style={styles.boxVoucherNoteText}><Text style={styles.TextBold}>Lưu ý:</Text> Mã giảm giá không áp dụng kèm với chương trình trả góp 0%, sản phẩm Flash sale.</Text>
                <Text style={styles.boxVoucherNoteText}>- Các mã giảm giá được áp dụng đồng thời nếu đủ điều kiện.</Text>
                <Text style={styles.boxVoucherNoteText}>- Tài khoản đăng ký chưa được xác thực dùng NagaXu hệ thống sẽ tự động hủy đơn hàng</Text>
            </View>
        </View>
    )
}

const TotalPriceCatStepSt = () => {
    const [selecAllItemCart, setSelecAllItemCart] = useState(false);
    const navigation = useNavigation();
    return(
        <View style={styles.stepStTotal}>
            <View style={styles.stepStTotalSelect}>
                <View style={styles.stepStTotalSetectItem}>
                    <Checkbox color={'#00a456'} status={selecAllItemCart ? 'checked' : 'unchecked'} onPress={() => setSelecAllItemCart(!selecAllItemCart)} />
                </View>
                <Text style={styles.stepStTotalSelectText}>Tất cả</Text>
            </View>
            <View style={styles.stepStTotalPrice}>
                <View style={styles.stepStTotalPriceCt}>
                    <Text style={styles.stepStTotalPriceText}>Tổng cộng:</Text>
                    <Text style={styles.stepStTotalPriceNum}>10.500.000đ</Text>
                </View>
                <View style={styles.stepStTotalShip}>
                    <Text style={styles.stepStTotalShipText}>Phí vận chuyển:</Text>
                    <Text style={styles.stepStTotalShupNum}>0đ</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CartStep')} style={styles.stepStTotalGoStepNd}>
                <Text style={styles.stepStTotalGoStepNdText}>Thanh toán</Text>
            </TouchableOpacity>
        </View>
    )
}

const Voucher = () => {
    const [openPopVoucher, setOpenPopVoucher] = useState(false);
    const [checkedVoucher, setCheckedVoucher,] = useState('');
    return (
        <View style={styles.boxVoucher}>
            <View style={styles.boxVoucherShowPop}>
                <TouchableOpacity style={styles.boxVoucherShowPopButton} onPress={() => setOpenPopVoucher(true)}>
                    <View style={styles.boxVoucherShowPopButtonCt}>
                        <Image style={styles.boxVoucherShowPopImg} source={require('../assets/images/img-cart-voucher.png')} />
                        <Text style={styles.boxVoucherShowPopText}>Chọn mã voucher</Text>
                    </View>
                    <FontAwesome  style={styles.boxVoucherShowPopIcon} name="angle-right" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxXuShowPopButton}>
                    <Image style={styles.boxXuShowPopButtonImg} source={require('../assets/images/naga-xu.png')} />
                    <Text style={styles.boxXuShowPopButtonText}>Bạn chưa có naga xu</Text>
                    <Ionicons style={styles.boxXuShowPopButtonIcon} name="help-circle-outline" />
                </TouchableOpacity>
            </View>
            <Modal visible={openPopVoucher} animationType="slide" transparent={true} onRequestClose={() => { setOpenPopVoucher(!openPopVoucher); }}>
                <View style={styles.boxCloseModalVoucher}>
                    <TouchableOpacity style={styles.boxCloseModalVoucherPress} onPress={() => setOpenPopVoucher(false)}>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentPopVoucher}>
                    <View style={styles.contentPopVoucherHeader}>
                        <TouchableOpacity onPress={() => setOpenPopVoucher(false)} style={styles.contentPopVoucherBack}>
                            <FontAwesome style={styles.contentPopVoucherBackIcon} name="angle-left" />
                        </TouchableOpacity>
                        <Text style={styles.contentPopVoucherTitle}>Chọn Nagakawa Voucher</Text>
                    </View>
                    <View style={styles.contentPopVoucherForm}>
                        <Text style={styles.contentPopVoucherFormText}>Mã Voucher</Text>
                        <TextInput style={styles.contentPopVoucherFormInput} />
                        <TouchableOpacity style={styles.contentPopVoucherFormButton}>
                            <Text style={styles.contentPopVoucherFormButtonText}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentPopVoucherPop}>
                        <Text style={styles.contentPopVoucherPopTitle}>Voucher có thể áp dụng</Text>
                        <View style={styles.contentPopVoucherPopList}>
                            <ScrollView>
                                <View style={[styles.contentPopVoucherPopItem, styles.contentPopVoucherPopItemHasUse]}>
                                    <View style={[styles.contentPopVoucherPopItemLeft, styles.contentPopVoucherPopItemLeftHasUse]}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc1' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc1')} />
                                    </View>
                                </View>
                                <View style={styles.contentPopVoucherPopItem}>
                                    <View style={styles.contentPopVoucherPopItemLeft}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc2' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc2')} />
                                    </View>
                                </View>
                                <View style={styles.contentPopVoucherPopItem}>
                                    <View style={styles.contentPopVoucherPopItemLeft}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc3' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc3')} />
                                    </View>
                                </View>
                                <View style={styles.contentPopVoucherPopItem}>
                                    <View style={styles.contentPopVoucherPopItemLeft}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc4' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc4')} />
                                    </View>
                                </View>
                                <View style={styles.contentPopVoucherPopItem}>
                                    <View style={styles.contentPopVoucherPopItemLeft}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc5' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc5')} />
                                    </View>
                                </View>
                                <View style={styles.contentPopVoucherPopItem}>
                                    <View style={styles.contentPopVoucherPopItemLeft}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc5' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc5')} />
                                    </View>
                                </View>
                                <View style={styles.contentPopVoucherPopItem}>
                                    <View style={styles.contentPopVoucherPopItemLeft}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc5' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc5')} />
                                    </View>
                                </View>
                                <View style={styles.contentPopVoucherPopItem}>
                                    <View style={styles.contentPopVoucherPopItemLeft}>
                                        <Text style={styles.contentPopVoucherPopItemLeftSt}>Nhập</Text>
                                        <Text style={styles.contentPopVoucherPopItemLeftNd}>NAG9CVFGZ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCenter}>
                                        <Text style={styles.contentPopVoucherPopItemCenterText}>Mã giảm giá trị giá 150.000đ áp dụng cho Đơn hàng từ 4.000.000đ</Text>
                                    </View>
                                    <View style={styles.contentPopVoucherPopItemCheck}>
                                        <Checkbox color={'#00a456'} status={checkedVoucher === 'vc5' ? 'checked' : 'unchecked'} onPress={() => setCheckedVoucher('vc5')} />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.contentPopVoucherPopBot}>
                        <View style={styles.countVoucherSelect}>
                            <Text>1 Voucher đã được chọn.</Text>
                            <Text style={styles.red}>Đã chọn mã NAGAA200</Text>
                        </View>
                        <TouchableOpacity style={styles.contentPopVoucherPopBotOk} onPress={() => setOpenPopVoucher(false)}>
                            <Text style={styles.contentPopVoucherPopBotOkText}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    headerCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerCartLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerCartTextSt: {
        fontSize: 17,
        fontWeight: '700',
    },
    headerCartCount: {},
    headerCartRight: {},
    headerCartDelete: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 3,
    },
    headerCartDeleteIcon: {
        fontSize: 16,
        color: '#ABABAB'
    },
    boxCustommerInfoCart: {
        width: winWidth,
        backgroundColor: '#fff',
    },
    boxCartItemContent: {
        width: '100%',
    },
    boxCartItemList: {},
    boxCartItemItem: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
    },
    boxCartItemItemCheck: {
        width: 36,
        height: 36,
        borderColor: '#777',
        borderWidth: 1,
        marginRight: 10,
    },
    boxCartItemItemImage: {
        width: 90,
    },
    boxCartItemItemImageCt: {
        width: 90,
        height: 90,
        position: 'relative',
        marginBottom: 10,
    },
    boxCartItemItemImageCtImg: {
        width: 90,
        height: 90,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    boxCartItemItemDelete: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxCartItemItemDeleteIcon: {
        fontSize: 18,
        color: '#999',
    },
    boxCartItemItemDeleteText: {
        fontSize: 18,
        color: '#999',
    },
    boxCartItemItemContent: {
        width: winWidth - 156,
        paddingHorizontal: 10,
    },
    boxCartItemItemImageName: {
        marginBottom: 10,
        fontWeight: '500',
    },
    boxCartItemItemImageBuyAfter: {
        color: '#00a456',
    },
    boxCartItemItemPriceAll: {
        width: '100%',
    },
    boxCartItemItemPriceAllLeft: {
        width: '100%'
    },
    boxCartItemItemPrice: {
        fontSize: 16,
        fontWeight: '500',
        color: '#d9282f',
        marginBottom: 10,
        textAlign: 'left',
    },
    selecCountContent: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
    },
    selecCountButton: {
        width: 30,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFDFDF',
    },
    selecCountButtonText: {
        fontSize: 24,
    },
    selecCountInput: {
        width: 50,
        height: 30,
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        fontSize: 22,
    },
    boxVoucherList: {
        padding: 10,
    },
    boxVoucherListItem: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    boxVoucherListItemImg: {
        width: 26,
        maxHeight: 26,
        marginRight: 10,
    },
    boxVoucherListItemText: {
        width: winWidth - 56,
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
        height: winHeight - 260,
    },
    contentPopVoucherPopTitle: {
        marginBottom: 10,
    },
    contentPopVoucherPopList: {
        width: '100%',
        height: winHeight - 290,
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
        height: 90,
        paddingVertical: 10,
    },
    contentPopVoucherPopBotOk: {
        width: '100%',
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
        paddingHorizontal: 10,
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
    boxTotalCartSubmit: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
    boxTotalCartSubmitButton: {
        width: 155,
        height: 40,
        backgroundColor: '#d9282f',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    boxTotalCartSubmitIcon: {
        fontSize: 15,
        color: '#fff',
        marginRight: 10,
    },
    boxTotalCartSubmitText: {
        fontSize: 15,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    stepStTotal: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stepStTotalSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 78,
        flexWrap: 'wrap'
    },
    stepStTotalSetectItem: {
        width: 36,
        height: 35,
        borderColor: '#ababab',
        borderWidth: 1,
        marginRight: 10,
        marginBottom: 5,
    },
    stepStTotalSelectText: {
        fontSize: 13,
    },
    stepStTotalPrice: {},
    stepStTotalPriceCt: {
        flexDirection: 'row',
        alignItems: 'center',
        width: winWidth - 204,
        flexWrap: 'wrap'
    },
    stepStTotalPriceText: {
        marginRight: 10,
    },
    stepStTotalPriceNum: {
        fontSize: 16,
        color: '#D8262F',
        fontWeight: '700'
    },
    stepStTotalShip: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    stepStTotalShipText: {
        color: '#999'
    },
    stepStTotalShupNum: {
        color: '#D8262F',
    },
    stepStTotalGoStepNd: {
        width: 96,
        height: 36,
        borderRadius: 5,
        backgroundColor: '#D8262F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepStTotalGoStepNdText: {
        fontSize: 14,
        color: '#fff',
    },
    countVoucherSelect: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
});
