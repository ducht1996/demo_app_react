import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { Picker } from '@react-native-picker/picker';
import { RadioButton, Checkbox } from 'react-native-paper';

export default function ProductDetail() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <SliderImageProductDetail />

                <DetailContentTop />

                <BuyComboDetail />

                <ProductDetailSpec />

                <ProductDetailDes />

                <ProductReview />

                <ProductDetailComment />

                <ProductCompare />

                <ProductDetailFixBot />
            </ScrollView>
        </SafeAreaView>
    );
}

const SliderImageProductDetail = () => {
    const imageSlider = [
        {
            img: require('../assets/images/product.png'),
        },
        {
            img: require('../assets/images/product.png'),
        },
        {
            img: require('../assets/images/product.png'),
        },
    ]
    return (
        <View style={styles.sliderImgDetail}>
            <Swiper style={styles.sliderSwipperImgDetail} autoplay={true} showsButtons={false} index={3000}
                showsPagination={true}
                paginationStyle={{ position: 'absolute', left: 0, bottom: 15, }}
                dotStyle={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 5, backgroundColor: 'rgba(0,0,0,0.2)' }}
                activeDotStyle={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 5, backgroundColor: 'rgba(0,0,0,0.8)' }}
            >
                {
                    imageSlider.map((item, index) => {
                        return (<View key={index} style={styles.itemSliderImgDetail}><Image style={styles.imgSliderImgDetail} source={item.img} /></View>);
                    })
                }
            </Swiper>
        </View>
    );
}

const DetailContentTop = () => {
    const [openKhuyenMai, setOpenKhuyenMai] = useState(false);
    const [openDacTinh, setOpenDacTinh] = useState(false);
    const [openDichVu, setOpenDichVu] = useState(false);
    const [openConFig, setOpenConFig] = useState(false);
    return (
        <View style={styles.boxDetailContentTop}>
            <View style={styles.boxDetailContentTopSt}>
                <Text style={styles.boxDetailContentName}>Điều hòa Super Fantastic Nagakawa NS–C(A)24SK15 - Hàng Chính Hãng</Text>
                <View style={styles.boxDetailContentTopRate}>
                    <View style={styles.boxDetailContentTopRate}>
                        <Image source={require('../assets/images/star5.png')} />
                        <Text>34</Text>
                    </View>
                    <View style={styles.boxDetailContentTopShare}>
                        <Ionicons style={styles.boxDetailContentTopShareIcon} name="share-social-outline" />
                    </View>
                </View>
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
            <View style={styles.boxDetailContentTopShowPop}>
                <Text style={styles.boxDetailContentTopTextBold}>Khuyến mãi</Text>
                <Text style={styles.boxDetailContentTopText} numberOfLines={1}>Quà tặng trị giá 3.800.000</Text>
                <TouchableOpacity onPress={() => setOpenKhuyenMai(true)} style={styles.boxDetailContentTopButton}>
                    <Ionicons style={styles.boxDetailContentTopButtonIcon} name="chevron-forward-outline" />
                </TouchableOpacity>
            </View>
            <View style={styles.boxDetailContentTopShowPopNd}>
                <View style={styles.boxDetailContentTopShowPopNdCt}>
                    <View style={styles.boxDetailContentTopShowPopNdCtLeft}>
                        <Text style={styles.boxDetailContentTopShowPopNdCtTb}>Đặc tính</Text>
                        <Text style={styles.boxDetailContentTopShowPopNdCtT}>Mã sản phẩm, Tình trạng</Text>
                    </View>
                    <TouchableOpacity onPress={() => setOpenDacTinh(true)} style={styles.boxDetailContentTopButton}>
                        <Ionicons style={styles.boxDetailContentTopButtonIcon} name="chevron-forward-outline" />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxDetailContentTopShowPopNdCt}>
                    <View>
                        <Text style={styles.boxDetailContentTopShowPopNdCtTb}>Dịch vụ</Text>
                        <View style={styles.boxDetailContentTopShowPopNdCtImgCt}>
                            <Image style={styles.boxDetailContentTopShowPopNdCtImg} source={require('../assets/images/box-return.png')} />
                            <Text style={styles.boxDetailContentTopShowPopNdCtT}>Mã sản phẩm, Tình trạng</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setOpenDichVu(true)} style={styles.boxDetailContentTopButton}>
                        <Ionicons style={styles.boxDetailContentTopButtonIcon} name="chevron-forward-outline" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxDetailContentTopShowPop}>
                <Text style={styles.boxDetailContentTopTextBold}>Lựa chọn</Text>
                <Text style={styles.boxDetailContentTopText} numberOfLines={1}>Công xuất làm lạnh</Text>
                <TouchableOpacity onPress={() => setOpenConFig(true)} style={styles.boxDetailContentTopButton}>
                    <Ionicons style={styles.boxDetailContentTopButtonIcon} name="chevron-forward-outline" />
                </TouchableOpacity>
            </View>
            <Modal visible={openKhuyenMai} animationType="slide" transparent={true} onRequestClose={() => { setOpenKhuyenMai(!openKhuyenMai); }}>
                <View style={styles.popDetail}>
                    <Pressable onPress={() => setOpenKhuyenMai(!openKhuyenMai)} style={styles.popDetailContentBg}>
                    </Pressable>
                    <View style={styles.headerPopDetail}>
                        <Text style={styles.headerPopDetailText}>Khuyến mại</Text>
                        <Pressable onPress={() => setOpenKhuyenMai(!openKhuyenMai)}>
                            <Ionicons style={styles.popDetailClose} name="close-outline" />
                        </Pressable>
                    </View>
                    <View style={styles.popDetailList}>
                        <ScrollView>
                            <Text style={styles.itemKmTextLine}>Khuyến mãi trị giá <Text style={styles.red}>3.880.000đ</Text>. Áp dụng đến 30/3/2021</Text>
                            <View style={styles.itemKm}>
                                <View style={styles.itemKmImg}>
                                    <Image style={styles.itemKmImgCt} source={require('../assets/images/product-km.png')} />
                                </View>
                                <Text style={styles.itemKmText}>Tặng Máy xay thịt Elmich hoặc Máy xay thịt đa năng Z-000207</Text>
                            </View>
                            <View style={styles.itemKm}>
                                <View style={styles.itemKmImg}>
                                    <Image style={styles.itemKmImgCt} source={require('../assets/images/product-km.png')} />
                                </View>
                                <Text style={styles.itemKmText}>Tặng Máy xay thịt Elmich hoặc Máy xay thịt đa năng Z-000207</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Modal visible={openDacTinh} animationType="slide" transparent={true} onRequestClose={() => { setOpenDacTinh(!openDacTinh); }}>
                <View style={styles.popDetail}>
                    <Pressable onPress={() => setOpenDacTinh(!openDacTinh)} style={styles.popDetailContentBg}>
                    </Pressable>
                    <View style={styles.headerPopDetail}>
                        <Text style={styles.headerPopDetailText}>Đặc tính</Text>
                        <Pressable onPress={() => setOpenDacTinh(!openDacTinh)}>
                            <Ionicons style={styles.popDetailClose} name="close-outline" />
                        </Pressable>
                    </View>
                    <View style={styles.popDetailList}>
                        <ScrollView>
                            <View style={styles.dacTinhItem}>
                                <Text style={styles.dacTinhItemText}>Mã sản phẩm</Text>
                                <View style={styles.dacTinhItemCt}>
                                    <FontAwesome style={styles.dacTinhItemCtIcon} name="square" />
                                    <Text style={styles.dacTinhItemCtText}>NS-A18BL</Text>
                                </View>
                            </View>
                            <View style={styles.dacTinhItem}>
                                <Text style={styles.dacTinhItemText}>Tình trạng</Text>
                                <View style={styles.dacTinhItemCt}>
                                    <FontAwesome style={styles.dacTinhItemCtIcon} name="square" />
                                    <Text style={[styles.dacTinhItemCtText, styles.green]}>Còn hàng</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Modal visible={openDichVu} animationType="slide" transparent={true} onRequestClose={() => { setOpenDichVu(!openDichVu); }}>
                <View style={styles.popDetail}>
                    <Pressable onPress={() => setOpenDichVu(!openDichVu)} style={styles.popDetailContentBg}>
                    </Pressable>
                    <View style={styles.headerPopDetail}>
                        <Text style={styles.headerPopDetailText}>Dịch vụ</Text>
                        <Pressable onPress={() => setOpenDichVu(!openDichVu)}>
                            <Ionicons style={styles.popDetailClose} name="close-outline" />
                        </Pressable>
                    </View>
                    <View style={styles.popDetailList}>
                        <ScrollView>
                            <View style={styles.dichVuItem}>
                                <View style={styles.dichVuItemImg}>
                                    <Image style={styles.dichVuItemImgCt} source={require('../assets/images/dich-vu1.png')} />
                                </View>
                                <View style={styles.dichVuItemText}>
                                    <Text style={styles.dichVuItemTextSt}>Hàng chính hãng</Text>
                                    <Text style={styles.dichVuItemTextNd}>Sản phẩm chính hãng 100%</Text>
                                </View>
                            </View>
                            <View style={styles.dichVuItem}>
                                <View style={styles.dichVuItemImg}>
                                    <Image style={styles.dichVuItemImgCt} source={require('../assets/images/dich-vu2.png')} />
                                </View>
                                <View style={styles.dichVuItemText}>
                                    <Text style={styles.dichVuItemTextSt}>Bảo hành 24 tháng</Text>
                                    <Text style={styles.dichVuItemTextNd}>Trả bảo hành tận nơi sử dụng</Text>
                                </View>
                            </View>
                            <View style={styles.dichVuItem}>
                                <View style={styles.dichVuItemImg}>
                                    <Image style={styles.dichVuItemImgCt} source={require('../assets/images/dich-vu3.png')} />
                                </View>
                                <View style={styles.dichVuItemText}>
                                    <Text style={styles.dichVuItemTextSt}>Giao hàng toàn quốc</Text>
                                    <Text style={styles.dichVuItemTextNd}>Giao hàng tận nơi trong vòng 24 giờ trong phạm vi bán kính 20Km</Text>
                                </View>
                            </View>
                            <View style={styles.dichVuItem}>
                                <View style={styles.dichVuItemImg}>
                                    <Image style={styles.dichVuItemImgCt} source={require('../assets/images/dich-vu4.png')} />
                                </View>
                                <View style={styles.dichVuItemText}>
                                    <Text style={styles.dichVuItemTextSt}>Đổi trả hàng miễn phí</Text>
                                    <Text style={styles.dichVuItemTextNd}>Đổi trả hàng miễn phí trong 7 ngày</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Modal visible={openConFig} animationType="slide" transparent={true} onRequestClose={() => { setOpenConFig(!openConFig); }}>
                <View style={styles.popDetail}>
                    <Pressable onPress={() => setOpenConFig(!openConFig)} style={styles.popDetailContentBg}>
                    </Pressable>
                    <View style={styles.headerPopDetail}>
                        <Text style={styles.headerPopDetailText}>Lựa chọn</Text>
                        <Pressable onPress={() => setOpenConFig(!openConFig)}>
                            <Ionicons style={styles.popDetailClose} name="close-outline" />
                        </Pressable>
                    </View>
                    <View style={styles.popDetailList}>
                        <ScrollView>
                            <View style={styles.listConFig}>
                                <Text style={styles.listConFigName}>Chọn công xuất làm lạnh</Text>
                                <View style={styles.listConFigList}>
                                    <View style={[styles.conFigItem, styles.conFigItemActive]}>
                                        <Text style={styles.conFigName}>1HP</Text>
                                        <Text style={[styles.conFigNamePrice, styles.red]}>19.990.000đ</Text>
                                        <View style={styles.conFigItemActiveBg}>
                                            <Image style={styles.conFigItemActiveBgImg} source={require('../assets/images/check-config.png')} />
                                            <Ionicons style={styles.conFigItemActiveBgIcon} name="checkmark-outline" />
                                        </View>
                                    </View>
                                    <View style={styles.conFigItem}>
                                        <Text style={styles.conFigName}>1.6HP</Text>
                                        <Text style={[styles.conFigNamePrice, styles.red]}>20.990.000đ</Text>
                                    </View>
                                    <View style={styles.conFigItem}>
                                        <Text style={styles.conFigName}>2HP</Text>
                                        <Text style={[styles.conFigNamePrice, styles.red]}>22.990.000đ</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.selecCount}>
                                <Text style={styles.selecCountText}>Số lượng</Text>
                                <View style={styles.selecCountContent}>
                                    <TouchableOpacity style={styles.selecCountButton}>
                                        <Text style={styles.selecCountButtonText}>+</Text>
                                    </TouchableOpacity>
                                    <TextInput style={styles.selecCountInput} value="1" />
                                    <TouchableOpacity style={styles.selecCountButton}>
                                        <Text style={styles.selecCountButtonText}>-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const BuyComboDetail = () => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={styles.comboDetail}>
            <Text style={styles.comboDetailText}>Sản phẩm thường được mua cùng</Text>
            <View style={styles.comboDetailList}>
                <ScrollView horizontal={true}>
                    <View style={styles.comboDetailItem}>
                        <View style={styles.comboDetailItemImg}>
                            <Image style={styles.comboDetailItemImgCt} source={require('../assets/images/product.png')} />
                        </View>
                        <View style={styles.comboDetailItemInfo}>
                            <View style={styles.comboDetailItemCheck}>
                                <Checkbox color="#D8262F" status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} />
                            </View>
                            <Text style={styles.comboDetailItemName} numberOfLines={3}>Ấm Siêu Tốc Nagakawa NAG0308</Text>
                        </View>
                        <Text style={styles.comboDetailItemPrice}>1.292.000đ</Text>
                    </View>
                    <View style={styles.comboDetailItem}>
                        <View style={styles.comboDetailItemImg}>
                            <Image style={styles.comboDetailItemImgCt} source={require('../assets/images/product.png')} />
                        </View>
                        <View style={styles.comboDetailItemInfo}>
                            <View style={styles.comboDetailItemCheck}>
                                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} />
                            </View>
                            <Text style={styles.comboDetailItemName} numberOfLines={3}>Ấm Siêu Tốc Nagakawa NAG0308</Text>
                        </View>
                        <Text style={styles.comboDetailItemPrice}>1.292.000đ</Text>
                    </View>
                    <View style={styles.comboDetailItem}>
                        <View style={styles.comboDetailItemImg}>
                            <Image style={styles.comboDetailItemImgCt} source={require('../assets/images/product.png')} />
                        </View>
                        <View style={styles.comboDetailItemInfo}>
                            <View style={styles.comboDetailItemCheck}>
                                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} />
                            </View>
                            <Text style={styles.comboDetailItemName} numberOfLines={3}>Ấm Siêu Tốc Nagakawa NAG0308</Text>
                        </View>
                        <Text style={styles.comboDetailItemPrice}>1.292.000đ</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.comboDetailBuy}>
                <View style={styles.comboDetailBuyPrice}>
                    <Text style={styles.comboDetailBuyPriceText}>Tổng Tiền</Text>
                    <Text style={styles.comboDetailBuyPriceTotal}>10.338.000đ</Text>
                    <Text style={styles.comboDetailBuyPriceOldTotal}>10.738.000đ</Text>
                </View>
                <TouchableOpacity style={styles.comboDetailBuyButton}>
                    <Text style={styles.comboDetailBuyButtonText}>Thêm tất cả vào giỏ hàng</Text>
                </TouchableOpacity>
                <Text style={styles.comboDetailBuyCount}>1 sản phẩm được chọn</Text>
            </View>
        </View>
    )
}

const ProductDetailSpec = () => {
    const [showAllSpec, setShowAllSpec] = useState(true);
    return (
        <View style={styles.boxProductDetailSpec}>
            <Text style={styles.boxProductDetailSpecTitle}>Thông số kỹ thuật</Text>
            <View style={showAllSpec ? styles.boxProductDetailSpecContent : [styles.boxProductDetailSpecContent, styles.boxProductDetailSpecContentActive]}>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
            </View>
            <View style={styles.boxProductDetailSpecVn}>
                <TouchableOpacity onPress={() => setShowAllSpec(!showAllSpec)} style={styles.boxProductDetailSpecVnButton}>
                    {
                        showAllSpec
                            ? <Text style={styles.boxProductDetailSpecVmText}>Xem thêm</Text>
                            : <Text style={styles.boxProductDetailSpecVmText}>Rút gọn</Text>
                    }
                    {
                        showAllSpec
                            ? <FontAwesome style={styles.boxProductDetailSpecVmIcon} name="angle-double-down" />
                            : <FontAwesome style={styles.boxProductDetailSpecVmIcon} name="angle-double-up" />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ProductDetailDes = () => {
    const [showAllDes, setShowAllDes] = useState(true);
    return (
        <View style={styles.boxProductDetailSpec}>
            <Text style={styles.boxProductDetailSpecTitle}>Mô tả sản phẩm</Text>
            <View style={showAllDes ? styles.boxProductDetailSpecContent : [styles.boxProductDetailSpecContent, styles.boxProductDetailSpecContentActive]}>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
                <Text>Nội dung đang được cập nhật</Text>
            </View>
            <View style={styles.boxProductDetailSpecVn}>
                <TouchableOpacity onPress={() => setShowAllDes(!showAllDes)} style={styles.boxProductDetailSpecVnButton}>
                    {
                        showAllDes
                            ? <Text style={styles.boxProductDetailSpecVmText}>Xem thêm</Text>
                            : <Text style={styles.boxProductDetailSpecVmText}>Rút gọn</Text>
                    }
                    {
                        showAllDes
                            ? <FontAwesome style={styles.boxProductDetailSpecVmIcon} name="angle-double-down" />
                            : <FontAwesome style={styles.boxProductDetailSpecVmIcon} name="angle-double-up" />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ProductReview = () => {
    return (
        <View style={styles.boxProductReview}>
            <View style={styles.boxProductReviewHeader}>
                <Text style={styles.boxProductReviewHeaderTitle}>Đánh giá & Nhận xét </Text>
                <TouchableOpacity style={styles.boxProductReviewHeaderTitleVm}>
                    <Text style={styles.boxProductReviewHeaderTitleVMText}>Xem tất cả</Text>
                    <FontAwesome style={styles.boxProductReviewHeaderTitleVmIcon} name="angle-double-right" />
                </TouchableOpacity>
            </View>
            <View style={styles.boxProductReviewHeaderRate}>
                <View style={styles.boxProductReviewHeaderRateCt}>
                    <Text style={styles.boxProductReviewHeaderRateTotal}>4.5</Text>
                    <Text style={styles.boxProductReviewHeaderRateAll}>/5</Text>
                </View>
                <Image style={styles.boxProductReviewHeaderRateImg} source={require('../assets/images/star4.png')} />
            </View>

            <View style={styles.reviewList}>
                <View style={styles.reviewItem}>
                    <View style={styles.reviewItemHeader}>
                        <Text style={styles.reviewItemHeaderNameSort}>Q</Text>
                        <Text style={styles.reviewItemHeadername}>Quân</Text>
                        <View style={styles.reviewItemHeaderBuy}>
                            <FontAwesome style={styles.reviewItemHeaderBuyIcon} name="check-circle" />
                            <Text style={styles.reviewItemHeaderBuyText}>Đã mua hàng</Text>
                        </View>
                        <Image style={styles.reviewItemHeaderStar} source={require('../assets/images/star5.png')} />
                    </View>
                    <View style={styles.reviewItemCt}>
                        <Text style={styles.reviewItemContent}>Nhận hàng cực nhanh, đóng gói đẹp.</Text>
                        <View style={styles.reviewItemContentImg}>
                            <Image style={styles.reviewItemImg} source={require('../assets/images/product.png')} />
                            <Image style={styles.reviewItemImg} source={require('../assets/images/product.png')} />
                        </View>
                    </View>
                    <View style={styles.reviewItemOther}>
                        <TouchableOpacity style={styles.reviewItemOtherButton}>
                            <FontAwesome style={styles.reviewItemOtherButtonIcon} name="commenting" />
                            <Text style={styles.reviewItemOtherButtonText}>Trả lời</Text>
                        </TouchableOpacity>
                        <Text style={styles.reviewItemOtherTime}>| 22/2/2021</Text>
                    </View>
                    <View style={styles.reviewItemReplyList}>
                        <FontAwesome style={styles.reviewItemReplyListBefore} name="caret-up" />
                        <View style={styles.reviewItemReplyItem}>
                            <View style={styles.reviewItemReplyItemHeader}>
                                <View style={styles.reviewItemReplyItemHeaderLogo}>
                                    <Image style={styles.reviewItemReplyItemHeaderLogoImg} source={require('../assets/images/logo-cmt.png')} />
                                </View>
                                <Text style={styles.reviewItemReplyItemHeaderName}>Đức Hào</Text>
                                <Text style={styles.reviewItemReplyItemHeaderQtv}>QTV</Text>
                            </View>
                            <View style={styles.reviewItemReplyItemCt}>
                                <Text style={styles.reviewItemReplyItemContent}>Cảm ơn bạn đã mua hàng của chúng tôi.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const ProductDetailComment = () => {
    const [openPopCmt, setOpenPopCmt] = useState(false)
    return (
        <View style={styles.boxProductDetailComment}>
            <View style={styles.boxProductReviewHeader}>
                <Text style={styles.boxProductReviewHeaderTitle}>Hỏi và đáp (3) </Text>
                <TouchableOpacity style={styles.boxProductReviewHeaderTitleVm}>
                    <Text style={styles.boxProductReviewHeaderTitleVMText}>Xem tất cả</Text>
                    <FontAwesome style={styles.boxProductReviewHeaderTitleVmIcon} name="angle-double-right" />
                </TouchableOpacity>
            </View>
            <View style={styles.commentList}>
                <View style={styles.commentItem}>
                    <View style={styles.commentItemHeader}>
                        <View style={styles.commentItemHeaderLogo}>
                            <Text style={styles.commentItemHeaderLogoText}>Q</Text>
                            <FontAwesome style={styles.commentItemHeaderIcon} name="caret-right" />
                        </View>
                        <Text style={styles.commentItemHeadername}>Quân</Text>
                    </View>
                    <View style={styles.commentItemCt}>
                        <Text style={styles.commentItemCtText}>Sản phẩm này còn không shop?</Text>
                    </View>
                    <View style={styles.commentItemRep}>
                        <Text style={styles.commentItemRepText}>Đức Hào: Chào bạn, nhân viên sẽ liên hệ lại tư vấn cho bạn ạ.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.commentSubmit}>
                <TouchableOpacity onPress={() => setOpenPopCmt(true)} style={styles.commentSubmitButton}>
                    <Text style={styles.commentSubmitText}>Đặt câp hỏi</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={openPopCmt} animationType="slide" transparent={true} onRequestClose={() => { setOpenPopCmt(!openPopCmt); }}>
                <View style={styles.popDetail}>
                    <Pressable onPress={() => setOpenPopCmt(!openPopCmt)} style={styles.popDetailContentBg}>
                    </Pressable>
                    <View style={styles.headerPopDetail}>
                        <Text style={styles.headerPopDetailText}>Đặt câu hỏi</Text>
                        <Pressable onPress={() => setOpenPopCmt(!openPopCmt)}>
                            <Ionicons style={styles.popDetailClose} name="close-outline" />
                        </Pressable>
                    </View>
                    <View style={styles.popDetailList}>
                        <ScrollView>
                            <TextInput style={styles.popArea} multiline={true} placeholder="Nội dung câu hỏi" />
                            <TextInput style={styles.popInput} placeholder="Họ và tên*" />
                            <TextInput style={styles.popInput} placeholder="Email*" />
                            <TouchableOpacity style={styles.popSubmit}>
                                <Text style={styles.popSubmitText}>Gửi câu hỏi</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const ProductCompare = () => {
    return (
        <View style={styles.boxProductCompare}>
            <Text style={styles.boxProductCompareTitle}>So sánh sản phẩm tương đương</Text>
            <View style={styles.boxProductCompareList}>
                <ScrollView horizontal={true}>
                    <View style={styles.boxProductCompareItem}>
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
                                <View style={styles.boxProductCompareSummary}>
                                    <Text style={styles.boxProductCompareSummaryText} numberOfLines={3}>
                                        Công suất: 1.0HP - 9000 BTU
                                        Chế độ vận hành khi ngủ
                                        Loại máy lạnh: 2 chiều
                                    </Text>
                                </View>
                                <View style={styles.boxProductCompareButton}>
                                    <TouchableOpacity>
                                        <Text style={styles.boxProductCompareButtonText}>Xem so sánh chi tiết</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxProductCompareItem}>
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
                                <View style={styles.boxProductCompareSummary}>
                                    <Text style={styles.boxProductCompareSummaryText} numberOfLines={3}>
                                        Công suất: 1.0HP - 9000 BTU
                                        Chế độ vận hành khi ngủ
                                        Loại máy lạnh: 2 chiều
                                    </Text>
                                </View>
                                <View style={styles.boxProductCompareButton}>
                                    <TouchableOpacity>
                                        <Text style={styles.boxProductCompareButtonText}>Xem so sánh chi tiết</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxProductCompareItem}>
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
                                <View style={styles.boxProductCompareSummary}>
                                    <Text style={styles.boxProductCompareSummaryText} numberOfLines={3}>
                                        Công suất: 1.0HP - 9000 BTU
                                        Chế độ vận hành khi ngủ
                                        Loại máy lạnh: 2 chiều
                                    </Text>
                                </View>
                                <View style={styles.boxProductCompareButton}>
                                    <TouchableOpacity>
                                        <Text style={styles.boxProductCompareButtonText}>Xem so sánh chi tiết</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const ProductDetailFixBot = () => {
    return (
        <View style={styles.boxFixDetail}>
            <TouchableOpacity style={styles.boxFixDetailWishList}>
                <Ionicons style={styles.boxFixDetailWishListIcon} name="heart-outline" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxFixDetailBuyGop}>
                <Text style={styles.boxFixDetailBuyTextSt}>Mua trả góp</Text>
                <Text style={styles.boxFixDetailBuyTextNd}>Thủ tục đơn giản</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxFixDetailBuyNow}>
                <Text style={styles.boxFixDetailBuyTextSt}>Mua ngay</Text>
                <Text style={styles.boxFixDetailBuyTextNd}>4.100.000đ</Text>
            </TouchableOpacity>
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
    sliderImgDetail: {
        width: winWidth,
        marginBottom: 20,
    },
    sliderSwipperImgDetail: {
        height: winWidth,
    },
    itemSliderImgDetail: {
        width: winWidth,
        height: winWidth,
        position: 'relative',
        overflow: 'hidden',
    },
    imgSliderImgDetail: {
        position: 'absolute',
        width: winWidth,
        height: winWidth,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
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
    boxDetailContentTop: {
        width: winWidth,
        backgroundColor: '#f2f2f2'
    },
    boxDetailContentTopSt: {
        width: winWidth,
        padding: 10,
        marginBottom: 10,
    },
    boxDetailContentName: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },
    boxDetailContentTopRate: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxDetailContentTopShare: {},
    boxDetailContentTopShareIcon: {
        fontSize: 18,
    },
    boxDetailContentTopShowPop: {
        width: winWidth,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxDetailContentTopTextBold: {
        width: 100,
        fontSize: 16,
        fontWeight: 'bold',
    },
    boxDetailContentTopText: {
        width: winWidth - 160,
    },
    boxDetailContentTopButton: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    boxDetailContentTopButtonIcon: {
        fontSize: 26,
    },
    boxDetailContentTopShowPopNd: {
        width: winWidth,
        paddingHorizontal: 10,
    },
    boxDetailContentTopShowPopNdCt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
    },
    boxDetailContentTopShowPopNdCtLeft: {
        width: winWidth - 60,
    },
    boxDetailContentTopShowPopNdCtTb: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    boxDetailContentTopShowPopNdCtT: {
        fontSize: 14,
        color: '#888888'
    },
    boxDetailContentTopShowPopNdCtImgCt: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    boxDetailContentTopShowPopNdCtImg: {
        marginRight: 10,
    },
    popDetail: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    popDetailContentBg: {
        width: winWidth,
        height: 180,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    popDetailClose: {
        width: 40,
        height: 40,
        fontSize: 20,
        lineHeight: 40,
        textAlign: 'center',
    },
    headerPopDetail: {
        width: winWidth,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerPopDetailText: {
        width: winWidth - 60,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    red: {
        color: '#D8262F',
    },
    popDetailList: {
        width: winWidth,
        padding: 10,
        height: winHeight - 220,
    },
    itemKm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemKmImg: {
        width: 24,
        height: 24,
        marginRight: 10,
        position: 'relative',
    },
    itemKmImgCt: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    itemKmText: {
        width: winWidth - 45,
    },
    itemKmTextLine: {
        width: '100%',
        marginBottom: 10,
    },
    dacTinhItem: {
        marginBottom: 10,
    },
    dacTinhItemText: {
        marginBottom: 5,
    },
    dacTinhItemCt: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dacTinhItemCtIcon: {
        marginRight: 5,
        color: '#888'
    },
    dacTinhItemCtText: {
        color: '#A1A1A1'
    },
    green: {
        color: '#008445'
    },
    dichVuItem: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dichVuItemImg: {
        width: 50,
        marginRight: 10,
    },
    dichVuItemImgCt: {
        maxWidth: '100%'
    },
    dichVuItemText: {
        width: winWidth - 80,
    },
    dichVuItemTextSt: {
        fontSize: 14,
        marginBottom: 2,
    },
    dichVuItemTextNd: {
        fontSize: 14,
        color: '#888'
    },
    listConFig: {
        marginBottom: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    listConFigName: {
        marginBottom: 10,
    },
    listConFigList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    conFigItem: {
        width: (winWidth - 50) / 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        borderRadius: 8,
        position: 'relative',
    },
    conFigItemActive: {
        borderColor: '#D8262F',
    },
    conFigName: {
        fontWeight: '500',
    },
    conFigItemActiveBg: {
        width: 16,
        height: 16,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    conFigItemActiveBgImg: {
        width: '100%',
        height: '100%',
    },
    conFigItemActiveBgIcon: {
        fontSize: 10,
        color: '#fff',
        position: 'absolute',
        top: 5,
        right: 0,
    },
    conFigNamePrice: {},
    selecCount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selecCountText: {
        width: '50%',
        fontSize: 14,
    },
    selecCountContent: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    selecCountButton: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFDFDF',
    },
    selecCountButtonText: {
        fontSize: 24,
    },
    selecCountInput: {
        width: 60,
        height: 40,
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        fontSize: 22,
    },
    comboDetail: {
        width: winWidth,
        padding: 10,
        marginBottom: 10,
    },
    comboDetailText: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    comboDetailList: {
        width: '100%',
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    comboDetailItem: {
        width: 180,
        marginRight: 20,
    },
    comboDetailItemImg: {
        width: 180,
        height: 180,
        position: 'relative',
        marginBottom: 10,
    },
    comboDetailItemImgCt: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    comboDetailItemInfo: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 15,
    },
    comboDetailItemCheck: {
        width: 36,
        height: 36,
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 3,
    },
    comboDetailItemName: {
        width: 134,
    },
    comboDetailItemPrice: {
        width: '100%',
        textAlign: 'center',
        color: '#D8262F',
        fontSize: 14,
        fontWeight: 'bold',
    },
    comboDetailBuy: {},
    comboDetailBuyPrice: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 10,
    },
    comboDetailBuyPriceText: {
        marginRight: 10,
    },
    comboDetailBuyPriceTotal: {
        color: '#D8262F',
        fontWeight: 'bold',
        marginRight: 10,
    },
    comboDetailBuyPriceOldTotal: {
        color: '#888',
        textDecorationLine: 'line-through',
    },
    comboDetailBuyButton: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#D8262F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    comboDetailBuyButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff'
    },
    comboDetailBuyCount: {
        width: '100%',
        textAlign: 'center',
    },
    boxProductDetailSpec: {
        width: winWidth,
        padding: 10,
        marginBottom: 10,
    },
    boxProductDetailSpecTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    boxProductDetailSpecContent: {
        width: '100%',
        maxHeight: 100,
        overflow: 'hidden',
    },
    boxProductDetailSpecContentActive: {
        maxHeight: 'auto',
    },
    boxProductDetailSpecVn: {
        width: '100%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    boxProductDetailSpecVnButton: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        alignItems: 'center',
    },
    boxProductDetailSpecVmText: {
        color: '#D8262F',
        marginRight: 10,
    },
    boxProductDetailSpecVmIcon: {
        color: '#D8262F'
    },
    boxProductReview: {
        width: winWidth,
        padding: 10,
        marginBottom: 10,
    },
    boxProductReviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    boxProductReviewHeaderTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    boxProductReviewHeaderTitleVm: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxProductReviewHeaderTitleVMText: {
        fontSize: 12,
        fontWeight: '500',
        marginRight: 5,
        color: '#D8262F',
    },
    boxProductReviewHeaderTitleVmIcon: {
        color: '#D8262F',
    },
    boxProductReviewHeaderRate: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
    },
    boxProductReviewHeaderRateCt: {
        flexDirection: 'row',
        marginRight: 20,
        alignItems: 'flex-end'
    },
    boxProductReviewHeaderRateTotal: {
        fontWeight: '500',
        fontSize: 18,
    },
    boxProductReviewHeaderRateAll: {
        color: '#777',
    },
    boxProductReviewHeaderRateImg: {},
    reviewList: {},
    reviewItem: {
        marginBottom: 20,
    },
    reviewItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    reviewItemHeaderNameSort: {
        width: 24,
        height: 24,
        borderRadius: 3,
        textAlign: 'center',
        lineHeight: 24,
        backgroundColor: '#DFDFDF',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777777',
        overflow: 'hidden',
        marginRight: 8,
    },
    reviewItemHeadername: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8,
    },
    reviewItemHeaderBuy: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },
    reviewItemHeaderBuyIcon: {
        marginRight: 3,
        color: '#19B000',
    },
    reviewItemHeaderBuyText: {
        color: '#19B000',
    },
    reviewItemHeaderStar: {},
    reviewItemCt: {
        width: '100%',
        marginBottom: 10,
    },
    reviewItemContent: {
        marginBottom: 10,
    },
    reviewItemContentImg: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    reviewItemImg: {
        maxWidth: 64,
        maxHeight: 64,
        marginRight: 10,
    },
    reviewItemOther: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    reviewItemOtherButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    reviewItemOtherButtonIcon: {
        fontSize: 12,
        color: '#D8262F',
        marginRight: 5,
    },
    reviewItemOtherButtonText: {
        fontSize: 12,
        color: '#D8262F',
        fontWeight: '700',
    },
    reviewItemOtherTime: {
        fontSize: 12,
        color: '#888888',
    },
    reviewItemReplyList: {
        width: '100%',
        padding: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 5,
        position: 'relative',
    },
    reviewItemReplyListBefore: {
        fontSize: 24,
        position: 'absolute',
        left: 20,
        top: -16,
        zIndex: 1,
        color: '#F1F1F1',
    },
    reviewItemReplyItem: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    reviewItemReplyItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 10,
    },
    reviewItemReplyItemHeaderLogo: {
        width: 24,
        height: 24,
        backgroundColor: '#D8262F',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    reviewItemReplyItemHeaderLogoImg: {},
    reviewItemReplyItemHeaderName: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    reviewItemReplyItemHeaderQtv: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        backgroundColor: '#D8262F',
        color: '#fff',
        borderRadius: 3,
        overflow: 'hidden',
        fontSize: 10,
    },
    reviewItemReplyItemCt: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    reviewItemReplyItemContent: {},
    boxProductDetailComment: {
        width: winWidth,
        padding: 10,
        marginBottom: 10,
    },
    commentList: {},
    commentItem: {
        marginBottom: 10,
    },
    commentItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    commentItemHeaderLogo: {
        width: 32,
        height: 28,
        position: 'relative',
        borderRadius: 3,
        backgroundColor: '#D8262F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    commentItemHeaderLogoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    commentItemHeaderIcon: {
        fontSize: 24,
        color: '#D8262F',
        zIndex: 1,
        position: 'absolute',
        left: 0,
        bottom: -12,
    },
    commentItemHeadername: {
        fontWeight: 'bold',
    },
    commentItemCt: {
        marginTop: 5,
        marginBottom: 10,
    },
    commentItemCtText: {},
    commentItemRep: {
        marginBottom: 10,
    },
    commentItemRepText: {
        color: '#888'
    },
    commentSubmit: {
        paddingTop: 10,
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    commentSubmitButton: {},
    commentSubmitText: {
        color: '#D8262F',
        fontWeight: '500',
    },
    popArea: {
        width: '100%',
        height: 110,
        borderWidth: 1,
        padding: 10,
        borderColor: '#e1e1e1',
        marginBottom: 10,
        borderRadius: 5,
    },
    popInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#e1e1e1',
        marginBottom: 10,
        borderRadius: 5,
    },
    popSubmit: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#D8262F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popSubmitText: {
        textTransform: 'uppercase',
        color: '#fff'
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
    boxProductCompare: {
        width: winWidth,
        padding: 10,
        marginBottom: 10,
    },
    boxProductCompareTitle: {
        fontSize: 16,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    boxProductCompareList: {},
    boxProductCompareItem: {
        width: 180,
        marginRight: 10,
    },
    boxProductCompareSummary: {
        marginBottom: 10,
    },
    boxProductCompareSummaryText: {
        fontSize: 11,
        color: '#888888'
    },
    boxProductCompareButton: {},
    boxProductCompareButtonText: {
        fontSize: 11,
        color: '#19B000',
    },
    boxFixDetail: {
        width: winWidth,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxFixDetailWishList: {
        width: 40,
        height: 40,
        backgroundColor: '#DFDFDF',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxFixDetailWishListIcon: {
        fontSize: 24,
    },
    boxFixDetailBuyGop: {
        width: (winWidth - 80) / 2,
        height: 40,
        backgroundColor: '#008445',
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxFixDetailBuyTextSt: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
    },
    boxFixDetailBuyTextNd: {
        fontSize: 10,
        color: '#fff'
    },
    boxFixDetailBuyNow: {
        width: (winWidth - 80) / 2,
        height: 40,
        backgroundColor: '#D8262F',
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
