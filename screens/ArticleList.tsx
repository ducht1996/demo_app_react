import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ArticleList() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ListArticleCategory />

                <BoxArticleList />

                <Paging />

                <ArticleBestView />

                <ProductArticle />

                <BoxArticleListRight />
            </ScrollView>
        </SafeAreaView>
    );
}

const ListArticleCategory = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxListArticleCategory}>
            <TouchableOpacity onPress={() => navigation.navigate('ArticleList')} style={[styles.lacItem, styles.lacItemActive]}>
                <Text style={[styles.lacItemText, styles.lacItemTextActive]}>Tin tức mới</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ArticleList')} style={styles.lacItem}>
                <Text style={styles.lacItemText}>Tin sản phẩm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ArticleList')} style={styles.lacItem}>
                <Text style={styles.lacItemText}>Tin doanh nghiệp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ArticleList')} style={styles.lacItem}>
                <Text style={styles.lacItemText}>Tin khuyến mại</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ArticleList')} style={styles.lacItem}>
                <Text style={styles.lacItemText}>Kinh nghiệm mẹo vặt</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ArticleList')} style={styles.lacItem}>
                <Text style={styles.lacItemText}>Video</Text>
            </TouchableOpacity>
        </View>
    )
}

const BoxArticleList = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.boxArticleList}>
            <View style={styles.boxArticleListList}>
                <View style={styles.nItemFirst}>
                    <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail')}>
                        <View style={styles.nItemFirstImg}>
                            <Image style={styles.nImg} source={require('../assets/images/news.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.nItemFirstInfo}>
                        <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail')}>
                            <Text style={styles.nNameSt} numberOfLines={3}>Những đặc điểm nổi bật của Máy rửa bát Nagakawa bạn cần biết!</Text>
                        </TouchableOpacity>
                        <View style={styles.nTimeView}>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="clock-o" />
                                <Text style={styles.nTimeViewText}>04-02-2021, 3:43 pm</Text>
                            </View>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="eye" />
                                <Text style={styles.nTimeViewText}>56</Text>
                            </View>
                        </View>
                        <View style={styles.nSum}>
                            <Text style={styles.nSumText} numberOfLines={4}>Có thể nói, máy rửa bát thực sự đã mang tới một cuộc cách mạng trong căn bếp khi giúp cho người người, nhà nhà tiết kiệm được rất nhiều thời gian, công sức cũng như kinh phí hơn sau mỗi bữa ăn hàng ngày. "Nhà sạch thì mát - Bát</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.nItem}>
                    <View style={styles.nItemImg}>
                        <Image style={styles.nImg} source={require('../assets/images/news.png')} />
                    </View>
                    <View style={styles.nItemInfo}>
                        <Text style={styles.nName} numberOfLines={3}>Những đặc điểm nổi bật của Máy rửa bát Nagakawa bạn cần biết!</Text>
                        <View style={styles.nTimeView}>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="clock-o" />
                                <Text style={styles.nTimeViewText}>04-02-2021, 3:43 pm</Text>
                            </View>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="eye" />
                                <Text style={styles.nTimeViewText}>56</Text>
                            </View>
                        </View>
                        <View style={styles.nSum}>
                            <Text style={styles.nSumText} numberOfLines={4}>Có thể nói, máy rửa bát thực sự đã mang tới một cuộc cách mạng trong căn bếp khi giúp cho người người, nhà nhà tiết kiệm được rất nhiều thời gian, công sức cũng như kinh phí hơn sau mỗi bữa ăn hàng ngày. "Nhà sạch thì mát - Bát</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.nItem}>
                    <View style={styles.nItemImg}>
                        <Image style={styles.nImg} source={require('../assets/images/news.png')} />
                    </View>
                    <View style={styles.nItemInfo}>
                        <Text style={styles.nName} numberOfLines={3}>Những đặc điểm nổi bật của Máy rửa bát Nagakawa bạn cần biết!</Text>
                        <View style={styles.nTimeView}>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="clock-o" />
                                <Text style={styles.nTimeViewText}>04-02-2021, 3:43 pm</Text>
                            </View>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="eye" />
                                <Text style={styles.nTimeViewText}>56</Text>
                            </View>
                        </View>
                        <View style={styles.nSum}>
                            <Text style={styles.nSumText} numberOfLines={4}>Có thể nói, máy rửa bát thực sự đã mang tới một cuộc cách mạng trong căn bếp khi giúp cho người người, nhà nhà tiết kiệm được rất nhiều thời gian, công sức cũng như kinh phí hơn sau mỗi bữa ăn hàng ngày. "Nhà sạch thì mát - Bát</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const Paging = () => {
    return (
        <View style={styles.paging}>
            <View style={styles.pagingContent}>
                <TouchableOpacity style={[styles.pagingItem, styles.pagingItemActive]}>
                    <Text style={[styles.pagingItemText, styles.pagingItemTextActive]}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagingItem}>
                    <Text style={styles.pagingItemText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagingItem}>
                    <Text style={styles.pagingItemText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagingItem}>
                    <Text style={styles.pagingItemText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagingItem}>
                    <Text style={styles.pagingItemText}>5</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ArticleBestView = () => {
    return (
        <View style={styles.articleBestView}>
            <View style={styles.articleBestViewContent}>
                <Text style={styles.articleBestViewTitle}>Tin Xem nhiều</Text>
                <View style={styles.articleBestViewList}>
                    <View style={styles.articleBestViewItem}>
                        <View style={[styles.articleBestViewMun, styles.articleBestViewMunSt]}>
                            <Text style={[styles.articleBestViewMunText, styles.white]}>1</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                    <View style={styles.articleBestViewItem}>
                        <View style={[styles.articleBestViewMun, styles.articleBestViewMunNd]}>
                            <Text style={[styles.articleBestViewMunText, styles.white]}>2</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                    <View style={styles.articleBestViewItem}>
                        <View style={[styles.articleBestViewMun, styles.articleBestViewMunRd]}>
                            <Text style={[styles.articleBestViewMunText, styles.white]}>3</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                    <View style={styles.articleBestViewItem}>
                        <View style={styles.articleBestViewMun}>
                            <Text style={styles.articleBestViewMunText}>4</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                    <View style={styles.articleBestViewItem}>
                        <View style={styles.articleBestViewMun}>
                            <Text style={styles.articleBestViewMunText}>5</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                    <View style={styles.articleBestViewItem}>
                        <View style={styles.articleBestViewMun}>
                            <Text style={styles.articleBestViewMunText}>6</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                    <View style={styles.articleBestViewItem}>
                        <View style={styles.articleBestViewMun}>
                            <Text style={styles.articleBestViewMunText}>7</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                    <View style={styles.articleBestViewItem}>
                        <View style={styles.articleBestViewMun}>
                            <Text style={styles.articleBestViewMunText}>8</Text>
                        </View>
                        <Text style={styles.articleBestViewName} numberOfLines={2}>Chương trình khuyến mãi dành riêng cho Khách hàng VinID mua hàng tại Nagakawa Shop</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const ProductArticle = () => {
    return (
        <View style={styles.boxProductArticle}>
            <Text style={styles.boxProductArticleTitle}>Sản phẩm nổi bật</Text>
            <View style={styles.boxProductArticleList}>
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
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const BoxArticleListRight = () => {
    return (
        <View style={styles.boxArticleList}>
            <View style={styles.boxArticleListTitle}>
                <Text style={styles.boxArticleListTitleName}>Tin khuyến mãi</Text>
                <TouchableOpacity>
                    <Text style={styles.boxArticleListTitleVm}>Xem tất cả</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxArticleListList}>
                <View style={styles.nItemFirst}>
                    <View style={styles.nItemFirstImg}>
                        <Image style={styles.nImg} source={require('../assets/images/news.png')} />
                    </View>
                    <View style={styles.nItemFirstInfo}>
                        <Text style={styles.nNameSt} numberOfLines={3}>Những đặc điểm nổi bật của Máy rửa bát Nagakawa bạn cần biết!</Text>
                        <View style={styles.nTimeView}>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="clock-o" />
                                <Text style={styles.nTimeViewText}>04-02-2021, 3:43 pm</Text>
                            </View>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="eye" />
                                <Text style={styles.nTimeViewText}>56</Text>
                            </View>
                        </View>
                        <View style={styles.nSum}>
                            <Text style={styles.nSumText} numberOfLines={4}>Có thể nói, máy rửa bát thực sự đã mang tới một cuộc cách mạng trong căn bếp khi giúp cho người người, nhà nhà tiết kiệm được rất nhiều thời gian, công sức cũng như kinh phí hơn sau mỗi bữa ăn hàng ngày. "Nhà sạch thì mát - Bát</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.nItem}>
                    <View style={styles.nItemImg}>
                        <Image style={styles.nImg} source={require('../assets/images/news.png')} />
                    </View>
                    <View style={styles.nItemInfo}>
                        <Text style={styles.nName} numberOfLines={3}>Những đặc điểm nổi bật của Máy rửa bát Nagakawa bạn cần biết!</Text>
                        <View style={styles.nTimeView}>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="clock-o" />
                                <Text style={styles.nTimeViewText}>04-02-2021, 3:43 pm</Text>
                            </View>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="eye" />
                                <Text style={styles.nTimeViewText}>56</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.nItem}>
                    <View style={styles.nItemImg}>
                        <Image style={styles.nImg} source={require('../assets/images/news.png')} />
                    </View>
                    <View style={styles.nItemInfo}>
                        <Text style={styles.nName} numberOfLines={3}>Những đặc điểm nổi bật của Máy rửa bát Nagakawa bạn cần biết!</Text>
                        <View style={styles.nTimeView}>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="clock-o" />
                                <Text style={styles.nTimeViewText}>04-02-2021, 3:43 pm</Text>
                            </View>
                            <View style={styles.nTimeViewCt}>
                                <FontAwesome style={styles.nTimeViewIcon} name="eye" />
                                <Text style={styles.nTimeViewText}>56</Text>
                            </View>
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
    boxListArticleCategory: {
        width: winWidth,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    lacItem: {
        width: winWidth / 2 - 15,
        marginBottom: 10,
        height: 34,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
    },
    lacItemActive: {
        backgroundColor: '#ec3237',
    },
    lacItemText: {},
    lacItemTextActive: {
        color: '#fff'
    },
    BoxArticleNew: {
        width: winWidth,
        padding: 10,
    },
    BoxArticleNewItem: {
        width: '100%',
        position: 'relative',
    },
    BoxArticleNewItemImg: {
        width: '100%',
        position: 'relative',
        height: winWidth * 65 / 100,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BoxArticleNewItemImage: {
        height: '100%'
    },
    BoxArticleNewItemInfo: {
        width: '100%',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    BoxArticleNewItemName: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    BoxArticleNewItemTime: {
        color: '#999'
    },
    boxArticleList: {
        width: winWidth,
        padding: 10,
    },
    boxArticleListTitle: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxArticleListTitleName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d9282f',
        textTransform: 'uppercase',
    },
    boxArticleListTitleVm: {},
    boxArticleListList: {
    },
    nItemFirst: {
        marginBottom: 20,
        width: '100%',
    },
    nItemFirstImg: {
        width: '100%',
        position: 'relative',
        height: winWidth * 65 / 100,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    nImg: {
        height: '100%',
    },
    nItemFirstInfo: {
        width: '100%',
    },
    nNameSt: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    nTimeView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    nTimeViewCt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    nTimeViewIcon: {
        marginRight: 5,
        color: '#999',
    },
    nTimeViewText: {
        color: '#999'
    },
    nSum: {},
    nSumText: {},
    nItem: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
    },
    nItemImg: {
        width: 110,
        position: 'relative',
        height: 70,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    nItemInfo: {
        width: winWidth - 140,
    },
    nName: {
        marginBottom: 10,
        fontWeight: 'bold',
    },
    articleBestView: {
        width: winWidth,
        padding: 10,
    },
    articleBestViewContent: {
        width: '100%',
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    articleBestViewTitle: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    articleBestViewList: {
        backgroundColor: 'rgba(0,0,0,0)',
        paddingTop: 10,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        width: '100%',
    },
    articleBestViewItem: {
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    articleBestViewMun: {
        width: 36,
        height: 36,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        marginRight: 10,
    },
    articleBestViewMunText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#999',
    },
    articleBestViewName: {
        width: winWidth - 90,
    },
    articleBestViewMunSt: {
        backgroundColor: '#f25630'
    },
    articleBestViewMunNd: {
        backgroundColor: '#cc7935'
    },
    articleBestViewMunRd: {
        backgroundColor: '#ccb135'
    },
    white: {
        color: '#fff',
    },
    boxProductBestSaleItemStTwo: {
        width: '100%',
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
    boxProductArticle: {
        width: winWidth,
        padding: 10,
    },
    boxProductArticleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    boxProductArticleList: {
        width: '100%',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    paging: {
        width: winWidth,
        padding: 10,
    },
    pagingContent: {
        width: '100%',
        height: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    pagingItem: {
        width: 40,
        height: 40,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginHorizontal: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagingItemActive: {
        borderColor: '#d9282f',
        backgroundColor: '#d9282f',
    },
    pagingItemText: {},
    pagingItemTextActive: {
        color: '#fff',
    },
});
