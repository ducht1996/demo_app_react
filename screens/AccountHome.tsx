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

export default function AccountHome() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderAccountHome />
                
                <ListContentAccount />

            </ScrollView>
        </SafeAreaView>
    )
}

const HeaderAccountHome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerAccountHome}>
            <Image style={styles.headerAccountHomeImg} source={require('../assets/images/bg-account.png')} />
            <View style={styles.headerAccountHomeCt}>
                <View style={styles.headerAccountHomeCtLeft}>
                    <Image style={styles.headerAccountHomeCtCusImg} source={require('../assets/images/cus-img-account.png')} />
                    <View style={styles.headerAccountHomeCtCusInfo}>
                        <Text style={styles.headerAccountHomeCtCusName}>Nguyễn Quỳnh</Text>
                        <Text style={styles.headerAccountHomeCtCusXu}>Xu 10</Text>
                    </View>
                </View>
                <View style={styles.headerAccountHomeCtRight}>
                    <TouchableOpacity onPress={() => navigation.navigate('SettingAccount')} style={styles.headerAccountHomeCtSetting}>
                        <Ionicons style={styles.headerAccountHomeCtSettingIcon} name="settings-outline" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const ListContentAccount = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxListItemAcc}>
            <View style={styles.boxListItemAccList}>
                <View style={[styles.boxListItemAccItem, styles.borderBot]}>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountOrderList')} style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon1.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Đơn hàng của tôi</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Text style={styles.boxListItemAccItemRightText}>Xem tất cả</Text>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxListItemAccItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountProductBought')} style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon2.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Sản phẩm bạn đã mua</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxListItemAccList}>
                <View style={[styles.boxListItemAccItem, styles.borderBot]}>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountProductViewHistory')} style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon3.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Sản phẩm bạn đã xem</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxListItemAccItem, styles.borderBot]}>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountProductFavorite')} style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon4.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Sản phẩm yêu thích</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxListItemAccItem, styles.borderBot]}>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountProductSave')} style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon5.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Sản phẩm mua sau</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxListItemAccItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('AccountCoin')} style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon6.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Quản lý Xu của tôi</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxListItemAccList}>
                <View style={[styles.boxListItemAccItem, styles.borderBot]}>
                    <TouchableOpacity onPress={() => navigation.navigate('CustomerInfo')} style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon7.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Tài khoản</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxListItemAccItem}>
                    <TouchableOpacity style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon8.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Trung tậm trợ giúp</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const CustommerInfo = () => {
    return (
        <View style={styles.custommerInfo}>
            <Text style={styles.custommerInfoItemHeader}>Thông tin tài khoản</Text>
            <Text style={styles.custommerInfoItem}>Họ tên: Hurasoft Test</Text>
            <Text style={styles.custommerInfoItem}>Giới tính: Nữ</Text>
            <Text style={styles.custommerInfoItem}>Email: test@mail.com</Text>
            <Text style={styles.custommerInfoItem}>Địa chỉ: 30 Nguyên Hồng - Láng Hạ - Đống Đa - HN</Text>
            <Text style={styles.custommerInfoItem}>Tỉnh/Thành phố: Hà Nội</Text>
            <Text style={styles.custommerInfoItem}>Số điện thoại: 0912345678</Text>
            <TouchableOpacity>
                <Text style={styles.custommerInfoButtonText}>Chỉnh sửa thông tin cá nhân</Text>
            </TouchableOpacity>
        </View>
    )
}

const CustommerInfoChange = () => {
    const [selectedProvince, setSelectedProvince] = useState();
    const [checked, setChecked] = React.useState('male');
    return (
        <View style={styles.boxCustommerInfoChange}>
            <Text style={styles.titleBoxInAccount}>Cập nhật thông tin cá nhân</Text>
            <View style={styles.boxCustommerInfoChangeList}>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Họ tên</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Giới tính</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <View style={styles.registerItemSex}>
                            <View style={styles.registerItemSexItem}>
                                <Text style={styles.registerItemSexText}>Nam</Text>
                                <View style={styles.registerItemSexRadio}>
                                    <RadioButton color={'#243a76'} value={'male'} status={checked === 'male' ? 'checked' : 'unchecked'} onPress={() => setChecked('male')} />
                                </View>
                            </View>
                            <View style={styles.registerItemSexItem}>
                                <Text style={styles.registerItemSexText}>Nữ</Text>
                                <View style={styles.registerItemSexRadio}>
                                    <RadioButton color={'#243a76'} value={'female'} status={checked === 'female' ? 'checked' : 'unchecked'} onPress={() => setChecked('female')} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Địa chỉ email</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Địa chỉ nhà</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Tỉnh/TP</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.onePickerItem}
                            selectedValue={selectedProvince}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedProvince(itemValue)
                            }
                        >
                            <Picker.Item label="Hà Nội" value="1" />
                            <Picker.Item label="Đà Nẵng" value="2" />
                            <Picker.Item label="Hải Phòng" value="3" />
                            <Picker.Item label="TP Hồ Chí Minh" value="4" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Điện thoại cố định</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Điện thoại  di động</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <TouchableOpacity style={styles.boxCustommerInfoChangeSubmit}>
                        <Text style={styles.boxCustommerInfoChangeSubmitText}>Thay đổi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

function formatCurrency(price: string | number) {
    let priceConvert = parseFloat(`${price}`).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1.").toString();
    let len = priceConvert.length;
    return priceConvert.substring(0, len - 3);
}

const ChangePassword = () => {
    return (
        <View>
            <Text style={styles.titleBoxInAccount}>Thay đổi mật khẩu</Text>
            <View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Mật khẩu hiện tại</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Mật khẩu mới</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <Text style={styles.custommerInfoChangeItemText}>Nhập lại mật khẩu mới</Text>
                    <View style={styles.custommerInfoChangeItemContent}>
                        <TextInput style={styles.custommerInfoChangeItemInput} />
                    </View>
                </View>
                <View style={styles.custommerInfoChangeItem}>
                    <TouchableOpacity style={styles.boxCustommerInfoChangeSubmit}>
                        <Text style={styles.boxCustommerInfoChangeSubmitText}>Thay đổi</Text>
                    </TouchableOpacity>
                </View>
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
    headerAccountHome: {
        width: winWidth,
        position: 'relative',
    },
    headerAccountHomeImg: {
        width: '100%',
        height: 122,
    },
    headerAccountHomeCt: {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingHorizontal: 10,
    },
    headerAccountHomeCtLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerAccountHomeCtCusImg: {
        width: 56,
        height: 56,
        marginRight: 10,
        borderRadius: 28,
        overflow: 'hidden'
    },
    headerAccountHomeCtCusInfo: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerAccountHomeCtCusName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 5,
    },
    headerAccountHomeCtCusXu: {
        fontSize: 13,
        fontWeight: '300',
        color: '#fff'
    },
    headerAccountHomeCtRight: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerAccountHomeCtSetting: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerAccountHomeCtSettingIcon: {
        fontSize: 18,
    },
    boxListItemAcc: {
        width: winWidth,
        backgroundColor: '#f2f2f2',
    },
    boxListItemAccList: {
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    borderBot: {
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
    },
    boxListItemAccItem: {
        width: '100%',
        paddingHorizontal: 10,
    },
    boxListItemAccBt: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
    },
    boxListItemAccItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxListItemAccItemImg: {
        width: 20,
        marginRight: 10,
    },
    boxListItemAccItemLeftText: {
        fontWeight: '500',
    },
    boxListItemAccItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxListItemAccItemRightText: {
        marginRight: 10,
    },
    boxListItemAccItemIcon: {
        fontSize: 24,
        color: '#777'
    },
    accountBox: {
        marginBottom: 20,
        width: winWidth,
        paddingHorizontal: 10,
    },
    accountBoxHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    accountBoxHeaderIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#008445',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    accountBoxHeaderIconFont: {
        fontSize: 40,
        color: '#fff',
        lineHeight: 40,
    },
    accountBoxHeaderInfo: {
        width: winWidthP10 - 80,
    },
    accountBoxHeaderInfoText: {
        marginBottom: 10,
    },
    accountBoxHeaderInfoName: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    custommerInfo: {
    },
    custommerInfoItemHeader: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
    custommerInfoItem: {
        marginBottom: 10,
    },
    custommerInfoButtonText: {
        color: '#ed1b24'
    },
    boxCustommerInfoChange: {},
    boxCustommerInfoChangeList: {
        padding: 10,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 5,
    },
    titleBoxInAccount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    custommerInfoChangeItem: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    custommerInfoChangeItemText: {
        width: 148,
    },
    custommerInfoChangeItemContent: {
        width: winWidthP10 - 170,
    },
    custommerInfoChangeItemInput: {
        width: '100%',
        height: 36,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        paddingHorizontal: 10,
    },
    registerItemSex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerItemSexItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    registerItemSexText: {
        marginRight: 5,
    },
    registerItemSexRadio: {
        width: 36,
        height: 36,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 18,
    },
    picker: {
        height: 46,
        width: '100%',
    },
    onePickerItem: {
        height: 46,
        color: '#222',
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
    },
    boxCustommerInfoChangeSubmit: {
        width: 150,
        height: 36,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    boxCustommerInfoChangeSubmitText: {
        color: '#fff'
    },
})