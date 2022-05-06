import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { Picker } from '@react-native-picker/picker';
import { RadioButton, Checkbox } from 'react-native-paper';


const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height

const HeaderHome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerBox}>
            <Image style={styles.headerBoxLogo} source={require('../../assets/images/logo.png')} />
            <View style={styles.headerBoxSearch}>
                <TouchableOpacity style={styles.headerBoxSearchButton} onPress={() => navigation.navigate('ProductSearch')}>
                    <LinearGradient style={styles.headerBoxSearchBg} colors={['#FF5136', '#D8262F']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Ionicons style={styles.headerBoxSearchIcon} name="search-outline" />
                    </LinearGradient>
                </TouchableOpacity>
                <TextInput style={styles.headerBoxSearchInput} placeholder="Nhập từ khóa tìm kiếm" />
            </View>
        </View>
    )
}

const HeaderCategory = () => {
    const [openSearch, setopenSearch] = useState(true);
    const navigation = useNavigation();
    return (
        <View style={styles.headerCategory}>
            <TouchableOpacity style={styles.headerCategoryBack} onPress={() => navigation.goBack()}>
                <Ionicons style={styles.headerCategoryBackIcon} name="chevron-back-outline" />
            </TouchableOpacity>
            <View style={styles.headerCategorySearch}>
                <TouchableOpacity style={styles.headerCategorySearchOpen} onPress={() => setopenSearch(!openSearch)}>
                    <Ionicons style={styles.headerCategorySearchOpenIcon} name="search-outline" />
                </TouchableOpacity>
                <View style={openSearch ? styles.headerCategorySearchMain : [styles.headerCategorySearchMain, styles.headerCategorySearchMainActive]}>
                    <TextInput style={styles.headerCategorySearchInput} placeholder="Nhập tên sản phẩm tìm kiếm..." />
                    <TouchableOpacity onPress={() => navigation.navigate('ProductSearch')} style={styles.headerCategorySearchSubmit}>
                        <Ionicons style={styles.headerCategorySearchSubmitIcon} name="search-outline" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.headerCategoryTitle}>Điện gia dụng</Text>
            <View style={styles.headerCategoryList}>
                <TouchableOpacity style={styles.headerCategoryListButton}>
                    <Image style={styles.headerCategoryListButtonImage} source={require('../../assets/images/list-item.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerCategoryCart}>
                <TouchableOpacity style={styles.headerCategoryCartButton} onPress={() => navigation.navigate('Cart')}>
                    <Ionicons style={styles.headerCategoryCartIcon} name="cart-outline" />
                    <Text style={styles.headerCategoryCartCount}>0</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const HeaderProductDetail = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxHeaderProductDetail}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.boxHeaderProductDetailGoBack}>
                <Ionicons style={styles.boxHeaderProductDetailIcon} name="chevron-back-outline" />
            </TouchableOpacity>
            <View style={styles.boxHeaderProductDetailRight}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.boxHeaderProductDetailHome}>
                    <Ionicons style={styles.boxHeaderProductDetailIcon} name="home-outline" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxHeaderProductDetailCart} onPress={() => navigation.navigate('Cart')}>
                    <Ionicons style={styles.boxHeaderProductDetailIcon} name="cart-outline" />
                    <Text style={styles.boxHeaderProductDetailCartCount}>0</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const HeaderAllOtherPage = (props : {headerTitle: string}) => {
    const {headerTitle} = props
    const navigation = useNavigation();
    return (
        <View style={styles.boxHeaderProductDetail}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.boxHeaderProductDetailGoBack}>
                <Ionicons style={styles.boxHeaderProductDetailIcon} name="chevron-back-outline" />
            </TouchableOpacity>
            <Text style={styles.boxHeaderProductDetailTitle}>{headerTitle}</Text>
            <View style={styles.boxHeaderProductDetailRight}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.boxHeaderProductDetailHome}>
                    <Ionicons style={styles.boxHeaderProductDetailIcon} name="home-outline" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxHeaderProductDetailCart} onPress={() => navigation.navigate('Cart')}>
                    <Ionicons style={styles.boxHeaderProductDetailIcon} name="cart-outline" />
                    <Text style={styles.boxHeaderProductDetailCartCount}>0</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const HeaderLogin = (props : {headerTitle: string}) => {
    const {headerTitle} = props
    const navigation = useNavigation();
    return (
        <View style={styles.boxHeaderProductDetail}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.boxHeaderProductDetailGoBack}>
                <Ionicons style={styles.boxHeaderProductDetailIcon} name="chevron-back-outline" />
            </TouchableOpacity>
            <Text style={styles.boxHeaderProductDetailTitle}>{headerTitle}</Text>
            <View style={styles.boxHeaderProductDetailRight}>
                <TouchableOpacity>
                    <Text style={styles.headerLoginSp}>Trợ giúp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export { HeaderHome, HeaderCategory, HeaderProductDetail, HeaderAllOtherPage, HeaderLogin };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    headerBox: {
        width: winWidth,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerBoxLogo: {
        marginBottom: 10,
    },
    headerBoxSearch: {
        width: '100%',
        borderColor: '#D8262F',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBoxSearchButton: {
        width: 36,
    },
    headerBoxSearchBg: {
        width: 36,
        height: 36,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBoxSearchIcon: {
        fontSize: 24,
        color: '#fff',
    },
    headerBoxSearchInput: {
        width: winWidth - 56,
        paddingHorizontal: 10,
        height: 36,
    },
    headerCategory: {
        width: winWidth,
        padding: 10,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerCategoryBack: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerCategoryBackIcon: {
        fontSize: 26,
    },
    headerCategorySearch: {
        width: 40,
        position: 'relative',
        zIndex: 1,
    },
    headerCategorySearchOpen: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerCategorySearchOpenIcon: {
        fontSize: 26,
    },
    headerCategorySearchMain: {
        width: 230,
        borderWidth: 1,
        borderRadius: 3,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'none',
        backgroundColor: '#fff',
    },
    headerCategorySearchMainActive: {
        display: 'flex',
    },
    headerCategorySearchInput: {
        width: '100%',
        height: 40,
        paddingLeft: 10,
        paddingRight: 40,
    },
    headerCategorySearchSubmit: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        justifyContent: 'center',
    },
    headerCategorySearchSubmitIcon: {
        fontSize: 26,
    },
    headerCategoryTitle: {
        width: winWidth - 180,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    headerCategoryList: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerCategoryListButton: {},
    headerCategoryListButtonImage: {
        width: 19,
        height: 16,
    },
    headerCategoryCart: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    headerCategoryCartButton: {},
    headerCategoryCartIcon: {
        fontSize: 26,
    },
    headerCategoryCartCount: {
        width: 15,
        height: 15,
        backgroundColor: '#D8262F',
        borderRadius: 7.5,
        position: 'absolute',
        top: 0,
        right: 0,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 15,
        overflow: 'hidden'
    },
    boxHeaderProductDetail: {
        width: winWidth,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    boxHeaderProductDetailGoBack: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxHeaderProductDetailIcon: {
        fontSize: 26,
    },
    boxHeaderProductDetailRight: {
        flexDirection: 'row',
    },
    boxHeaderProductDetailHome: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxHeaderProductDetailCart: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
    },
    boxHeaderProductDetailCartCount: {
        width: 14,
        height: 14,
        borderRadius: 7,
        overflow: 'hidden',
        backgroundColor: '#D8262F',
        textAlign: 'center',
        lineHeight: 14,
        fontSize: 10,
        color: '#fff',
        position: 'absolute',
        top: 5,
        right: 0,
    },
    boxHeaderProductDetailTitle: {
        width: winWidth - 140,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    headerLoginSp: {
        fontWeight: '300',
        color: '#777'
    },
})