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

export default function CustomerInfo() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderAccountOrderList />

                <CustomerInfoContent />
            </ScrollView>
        </SafeAreaView>
    )
}

const HeaderAccountOrderList = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerAOL}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerAOLBack}>
                <FontAwesome style={styles.headerAOLBackIcon} name="angle-left" />
            </TouchableOpacity>
            <Text style={styles.headerAOLTitle}>Thông tin tài khoản</Text>
        </View>
    )
}

const CustomerInfoContent = () => {
    const [openModalCusInfoChange, setOpenModalCusInfoChange] = useState(false);
    return (
        <View style={styles.boxCustommer}>
            <View style={styles.boxCustommerItem}>
                <TouchableOpacity onPress={() => setOpenModalCusInfoChange(true)} style={styles.boxCustommerBt}>
                    <Text style={styles.boxCustommerTextLeft}>Họ tên</Text>
                    <View style={styles.boxCustommerCtRight}>
                        <Text style={styles.boxCustommerTextRight}>Nguyễn Quỳnh</Text>
                        <Ionicons style={styles.boxCustommerIcon} name="chevron-forward-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxCustommerItem}>
                <TouchableOpacity style={styles.boxCustommerBt}>
                    <Text style={styles.boxCustommerTextLeft}>Giới tính</Text>
                    <View style={styles.boxCustommerCtRight}>
                        <Text style={styles.boxCustommerTextRight}>Nữ</Text>
                        <Ionicons style={styles.boxCustommerIcon} name="chevron-forward-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxCustommerItem}>
                <TouchableOpacity style={styles.boxCustommerBt}>
                    <Text style={styles.boxCustommerTextLeft}>Địa chỉ email</Text>
                    <View style={styles.boxCustommerCtRight}>
                        <Text style={styles.boxCustommerTextRight}>quynhnt@gmail.com</Text>
                        <Ionicons style={styles.boxCustommerIcon} name="chevron-forward-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxCustommerItem}>
                <TouchableOpacity style={styles.boxCustommerBt}>
                    <Text style={styles.boxCustommerTextLeft}>Địa chỉ nhà</Text>
                    <View style={styles.boxCustommerCtRight}>
                        <Text style={styles.boxCustommerTextRight}>100 Láng Hạ, Đống Đa</Text>
                        <Ionicons style={styles.boxCustommerIcon} name="chevron-forward-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxCustommerItem}>
                <TouchableOpacity style={styles.boxCustommerBt}>
                    <Text style={styles.boxCustommerTextLeft}>Tỉnh / TP</Text>
                    <View style={styles.boxCustommerCtRight}>
                        <Text style={styles.boxCustommerTextRight}>Hà Nội</Text>
                        <Ionicons style={styles.boxCustommerIcon} name="chevron-forward-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxCustommerItem}>
                <TouchableOpacity style={styles.boxCustommerBt}>
                    <Text style={styles.boxCustommerTextLeft}>Điện thoại</Text>
                    <View style={styles.boxCustommerCtRight}>
                        <Text style={styles.boxCustommerTextRight}>0912345678</Text>
                        <Ionicons style={styles.boxCustommerIcon} name="chevron-forward-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.boxCustommerItem}>
                <TouchableOpacity style={styles.boxCustommerBt}>
                    <Text style={styles.boxCustommerTextLeft}>Thay đổi mật khẩu</Text>
                    <View style={styles.boxCustommerCtRight}>
                        <Text style={styles.boxCustommerTextRight}></Text>
                        <Ionicons style={styles.boxCustommerIcon} name="chevron-forward-outline" />
                    </View>
                </TouchableOpacity>
            </View>
            <Modal visible={openModalCusInfoChange} animationType="slide" transparent={true} onRequestClose={() => { setOpenModalCusInfoChange(!openModalCusInfoChange); }}>
                <View style={styles.cusInfoContent}>
                    <Pressable onPress={() => setOpenModalCusInfoChange(!openModalCusInfoChange)} style={styles.cusInfoContentBg}>
                    </Pressable>
                    <View style={styles.cusInfoContentct}>
                        <View style={styles.cusInfoContentctHead}>
                            <Text style={styles.cusInfoContentctHeadText}>Họ tên</Text>
                            <TouchableOpacity style={styles.cusInfoContentctHeadBt} onPress={() => setOpenModalCusInfoChange(!openModalCusInfoChange)}>
                                <Ionicons style={styles.cusInfoContentctHeadBtIcon} name="close-outline" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cusInfoContentctIp}>
                            <Text style={styles.cusInfoContentctIpText}>Họ tên</Text>
                            <TextInput style={styles.cusInfoContentctIpInput} value="Nguyễn quỳnh" />
                        </View>
                        <TouchableOpacity style={styles.cusInfoContentctBtSubmit}>
                            <Text style={styles.cusInfoContentctBtSubmitText}>Thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    boxCustommer: {
        width: winWidth,
        paddingTop: 10,
        backgroundColor: '#f2f2f2',
    },
    boxCustommerItem: {
        width: winWidth,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    boxCustommerBt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 40,
    },
    boxCustommerTextLeft: {},
    boxCustommerCtRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxCustommerTextRight: {
        color: '#777777',
        marginRight: 10,
    },
    boxCustommerIcon: {
        fontSize: 18,
        color: '#777'
    },
    cusInfoContent: {
        width: winWidth,
        height: winHeight,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    cusInfoContentBg: {
        width: winHeight,
        height: winHeight - 236,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    cusInfoContentct: {
        width: winWidth,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 236,
    },
    cusInfoContentctHead: {
        marginBottom: 30,
        position: 'relative',
        padding: 10,
    },
    cusInfoContentctHeadText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700'
    },
    cusInfoContentctHeadBt: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 2,
    },
    cusInfoContentctHeadBtIcon: {
        fontSize: 18,
    },
    cusInfoContentctIp: {
        borderBottomColor: '#ababab',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    cusInfoContentctIpText: {
        marginBottom: 10,
        fontWeight: '500',
        color: '#008445'
    },
    cusInfoContentctIpInput: {
        width: '100%',
        height: 40,
    },
    cusInfoContentctBtSubmit: {
        width: '100%',
        height: 40,
        backgroundColor: '#D8262F',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cusInfoContentctBtSubmitText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#fff'
    },
})