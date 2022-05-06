import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MenuCategory() {
    return (
        <SafeAreaView style={styles.container}>
            <ListMenuCat />
        </SafeAreaView>
    );
}

const dataCategory = [
    {
        id: 1,
        name: 'Điện gia dụng',
        image: require('../assets/images/icon-menu1.png'),
        imageActive: require('../assets/images/icon-menu1active.png'),
    },
    {
        id: 2,
        name: 'Đồ gia dụng',
        image: require('../assets/images/icon-menu2.png'),
        imageActive: require('../assets/images/icon-menu2active.png'),
        children: [],
    },
    {
        id: 3,
        name: 'Thiết bị nhà bếp',
        image: require('../assets/images/icon-menu3.png'),
        imageActive: require('../assets/images/icon-menu3active.png'),
        children: [],
    },
    {
        id: 4,
        name: 'Điều hòa',
        image: require('../assets/images/icon-menu4.png'),
        imageActive: require('../assets/images/icon-menu4active.png'),
        children: [],
    },
    {
        id: 5,
        name: 'Khâu trang vải',
        image: require('../assets/images/icon-menu5.png'),
        imageActive: require('../assets/images/icon-menu5active.png'),
        children: [],
    },
]

const dataChildren = [
    {
        id: 6,
        name: 'Ấm siêu tốc',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 7,
        name: 'Bàn là',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 8,
        name: 'Bếp hồng ngoại',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 9,
        name: 'Bếp từ',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 10,
        name: 'Bình thủy điện',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 11,
        name: 'Cây nước nóng lạnh',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 12,
        name: 'Lẩu điện',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 13,
        name: 'Lò nướng',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 14,
        name: 'Máy làm mát',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 15,
        name: 'Máy lọc nước',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 16,
        name: 'Máy sấy tóc',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 17,
        name: 'Máy xay sinh tố',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 18,
        name: 'Nồi áp xuất điện đa năng',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 19,
        name: 'Nồi cơm điện',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 20,
        name: 'Quạt đứng',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 22,
        name: 'Máy xay thịt',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 23,
        name: 'Nồi cơm điện tách đường',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 24,
        name: 'Bếp nướng điện lẩu nướng',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 25,
        name: 'Nồi chiên không dầu',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 26,
        name: 'Lõi lọc Nagakawa',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
    {
        id: 27,
        name: 'Máy lọc không khí',
        image: require('../assets/images/icon-menuc.png'),
        imageActive: require('../assets/images/icon-menuc.png'),
    },
]

const OtherMenuFix = [
    {
        id: 'dh',
        name: 'Deal hot',
        image: require('../assets/images/icon-cat7.png'),
        imageActive: require('../assets/images/icon-cat7.png'),
        page: '',
    },
    {
        id: 'cb',
        name: 'Combo',
        image: require('../assets/images/icon-cat8.png'),
        imageActive: require('../assets/images/icon-cat8.png'),
        page: '',
    },
    {
        id: 'tt',
        name: 'Tin tức',
        image: require('../assets/images/icon-cat8.png'),
        imageActive: require('../assets/images/icon-cat8.png'),
        page: 'ArticleHome',
    },
]

const ListMenuCat = () => {
    const [activeMenu, setActiveMenu] = useState(1);
    const [activeMenuOther, setActiveMenuother] = useState('');
    const navigation = useNavigation();
    return (
        <View style={styles.boxMenu}>
            <View style={styles.boxMenuLeft}>
                <ScrollView>
                    {
                        dataCategory.map((item, index) => {
                            return (
                                <View style={activeMenu == item.id ? [styles.boxMenuLeftItem, styles.boxMenuLeftItemActive] : styles.boxMenuLeftItem} key={item.id}>
                                    <TouchableOpacity style={styles.boxMenuLeftItemButton} onPress={() => setActiveMenu(item.id)}>
                                        {
                                            activeMenu == item.id ?
                                                <Image style={styles.boxMenuLeftItemImage} source={item.imageActive} />
                                                : <Image style={styles.boxMenuLeftItemImage} source={item.image} />
                                        }
                                        {
                                            activeMenu == item.id ?
                                                <Text style={[styles.boxMenuLeftItemText, styles.boxMenuLeftItemTextActive]}>{item.name}</Text>
                                                : <Text style={styles.boxMenuLeftItemText}>{item.name}</Text>
                                        }

                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    {
                        OtherMenuFix.map((item, index) => {
                            return (
                                <View style={activeMenuOther == item.id ? [styles.boxMenuLeftItem, styles.boxMenuLeftItemActive] : styles.boxMenuLeftItem} key={item.id}>
                                    <TouchableOpacity style={styles.boxMenuLeftItemButton} onPress={item.page != '' ? () => navigation.navigate(item.page)  : () => setActiveMenuother(item.id)}>
                                        {
                                            activeMenuOther == item.id ?
                                                <Image style={styles.boxMenuLeftItemImage} source={item.imageActive} />
                                                : <Image style={styles.boxMenuLeftItemImage} source={item.image} />
                                        }
                                        {
                                            activeMenuOther == item.id ?
                                                <Text style={[styles.boxMenuLeftItemText, styles.boxMenuLeftItemTextActive]}>{item.name}</Text>
                                                : <Text style={styles.boxMenuLeftItemText}>{item.name}</Text>
                                        }

                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.boxMenuRight}>
                <ScrollView>
                    <View style={styles.boxMenuRightCt}>
                        {
                            dataChildren.map((item, index) => {
                                return (
                                    <View style={styles.boxMenuRightItem} key={item.id}>
                                        <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')}>
                                            <Image style={styles.boxMenuRightItemImage} source={item.image} />
                                            <Text style={styles.boxMenuRightItemText}>{item.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
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
    boxMenu: {
        width: winWidth,
        flexDirection: 'row',
        flex: 1,
    },
    boxMenuLeft: {
        width: 110,
        height: winHeight - 100,
    },
    boxMenuLeftItem: {
        width: 110,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
    boxMenuLeftItemActive: {
        backgroundColor: '#fff',
    },
    boxMenuLeftItemButton: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxMenuLeftItemImage: {
        marginBottom: 10,
    },
    boxMenuLeftItemText: {
        textAlign: 'center',
    },
    boxMenuLeftItemTextActive: {
        color: '#D8262F',
    },
    boxMenuRight: {
        width: winWidth - 110,
        height: winHeight - 130,
    },
    boxMenuRightCt: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
    },
    boxMenuRightItem: {
        width: '33.333%',
        padding: 10,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    boxMenuRightItemImage: {
        width: 52,
        height: 52,
        marginBottom: 10,
    },
    boxMenuRightItemText: {
        textAlign: 'center',
    },
});
