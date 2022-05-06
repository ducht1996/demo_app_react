import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ProductList() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <SortAndFilter />

                <ListCatCategory />

                <ProductCategory />
            </ScrollView>
        </SafeAreaView>
    );
}

const SortAndFilter = () => {
    const [openSort, setopenSort] = useState(true);
    const [openFilter, setOpenFilter] = useState(false);
    return (
        <View style={styles.sortAndFilter}>
            <View style={styles.boxSort}>
                <TouchableOpacity style={styles.boxSortButton} onPress={() => setopenSort(!openSort)}>
                    <Text style={styles.boxSortButtonTextBold}>Sắp xếp: </Text>
                    <Text style={styles.boxSortButtonActive}>Mới nhất</Text>
                    <Ionicons style={styles.boxSortButtonIcon} name="caret-down-outline" />
                </TouchableOpacity>
                <View style={openSort ? styles.boxSortList : [styles.boxSortList, styles.boxSortListActive]}>
                    <TouchableOpacity style={[styles.boxSortItem, styles.boxSortItemActive]}>
                        <Text style={[styles.boxSortItemText, styles.boxSortItemTextActive]}>Mới nhất</Text>
                        <Ionicons style={styles.boxSortItemTextIcon} name="checkmark-outline" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxSortItem}>
                        <Text style={styles.boxSortItemText}>Giá giảm dần</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxSortItem}>
                        <Text style={styles.boxSortItemText}>Giá tăng dần</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxFilter}>
                <TouchableOpacity style={styles.boxFilterButton} onPress={() => setOpenFilter(true)}>
                    <Ionicons style={styles.boxFilterIcon} name="funnel-outline" />
                    <Text style={styles.boxFilterText}>Lọc</Text>
                </TouchableOpacity>
                <Modal visible={openFilter} animationType="slide" transparent={true} onRequestClose={() => { setOpenFilter(!openFilter); }}>
                    <View style={styles.filterItemContent}>
                        <Pressable onPress={() => setOpenFilter(!openFilter)} style={styles.filterItemContentBg}>
                        </Pressable>
                        <View style={styles.filterItemList}>
                            <View style={styles.headerPopFilter}>
                                <Pressable onPress={() => setOpenFilter(!openFilter)}>
                                    <Ionicons style={styles.filterItemListClose} name="close-outline" />
                                </Pressable>
                                <Text style={styles.headerPopFilterText}>Bộ lọc</Text>
                            </View>
                            <View style={styles.listBoxFilter}>
                                <ScrollView>
                                    <PriceFilterList />

                                    <OtherFilterList />

                                    <OtherFilterListT />
                                </ScrollView>
                            </View>
                            <View style={styles.filterViewAll}>
                                <TouchableOpacity style={styles.filterViewAllButton}>
                                    <Text style={styles.filterViewAllButtonText}>Xem 1020 sản phẩm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const PriceFilterList = () => {
    const dataPriceFilter = [
        {
            url: '/',
            name: 'Dưới 200.000',
            is_current: 1,
        },
        {
            url: '/',
            name: 'Từ 200.000 đến 500.000',
            is_current: 0,
        },
        {
            url: '/',
            name: 'Từ 500.000 đến 1.000.000',
            is_current: 0,
        },
        {
            url: '/',
            name: 'Từ 1.000.000 đến 5.000.000',
            is_current: 0,
        },
        {
            url: '/',
            name: 'Từ 5.000.000 đến 15.000.000',
            is_current: 0,
        },
        {
            url: '/',
            name: 'Trên 15.000.000',
            is_current: 0,
        },
    ]
    return (
        <View style={styles.filterItemBox}>
            <Text style={styles.filterItemListTitleName}>Khoảng giá</Text>
            <View style={styles.filterItemBoxList}>
                {
                    dataPriceFilter.map((item, index) =>
                        <FilterItem key={index} name={item.name} isCurrent={item.is_current} />
                    )
                }
            </View>
            <View style={styles.filterItemBoxInput}>
                <Text style={styles.filterItemBoxInputText}>Hoặc nhập giá ở ô dưới đây</Text>
                <View style={styles.filterItemBoxInputCtList}>
                    <TextInput style={styles.filterItemBoxInputCt} placeholder="Từ 0đ" />
                    <TextInput style={styles.filterItemBoxInputCt} placeholder="đến 10.000.00đ" />
                </View>
            </View>
        </View>
    )
}

const OtherFilterList = () => {
    const [openAllFilter, setOpenAllFilter] = useState(true);
    const dataPriceFilter = [
        {
            url: '/',
            name: '1 - 2 lít',
            is_current: 1,
        },
        {
            url: '/',
            name: '2 - 3 lít',
            is_current: 0,
        },
        {
            url: '/',
            name: '3 - 4 lít',
            is_current: 0,
        },
        {
            url: '/',
            name: '4 - 9 lít',
            is_current: 0,
        },
        {
            url: '/',
            name: '9 - 12 lít',
            is_current: 0,
        },
        {
            url: '/',
            name: '12 - 15 lít',
            is_current: 0,
        },
    ]
    return (
        <View style={styles.filterItemBox}>
            <Text style={styles.filterItemListTitleName}>Dung tích</Text>
            <View style={openAllFilter ? styles.filterItemBoxListHeight : [styles.filterItemBoxListHeight, styles.filterItemBoxListHeightAuto]}>
                {
                    dataPriceFilter.map((item, index) =>
                        <FilterItem key={index} name={item.name} isCurrent={item.is_current} />
                    )
                }
            </View>
            <View style={styles.filterItemBoxVm}>
                <TouchableOpacity onPress={() => setOpenAllFilter(!openAllFilter)} style={styles.filterItemBoxVmButton}>
                    <Text style={styles.filterItemBoxVmButtonText}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const OtherFilterListT = () => {
    const [openAllFilter, setOpenAllFilter] = useState(true);
    const dataPriceFilter = [
        {
            url: '/',
            name: '30W - 100W',
            is_current: 1,
        },
        {
            url: '/',
            name: '100W - 300W',
            is_current: 0,
        },
        {
            url: '/',
            name: '300W - 500W',
            is_current: 0,
        },
        {
            url: '/',
            name: '500W - 1000W',
            is_current: 0,
        },
        {
            url: '/',
            name: '1000W - 2000W',
            is_current: 0,
        },
        {
            url: '/',
            name: '2000W - 5000W',
            is_current: 0,
        },
    ]
    return (
        <View style={styles.filterItemBox}>
            <Text style={styles.filterItemListTitleName}>Công xuất</Text>
            <View style={openAllFilter ? styles.filterItemBoxListHeight : [styles.filterItemBoxListHeight, styles.filterItemBoxListHeightAuto]}>
                {
                    dataPriceFilter.map((item, index) =>
                        <FilterItem key={index} name={item.name} isCurrent={item.is_current} />
                    )
                }
            </View>
            <View style={styles.filterItemBoxVm}>
                <TouchableOpacity onPress={() => setOpenAllFilter(!openAllFilter)} style={styles.filterItemBoxVmButton}>
                    <Text style={styles.filterItemBoxVmButtonText}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const FilterItem = (props: { name: string, isCurrent: number }) => {
    const { name, isCurrent } = props;
    return (
        <Pressable style={isCurrent > 0 ? [styles.filterItem, styles.filterItemActive] : styles.filterItem} onPress={() => Alert.alert('danh muc sp')}>
            <Text style={styles.filterItemName}>{name}</Text>
            {
                isCurrent > 0 ?
                    <View style={styles.filterCurrent}>
                        <Image style={styles.filterCurrentImg} source={require('../assets/images/filter-check.png')} />
                        <Ionicons style={styles.filterCurrentIcon} name="checkmark-outline" />
                    </View>
                    : <View></View>
            }
        </Pressable>
    );
}

const ListCatCategory = () => {
    const dataCat = [
        {
            id: 1,
            url: '/',
            name: 'Ấm siêu tốc'
        },
        {
            id: 2,
            url: '/',
            name: 'Bàn là'
        },
        {
            id: 3,
            url: '/',
            name: 'Bếp từ'
        },
        {
            id: 4,
            url: '/',
            name: 'Bếp hồng ngoại'
        },
        {
            id: 5,
            url: '/',
            name: 'Bình thủy điện'
        },
    ]
    let dataCatLength = dataCat.length;
    return (
        <View style={styles.boxCatCategory}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    dataCat.map((item, index) =>
                        <TouchableOpacity style={(index + 1) == dataCatLength ? [styles.boxCatCategoryItem, styles.boxCatCategoryItemLast] : styles.boxCatCategoryItem} key={item.id}>
                            <Text style={styles.boxCatCategoryItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
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

const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sortAndFilter: {
        width: winWidth,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        zIndex: 5,
    },
    boxSort: {
        zIndex: 1,
    },
    boxSortButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
    },
    boxSortButtonTextBold: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    boxSortButtonActive: {},
    boxSortButtonIcon: {
        marginLeft: 5,
    },
    boxSortList: {
        width: winWidth,
        paddingHorizontal: 10,
        position: 'absolute',
        left: -10,
        top: 40,
        display: 'none',
    },
    boxSortListActive: {
        display: 'flex',
    },
    boxSortItem: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxSortItemActive: {
        borderBottomColor: '#D8262F',
        borderBottomWidth: 1,
    },
    boxSortItemText: {
        fontSize: 14,
    },
    boxSortItemTextActive: {
        color: '#D8262F'
    },
    boxSortItemTextIcon: {
        color: '#D8262F'
    },
    boxFilter: {
        width: 70,
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderLeftWidth: 1,
        borderLeftColor: '#e1e1e1'
    },
    boxFilterButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxFilterIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    boxFilterText: {
        fontSize: 14,
    },
    filterItemContent: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1,
        flexDirection: 'row',
    },
    filterItemContentBg: {
        width: winWidth - 300,
        height: winHeight,
    },
    headerPopFilter: {
        width: '100%',
        paddingTop: 30,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        position: 'relative',
    },
    filterItemListClose: {
        width: 40,
        height: 40,
        lineHeight: 40,
        fontSize: 26,
    },
    headerPopFilterText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        width: '100%',
        paddingRight: 40,
    },
    filterItemList: {
        width: 300,
        height: winHeight,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 2.22,
        shadowRadius: 2.22,
        elevation: 3,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
    },
    listBoxFilter: {
        width: '100%',
        height: winHeight - 130,
    },
    filterViewAll: {
        width: '100%',
        height: 60,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterViewAllButton: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8262F',
        borderRadius: 5,
    },
    filterViewAllButtonText: {
        color: '#fff',
    },
    filterItemListTitleName: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    filterItemBoxList: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filterItem: {
        width: 135,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 3,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        position: 'relative',
    },
    filterItemActive: {
        borderColor: '#D8262F'
    },
    filterItemName: {
        width: '100%',
        textAlign: 'center'
    },
    boxProductCategory: {
        width: winWidth,
    },
    filterItemBox: {
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    filterCurrent: {
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    filterCurrentImg: {
        width: 24,
        height: 22,
    },
    filterCurrentIcon: {
        position: 'absolute',
        zIndex: 1,
        color: '#fff',
        right: 0,
        top: 0,
    },
    filterItemBoxInput: {
        width: '100%',
        marginTop: 10,
    },
    filterItemBoxInputText: {
        marginBottom: 10,
    },
    filterItemBoxInputCtList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    filterItemBoxInputCt: {
        width: 135,
        height: 40,
        paddingHorizontal: 10,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 3,
    },
    filterItemBoxListHeight: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxHeight: 100,
        overflow: 'hidden'
    },
    filterItemBoxListHeightAuto: {
        maxHeight: 'auto'
    },
    filterItemBoxVm: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    filterItemBoxVmButton: {
        width: 128,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#56C4F5',
        borderRadius: 3,
    },
    filterItemBoxVmButtonText: {
        color: '#56C4F5',
        fontSize: 14,
    },
    boxCatCategory: {
        padding: 10,
    },
    boxCatCategoryItem: {
        display: 'flex',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.08)',
        marginRight: 10,
    },
    boxCatCategoryItemLast: {
        marginRight: 0,
    },
    boxCatCategoryItemText: {
        fontSize: 14,
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
});
