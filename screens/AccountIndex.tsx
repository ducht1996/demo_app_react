import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function AccountIndex() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <HeaderAccountIndex />

                <ListContentAccount />
            </ScrollView>
        </SafeAreaView>
    );
}

const HeaderAccountIndex = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerAccountIndex}>
            <Image style={styles.headerAccountIndexImg} source={require('../assets/images/bg-account.png')} />
            <Text style={styles.headerAccountIndexTitle}>Chào mừng đến với Nagakawa, Đăng nhập ngay!</Text>
            <View style={styles.headerAccountIndexBt}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.headerAccountIndexLogin}>
                    <Text style={styles.headerAccountIndexLoginText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.headerAccountIndexRegis}>
                    <Text style={styles.headerAccountIndexRegisText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ListContentAccount = () => {
    return (
        <View style={styles.boxListItemAcc}>
            <View style={styles.boxListItemAccList}>
                <View style={[styles.boxListItemAccItem, styles.borderBot]}>
                    <TouchableOpacity style={styles.boxListItemAccBt}>
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
                    <TouchableOpacity style={styles.boxListItemAccBt}>
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
                    <TouchableOpacity style={styles.boxListItemAccBt}>
                        <View style={styles.boxListItemAccItemLeft}>
                            <Image style={styles.boxListItemAccItemImg} source={require('../assets/images/acc-icon3.png')} />
                            <Text style={styles.boxListItemAccItemLeftText}>Sản phẩm bạn đã xem</Text>
                        </View>
                        <View style={styles.boxListItemAccItemRight}>
                            <Text style={styles.boxListItemAccItemRightText}>Xem tất cả</Text>
                            <Ionicons style={styles.boxListItemAccItemIcon} name="chevron-forward-outline" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxListItemAccItem, styles.borderBot]}>
                    <TouchableOpacity style={styles.boxListItemAccBt}>
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
                    <TouchableOpacity style={styles.boxListItemAccBt}>
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
                    <TouchableOpacity style={styles.boxListItemAccBt}>
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
                    <TouchableOpacity style={styles.boxListItemAccBt}>
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

const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerAccountIndex: {
        width: winWidth,
        position: 'relative',
    },
    headerAccountIndexImg: {
        width: '100%',
        height: 122,
    },
    headerAccountIndexTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        color: '#fff',
        position: 'absolute',
        top: 45,
        left: 0,
    },
    headerAccountIndexBt: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        bottom: 16,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headerAccountIndexLogin: {
        width: 84,
        height: 32,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    headerAccountIndexLoginText: {
        fontWeight: '700',
        color: '#D8262F'
    },
    headerAccountIndexRegis: {
        width: 84,
        height: 32,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },
    headerAccountIndexRegisText: {
        fontWeight: '700',
        color: '#fff'
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
});
