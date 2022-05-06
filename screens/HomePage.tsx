import * as React from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { Asset } from 'expo-asset';
import { useNavigation } from '@react-navigation/core';

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <SliderHome />

                <CategoryHomePage />

                <FlastSale />

                <ProductHot />

                <ProductBestSale />

                <ComboHome />

                <ProductHome />
            </ScrollView>
        </SafeAreaView>
    );
}

const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height

const SliderHome = () => {

    const imageSlider = [
        {
            img: require('../assets/images/slider.jpg'),
        },
        {
            img: require('../assets/images/slider.jpg'),
        },
        {
            img: require('../assets/images/slider.jpg'),
        },
    ]

    return (
        <View style={styles.slider}>
            <Swiper style={styles.sliderSwipper} autoplay={true} showsButtons={false} index={3000}
                showsPagination={true}
                paginationStyle={{ position: 'absolute', left: 0, bottom: 15, }}
                dotStyle={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 5, backgroundColor: 'rgba(0,0,0,0.2)' }}
                activeDotStyle={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 5, backgroundColor: 'rgba(0,0,0,0.8)' }}
            >
                {
                    imageSlider.map((item, index) => {
                        return (<Image style={styles.imgSlider} key={index} source={item.img} />);
                    })
                }
            </Swiper>
        </View>
    );
}

const CategoryHomePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxCatHome}>
            <ScrollView horizontal={true} style={styles.boxCatHomeList} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductHotListNav')} style={styles.boxCatHomeItem}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat1.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Siêu phẩm hè</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')} style={styles.boxCatHomeItem}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat2.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Diện gia dụng</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')} style={styles.boxCatHomeItem}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat3.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Đồ gia dụng</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')} style={styles.boxCatHomeItem}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat4.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Thiết bị nhà bếp</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')} style={styles.boxCatHomeItem}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat5.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Điều hòa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')} style={styles.boxCatHomeItem}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat6.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Khẩu trang vải</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')} style={styles.boxCatHomeItem}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat7.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Deal Hot</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductCategory')} style={[styles.boxCatHomeItem, styles.boxCatHomeItemLast]}>
                    <View style={styles.boxCatHomeItemImg}>
                        <Image style={styles.boxCatHomeImg} source={require('../assets/images/icon-cat8.png')} />
                    </View>
                    <Text style={styles.boxCatHomeText}>Combo</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const FlastSale = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxFlastSaleHome}>
            <View style={styles.boxFlastSaleHomeTitle}>
                <Image style={styles.boxFlastSaleHomeTitleImg} source={require('../assets/images/flashsale.png')} />
                <TouchableOpacity style={styles.boxFlastSaleHomeTitleVm}>
                    <Text style={styles.boxFlastSaleHomeTitleVmText}>Xem tất cả</Text>
                    <FontAwesome style={styles.boxFlastSaleHomeTitleVmIcon} name="angle-double-right" />
                </TouchableOpacity>
            </View>
            <View style={styles.boxFlastSaleHomeFirstItem}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                    <View style={styles.boxFlastSaleHomeImg}>
                        <Image style={styles.boxFlastSaleHomeImgCt} source={require('../assets/images/product.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                    <Text style={styles.boxFlastSaleHomeFirstName} numberOfLines={2}>NỒI CHIÊN KHÔNG DẦU SMARTPLUS NAGAKAWA NAG3303 (9L)</Text>
                </TouchableOpacity>
                <View style={styles.boxFlastSaleHomeFirstAllPrice}>
                    <View style={styles.boxFlastSaleHomeFirstPrice}>
                        <Text style={styles.boxFlastSaleHomeFirstPriceName}>Giá sốc online</Text>
                        <Text style={styles.boxFlastSaleHomeFirstPriceText}>4.100.000đ</Text>
                    </View>
                    <View style={styles.boxFlastSaleHomeFirstPriceOld}>
                        <Text style={styles.boxFlastSaleHomeFirstOldPrice}>4.500.000đ</Text>
                        <Text style={styles.boxFlastSaleHomeFirstDiscount}>-30%</Text>
                    </View>
                </View>
                <View style={styles.boxFlastSaleHomeFirstSaleQuan}>
                    <View style={styles.boxFlastSaleHomeFirstSaleQuanLeft}>
                        <View style={styles.boxFlastSaleHomeFirstSaleQuanLeftCt}>
                            <View style={styles.boxFlastSaleHomeFirstSaleQuanLeftDown}></View>
                            <Text style={styles.boxFlastSaleHomeFirstSaleQuanLeftText}>Đã bán 6</Text>
                        </View>
                    </View>
                    <View style={styles.boxFlastSaleHomeFirstSaleQuanRight}>
                        <View style={styles.boxFlastSaleHomeFirstSaleQuanRightCt}>
                            <Text style={styles.boxFlastSaleHomeFirstSaleQuanRightText}>Đã bán</Text>
                            <Text style={styles.boxFlastSaleHomeFirstSaleQuanRightTextRed}>6</Text>
                            <Text style={styles.boxFlastSaleHomeFirstSaleQuanRightText}>/ 30 sản phẩm</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxFlastSaleHomeFirstTime}>
                    <Text style={styles.boxFlastSaleHomeFirstTimeTitle}>Kết thúc trong</Text>
                    <View style={styles.boxFlastSaleHomeFirstTimeList}>
                        <View style={styles.boxFlastSaleHomeFirstTimeItem}>
                            <View style={styles.boxFlastSaleHomeFirstItemCt}>
                                <Text style={styles.boxFlastSaleHomeFirstTimeNum}>04</Text>
                            </View>
                            <Text style={styles.boxFlastSaleHomeFirstTimeText}>Giờ</Text>
                        </View>
                        <Text style={styles.boxFlastSaleHomeFirstTimeTextChia}>:</Text>
                        <View style={styles.boxFlastSaleHomeFirstTimeItem}>
                            <View style={styles.boxFlastSaleHomeFirstItemCt}>
                                <Text style={styles.boxFlastSaleHomeFirstTimeNum}>08</Text>
                            </View>
                            <Text style={styles.boxFlastSaleHomeFirstTimeText}>Phút</Text>
                        </View>
                        <Text style={styles.boxFlastSaleHomeFirstTimeTextChia}>:</Text>
                        <View style={styles.boxFlastSaleHomeFirstTimeItem}>
                            <View style={styles.boxFlastSaleHomeFirstItemCt}>
                                <Text style={styles.boxFlastSaleHomeFirstTimeNum}>56</Text>
                            </View>
                            <Text style={styles.boxFlastSaleHomeFirstTimeText}>Giây</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.boxFlastSaleHomeList}>
                <ScrollView horizontal={true}>
                    <View style={styles.boxFlastSaleHomeListItem}>
                        <View style={styles.boxFlastSaleHomeListItemImg}>
                            <Image style={styles.boxFlastSaleHomeImgCt} source={require('../assets/images/product.png')} />
                        </View>
                        <View style={styles.boxFlastSaleHomeListItemInfo}>
                            <Text style={styles.boxFlastSaleHomeListItemName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L) - Van xả kép - Hàng chính hãng</Text>
                            <Text style={styles.boxFlastSaleHomeListItemPrice}>1.292.000đ</Text>
                            <View style={styles.boxFlastSaleHomeListItemOldPriceAll}>
                                <Text style={styles.boxFlastSaleHomeListItemOldPrice}>1.634.000đ</Text>
                                <Text style={styles.boxFlastSaleHomeListItemDiscount}>-30%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxFlastSaleHomeListItem}>
                        <View style={styles.boxFlastSaleHomeListItemImg}>
                            <Image style={styles.boxFlastSaleHomeImgCt} source={require('../assets/images/product.png')} />
                        </View>
                        <View style={styles.boxFlastSaleHomeListItemInfo}>
                            <Text style={styles.boxFlastSaleHomeListItemName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L) - Van xả kép - Hàng chính hãng</Text>
                            <Text style={styles.boxFlastSaleHomeListItemPrice}>1.292.000đ</Text>
                            <View style={styles.boxFlastSaleHomeListItemOldPriceAll}>
                                <Text style={styles.boxFlastSaleHomeListItemOldPrice}>1.634.000đ</Text>
                                <Text style={styles.boxFlastSaleHomeListItemDiscount}>-30%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.boxFlastSaleHomeListItem, styles.boxFlastSaleHomeListItemLast]}>
                        <View style={styles.boxFlastSaleHomeListItemImg}>
                            <Image style={styles.boxFlastSaleHomeImgCt} source={require('../assets/images/product.png')} />
                        </View>
                        <View style={styles.boxFlastSaleHomeListItemInfo}>
                            <Text style={styles.boxFlastSaleHomeListItemName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L) - Van xả kép - Hàng chính hãng</Text>
                            <Text style={styles.boxFlastSaleHomeListItemPrice}>1.292.000đ</Text>
                            <View style={styles.boxFlastSaleHomeListItemOldPriceAll}>
                                <Text style={styles.boxFlastSaleHomeListItemOldPrice}>1.634.000đ</Text>
                                <Text style={styles.boxFlastSaleHomeListItemDiscount}>-30%</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const ProductHot = () => {
    return (
        <View style={styles.boxProductHot}>
            <Image style={styles.bgProductHot} source={require('../assets/images/bg-hot.png')} />
            <Text style={styles.boxProductHotTitle}>Khuyến mại hot mỗi ngày</Text>
            <View style={styles.boxProductHotList}>
                <ScrollView horizontal={true}>
                    <View style={styles.boxProductHotItem}>
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
                    <View style={styles.boxProductHotItem}>
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
                    <View style={[styles.boxProductHotItem, styles.boxProductHotItemLast]}>
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
                </ScrollView>
            </View>
            <View style={styles.vmWhite}>
                <TouchableOpacity style={styles.vmWhiteButton}>
                    <Text style={styles.vmWhiteText}>Xem tất cả</Text>
                    <FontAwesome style={styles.vmWhiteIcon} name="angle-double-right" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ProductBestSale = () => {
    return (
        <View style={styles.productBestSale}>
            <View style={styles.productBestSaleTitle}>
                <Image style={styles.productBestSaleTitleImg} source={require('../assets/images/bg-combo.png')} />
                <Text style={styles.productBestSaleTitleText}>Sản phẩm bán chạy</Text>
            </View>
            <View style={styles.productBestSaleList}>
                <View style={styles.boxProductBestSaleItemStTwo}>
                    <View style={styles.pContainerStTwo}>
                        <View style={styles.pImgContentTwo}>
                            <Image style={styles.pNew} source={require('../assets/images/icon_new.png')} />
                            <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                            <Image style={styles.pTraGop} source={require('../assets/images/icon_tragop.png')} />
                        </View>
                        <View style={styles.pInfoStTwo}>
                            <Text style={styles.pName} numberOfLines={2}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
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
                <View style={styles.boxProductBestSaleItemStTwo}>
                    <View style={styles.pContainerStTwo}>
                        <View style={styles.pImgContentTwo}>
                            <Image style={styles.pNew} source={require('../assets/images/icon_new.png')} />
                            <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                            <Image style={styles.pTraGop} source={require('../assets/images/icon_tragop.png')} />
                        </View>
                        <View style={styles.pInfoStTwo}>
                            <Text style={styles.pName} numberOfLines={2}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
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
                <View style={styles.boxProductBestSaleItemStTwo}>
                    <View style={styles.pContainerStTwo}>
                        <View style={styles.pImgContentTwo}>
                            <Image style={styles.pNew} source={require('../assets/images/icon_new.png')} />
                            <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                            <Image style={styles.pTraGop} source={require('../assets/images/icon_tragop.png')} />
                        </View>
                        <View style={styles.pInfoStTwo}>
                            <Text style={styles.pName} numberOfLines={2}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
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
                <View style={styles.vmRed}>
                    <TouchableOpacity style={styles.vmRedButton}>
                        <Text style={styles.vmRedText}>Xem tất cả</Text>
                        <FontAwesome style={styles.vmRedIcon} name="angle-double-right" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const ComboHome = () => {
    return (
        <View style={styles.boxComboHome}>
            <View style={styles.boxComboHomeTitle}>
                <Text style={styles.boxComboHomeTitleText}>Combo dành cho bạn</Text>
            </View>
            <View style={styles.boxComboHomeListCombo}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity style={[styles.boxComboHomeListComboItem, styles.boxComboHomeListComboItemActive]}>
                        <Image style={styles.boxComboHomeListComboItemImg} source={require('../assets/images/icon-combo.png')} />
                        <Text style={[styles.boxComboHomeListComboItemText, styles.boxComboHomeListComboItemTextActive]}>Combo 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxComboHomeListComboItem}>
                        <Image style={styles.boxComboHomeListComboItemImg} source={require('../assets/images/icon-combo.png')} />
                        <Text style={styles.boxComboHomeListComboItemText}>Combo 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxComboHomeListComboItem}>
                        <Image style={styles.boxComboHomeListComboItemImg} source={require('../assets/images/icon-combo.png')} />
                        <Text style={styles.boxComboHomeListComboItemText}>Combo 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxComboHomeListComboItem}>
                        <Image style={styles.boxComboHomeListComboItemImg} source={require('../assets/images/icon-combo.png')} />
                        <Text style={styles.boxComboHomeListComboItemText}>Combo 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.boxComboHomeListComboItem, styles.boxComboHomeListComboItemLast]}>
                        <Image style={styles.boxComboHomeListComboItemImg} source={require('../assets/images/icon-combo.png')} />
                        <Text style={styles.boxComboHomeListComboItemText}>Combo 5</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.boxComboHomeListComboContent}>
                <ScrollView horizontal={true}>
                    <View style={[styles.boxProductHotItem, styles.boxProductHotItemLast]}>
                        <View style={styles.pContainer}>
                            <View style={styles.pImgContent}>
                                <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                            </View>
                            <View style={styles.pInfo}>
                                <Text style={styles.pName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
                                <Text style={styles.pPrice}>1.292.000đ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.boxProductHotItem, styles.boxProductHotItemLast]}>
                        <View style={styles.pContainer}>
                            <View style={styles.pImgContent}>
                                <Image style={styles.pImg} source={require('../assets/images/pro.png')} />
                            </View>
                            <View style={styles.pInfo}>
                                <Text style={styles.pName} numberOfLines={3}>Nồi áp suất inox 304 cao cấp Nagakawa NAG1452 (5L)</Text>
                                <Text style={styles.pPrice}>1.292.000đ</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.boxComboHomeTotalPrice}>
                <Text style={styles.boxComboHomeTotalPriceSum}>=</Text>
                <View style={styles.boxComboHomeTotalPriceCotent}>
                    <Text style={styles.boxComboHomeTotalPriceOldPrice}>1.057.000đ</Text>
                    <View style={styles.boxComboHomeTotalPriceAll}>
                        <Text style={styles.boxComboHomeTotalPriceAllText}>Giá Combo: </Text>
                        <Text style={styles.boxComboHomeTotalPriceAllNum}>985.000đ</Text>
                    </View>
                    <Text style={styles.boxComboHomeTotalPriceDiscount}>Tiết kiệm 199.000đ</Text>
                </View>
                <TouchableOpacity style={styles.boxComboHomeTotalPriceButton}>
                    <Text style={styles.boxComboHomeTotalPriceButtonText}>Mua combo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ProductHome = () => {
    return (
        <View style={styles.boxProductHome}>
            <View style={styles.boxProductHomeListCat}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity style={styles.boxProductHomeListCatItem}>
                        <Image style={styles.boxProductHomeListCatImg} source={require('../assets/images/icon-pro1.png')} />
                        <Text style={[styles.boxProductHomeListCatText, styles.boxProductHomeListCatTextActive]}>Thiết bị nhà bếp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxProductHomeListCatItem}>
                        <Image style={styles.boxProductHomeListCatImg} source={require('../assets/images/icon-pro2.png')} />
                        <Text style={styles.boxProductHomeListCatText}>Đồ gia dụng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxProductHomeListCatItem}>
                        <Image style={styles.boxProductHomeListCatImg} source={require('../assets/images/icon-pro3.png')} />
                        <Text style={styles.boxProductHomeListCatText}>Điện gia dụng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxProductHomeListCatItem}>
                        <Image style={styles.boxProductHomeListCatImg} source={require('../assets/images/icon-pro4.png')} />
                        <Text style={styles.boxProductHomeListCatText}>Điều hòa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxProductHomeListCatItem}>
                        <Image style={styles.boxProductHomeListCatImg} source={require('../assets/images/icon-pro5.png')} />
                        <Text style={styles.boxProductHomeListCatText}>Khẩu trang vải</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.boxProductHomeListCatItem, styles.boxProductHomeListCatItemLast]}>
                        <Image style={styles.boxProductHomeListCatImg} source={require('../assets/images/icon-pro6.png')} />
                        <Text style={styles.boxProductHomeListCatText}>Deal hot</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.boxProductHomeList}>
                <View style={styles.boxProductHomeItem}>
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
                <View style={[styles.boxProductHomeItem, styles.boxProductHomeItemChan]}>
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
                <View style={styles.boxProductHomeItem}>
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
                <View style={[styles.boxProductHomeItem, styles.boxProductHomeItemChan]}>
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
            <View style={styles.vmRed}>
                <TouchableOpacity style={styles.vmRedButton}>
                    <Text style={styles.vmRedText}>Xem tất cả</Text>
                    <FontAwesome style={styles.vmRedIcon} name="angle-double-right" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
    },
    slider: {
        width: winWidth,
        height: winWidth - 20,
        paddingHorizontal: 10,
        position: 'relative',
        marginTop: 15,
    },
    sliderSwipper: {},
    imgSlider: {
        width: winWidth - 20,
        height: winWidth - 20,
    },
    boxCatHome: {
        width: winWidth,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    boxCatHomeList: {
        paddingBottom: 8,
    },
    boxCatHomeItem: {
        width: 58,
        marginRight: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxCatHomeItemLast: {
        marginRight: 0,
    },
    boxCatHomeItemImg: {
        width: 40,
        height: 40,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxCatHomeImg: {
        width: 28,
        height: 28,
    },
    boxCatHomeText: {
        textAlign: 'center',
        fontSize: 11,
        color: '#6A6A6A'
    },
    boxFlastSaleHome: {
        width: winWidth,
        marginBottom: 10,
        paddingBottom: 10,
    },
    boxFlastSaleHomeTitle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#D8262F',
        alignItems: 'center'
    },
    boxFlastSaleHomeTitleImg: {
        width: 187,
        height: 59,
    },
    boxFlastSaleHomeTitleVm: {
        width: 104,
        height: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    boxFlastSaleHomeTitleVmText: {
        fontStyle: 'italic',
        color: '#D8262F',
        fontSize: 14,
    },
    boxFlastSaleHomeTitleVmIcon: {
        fontStyle: 'italic',
        color: '#D8262F',
        fontSize: 14,
    },
    boxFlastSaleHomeFirstItem: {
        padding: 10,
    },
    boxFlastSaleHomeImg: {
        width: '100%',
        height: winWidth - 20,
        position: 'relative',
        marginBottom: 15,
    },
    boxFlastSaleHomeImgCt: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    boxFlastSaleHomeFirstName: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#000',
        marginBottom: 10,
    },
    boxFlastSaleHomeFirstAllPrice: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    boxFlastSaleHomeFirstPrice: {
        width: '50%',
        paddingRight: 5,
    },
    boxFlastSaleHomeFirstPriceName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    boxFlastSaleHomeFirstPriceText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#D8262F'
    },
    boxFlastSaleHomeFirstPriceOld: {
        width: '50%',
        paddingLeft: 5,
    },
    boxFlastSaleHomeFirstOldPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        marginBottom: 2,
    },
    boxFlastSaleHomeFirstDiscount: {
        paddingVertical: 5,
        backgroundColor: '#D8262F',
        width: 60,
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5,
        overflow: 'hidden'
    },
    boxFlastSaleHomeFirstSaleQuan: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        marginBottom: 10,
    },
    boxFlastSaleHomeFirstSaleQuanLeft: {
        width: '50%',
        paddingRight: 5,
    },
    boxFlastSaleHomeFirstSaleQuanLeftCt: {
        width: '100%',
        height: 15,
        borderRadius: 7.5,
        backgroundColor: '#FFE2E2',
        position: 'relative',
    },
    boxFlastSaleHomeFirstSaleQuanLeftDown: {
        position: 'absolute',
        width: '20%',
        top: 0,
        left: 0,
        backgroundColor: '#D8262F',
        zIndex: 2,
        height: 15,
        borderRadius: 7.5,
    },
    boxFlastSaleHomeFirstSaleQuanLeftText: {
        marginLeft: 10,
        fontSize: 10,
        color: '#fff',
        lineHeight: 15,
        position: 'relative',
        zIndex: 5,
    },
    boxFlastSaleHomeFirstSaleQuanRight: {
        width: '50%',
        paddingLeft: 5,
    },
    boxFlastSaleHomeFirstSaleQuanRightCt: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxFlastSaleHomeFirstSaleQuanRightText: {
        fontSize: 13,
    },
    boxFlastSaleHomeFirstSaleQuanRightTextRed: {
        fontSize: 13,
        color: '#D8262F',
        marginHorizontal: 5,
    },
    boxFlastSaleHomeFirstTime: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxFlastSaleHomeFirstTimeTitle: {
        fontSize: 14,
        width: 100,
    },
    boxFlastSaleHomeFirstTimeList: {
        width: winWidth - 120,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxFlastSaleHomeFirstTimeItem: {
        width: 48,
        backgroundColor: '#3B3B3B',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    boxFlastSaleHomeFirstItemCt: {
        height: 34,
        backgroundColor: 'rgba(0,0,0,0)',
        width: '100%',
        borderBottomColor: 'rgba(255,255,255,0.3)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxFlastSaleHomeFirstTimeNum: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    boxFlastSaleHomeFirstTimeText: {
        height: 30,
        lineHeight: 30,
        textTransform: 'uppercase',
        color: '#fff',
    },
    boxFlastSaleHomeFirstTimeTextChia: {
        marginHorizontal: 10,
        fontSize: 24,
    },
    boxFlastSaleHomeList: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    boxFlastSaleHomeListItem: {
        width: winWidth - 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
    },
    boxFlastSaleHomeListItemLast: {
        marginRight: 0,
    },
    boxFlastSaleHomeListItemImg: {
        width: 113,
        height: 113,
        marginRight: 20,
        position: 'relative'
    },
    boxFlastSaleHomeListItemInfo: {
        width: winWidth - 175,
    },
    boxFlastSaleHomeListItemName: {
        fontSize: 14,
        marginBottom: 10,
    },
    boxFlastSaleHomeListItemPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D8262F',
        marginBottom: 5,
    },
    boxFlastSaleHomeListItemOldPriceAll: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxFlastSaleHomeListItemOldPrice: {
        fontSize: 14,
        color: '#A1A1A1',
        textDecorationLine: 'line-through',
    },
    boxFlastSaleHomeListItemDiscount: {
        paddingVertical: 5,
        backgroundColor: '#D8262F',
        width: 60,
        textAlign: 'center',
        color: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: 10,
    },
    boxProductHot: {
        width: winWidth,
        marginBottom: 10,
        backgroundColor: '#D8262F',
        position: 'relative',
    },
    bgProductHot: {
        width: winWidth,
        height: 200,
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
    },
    boxProductHotTitle: {
        paddingHorizontal: 10,
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
        position: 'relative',
        zIndex: 2,
    },
    boxProductHotList: {
        width: winWidth,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'relative',
        zIndex: 2,
        marginBottom: 20,
    },
    boxProductHotItem: {
        width: 180,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    boxProductHotItemLast: {
        marginRight: 0,
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
    vmWhite: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    vmWhiteButton: {
        width: 104,
        height: 32,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vmWhiteText: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#fff',
        marginRight: 10,
    },
    vmWhiteIcon: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#fff',
    },
    productBestSale: {
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f2f2f2',
        position: 'relative',
        width: winWidth,
    },
    productBestSaleTitle: {
        width: winWidth - 20,
        height: 40,
        position: 'relative',
        zIndex: 5,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    productBestSaleTitleImg: {
        width: '100%',
        height: '100%',
    },
    productBestSaleTitleText: {
        width: '100%',
        lineHeight: 40,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    productBestSaleList: {
        borderWidth: 1,
        borderColor: '#D8262F',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: -20,
        paddingTop: 30,
    },
    boxProductBestSaleItemStTwo: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    pContainerStTwo: {
        flexDirection: 'row',
        padding: 10,
    },
    pImgContentTwo: {
        width: 111,
        height: 111,
        marginRight: 20,
        position: 'relative',
    },
    pInfoStTwo: {
        width: winWidth - 175,
    },
    vmRed: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        marginTop: 20,
    },
    vmRedButton: {
        width: 104,
        height: 32,
        borderRadius: 5,
        borderColor: '#D8262F',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    vmRedText: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#D8262F',
        marginRight: 10,
    },
    vmRedIcon: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#D8262F',
    },
    boxComboHome: {
        width: winWidth,
        marginBottom: 20,
    },
    boxComboHomeTitle: {
        padding: 10,
    },
    boxComboHomeTitleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#D8262F',
        fontStyle: 'italic',
    },
    boxComboHomeListCombo: {
        padding: 10,
        width: winWidth,
        backgroundColor: '#f2f2f2',
    },
    boxComboHomeListComboItem: {
        width: 80,
        height: 56,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    boxComboHomeListComboItemActive: {
        backgroundColor: '#D8262F',
    },
    boxComboHomeListComboItemLast: {
        marginRight: 0,
    },
    boxComboHomeListComboItemImg: {
        width: 28,
        height: 28,
    },
    boxComboHomeListComboItemText: {
        fontWeight: '500',
    },
    boxComboHomeListComboItemTextActive: {
        color: '#fff',
    },
    boxComboHomeListComboContent: {
        width: winWidth,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    boxComboHomeTotalPrice: {
        width: winWidth,
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#e1e1e1',
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxComboHomeTotalPriceSum: {
        width: 40,
        fontSize: 40,
        color: '#999'
    },
    boxComboHomeTotalPriceCotent: {
        width: winWidth - 180,
    },
    boxComboHomeTotalPriceOldPrice: {
        fontSize: 14,
        color: '#A1A1A1',
        textDecorationLine: 'line-through',
        marginBottom: 5,
    },
    boxComboHomeTotalPriceAll: {
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'flex-end',
    },
    boxComboHomeTotalPriceAllText: {
        marginRight: 8,
    },
    boxComboHomeTotalPriceAllNum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D8262F',
    },
    boxComboHomeTotalPriceDiscount: {
        color: '#D8262F',
    },
    boxComboHomeTotalPriceButton: {
        width: 120,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8262F',
        borderRadius: 10,
    },
    boxComboHomeTotalPriceButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    boxProductHome: {
        marginBottom: 20,
        backgroundColor: '#f2f2f2'
    },
    boxProductHomeListCat: {
        width: winWidth,
        padding: 10,
    },
    boxProductHomeListCatItem: {
        width: 58,
        marginRight: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxProductHomeListCatItemLast: {
        marginRight: 0,
    },
    boxProductHomeListCatImg: {
        marginBottom: 5,
    },
    boxProductHomeListCatText: {
        textAlign: 'center',
    },
    boxProductHomeListCatTextActive: {
        color: '#D8262F'
    },
    boxProductHomeList: {
        width: winWidth,
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    boxProductHomeItem: {
        width: winWidth / 2 - 15,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    boxProductHomeItemChan: {
        marginRight: 0,
    }
});
