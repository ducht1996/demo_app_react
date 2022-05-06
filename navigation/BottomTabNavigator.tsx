import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomePage from '../screens/HomePage';
import ProductList from '../screens/ProductList';
import ProductHotList from '../screens/ProductHotList';
import MenuCategory from '../screens/MenuCategory';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';
import Login from '../screens/Login';
import ProductSearch from '../screens/ProductSearch';
import Register from '../screens/Register';
import ArticleHome from '../screens/ArticleHome';
import ArticleList from '../screens/ArticleList';
import ArticleDetail from '../screens/ArticleDetail';
import AccountHome from '../screens/AccountHome';
import ForgotPassword from '../screens/ForgotPassword';
import CartStep from '../screens/CartStep';
import CartPayInstallment from '../screens/CartPayInstallment';
import AccountIndex from '../screens/AccountIndex';
import SettingAccount from '../screens/SettingAccount';
import AccountOrderList from '../screens/AccountOrderList';
import AccountOrderDetail from '../screens/AccountOrderDetail';
import AccountProductBought from '../screens/AccountProductBought';
import AccountProductViewHistory from '../screens/AccountProductViewHistory';
import AccountProductFavorite from '../screens/AccountProductFavorite';
import AccountProductSave from '../screens/AccountProductSave';
import AccountCoin from '../screens/AccountCoin';
import CustomerInfo from '../screens/CustomerInfo';
import { HeaderHome, HeaderCategory, HeaderProductDetail, HeaderAllOtherPage, HeaderLogin } from '../components/header/HeaderAllPage'


export default function AllNavigator() {
    const colorScheme = useColorScheme();
    return (
        <AllStackNavigation />
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomepageStack = createStackNavigator<TabOneParamList>();

function HomePageNavigator({ navigation }: { navigation: any }) {
    return (
        <HomepageStack.Navigator>
            <HomepageStack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderHome />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 100,
                    },
                    animationEnabled: true,
                }}
            />
        </HomepageStack.Navigator>
    );
}

const MenuStack = createStackNavigator();

function MenuNavigation() {
    return (
        <MenuStack.Navigator>
            <MenuStack.Screen
                name="Menu"
                component={MenuCategory}
                options={{
                    headerTitle: 'Tất cả danh mục',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#D8262F',
                        height: 80,
                    }
                }}
            />
        </MenuStack.Navigator>
    );
}

const ProductListStack = createStackNavigator<TabTwoParamList>();

function ProductListNavigator() {
    return (
        <ProductListStack.Navigator>
            <ProductListStack.Screen
                name="ProductList"
                component={ProductList}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderCategory />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 100,
                    }
                }}
            />
        </ProductListStack.Navigator>
    );
}

const ProductDetailStack = createStackNavigator();

function ProductDetailNavigation() {
    return (
        <ProductDetailStack.Navigator>
            <ProductDetailStack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderProductDetail />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </ProductDetailStack.Navigator>
    );
}

const CartStack = createStackNavigator();

function CartNavigation() {
    return (
        <CartStack.Navigator>
            <CartStack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false
                }}
            />
        </CartStack.Navigator>
    );
}

const CartStepStack = createStackNavigator();

function CartStepNavigation() {
    return (
        <CartStepStack.Navigator>
            <CartStepStack.Screen
                name="CartStep"
                component={CartStep}
                options={{
                    headerShown: false
                }}
            />
        </CartStepStack.Navigator>
    );
}

const CartPayInstallmentStack = createStackNavigator();

function CartPayInstallmentNavigation() {
    return (
        <CartPayInstallmentStack.Navigator>
            <CartPayInstallmentStack.Screen
                name="CartPayInstallment"
                component={CartPayInstallment}
                options={{
                    headerShown: false
                }}
            />
        </CartPayInstallmentStack.Navigator>
    );
}

const AccountIndexStack = createStackNavigator();

function AccountIndexNavigation() {
    return (
        <AccountIndexStack.Navigator>
            <AccountIndexStack.Screen
                name="AccountIndex"
                component={AccountIndex}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderLogin headerTitle={'Đăng nhập'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </AccountIndexStack.Navigator>
    );
}

const LoginStack = createStackNavigator();

function LoginNavigation() {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen
                name="ProductDetail"
                component={Login}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderLogin headerTitle={'Đăng nhập'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </LoginStack.Navigator>
    );
}

const RegisterStack = createStackNavigator();

function RegisterNavigation() {
    return (
        <RegisterStack.Navigator>
            <RegisterStack.Screen
                name="Register"
                component={Register}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderLogin headerTitle={'Đăng ký'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </RegisterStack.Navigator>
    );
}


const ProductSearchStack = createStackNavigator();

function ProductSearchNavigation() {
    return (
        <ProductSearchStack.Navigator>
            <ProductSearchStack.Screen
                name="ProductSearch"
                component={ProductSearch}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderAllOtherPage headerTitle={'Tìm kiếm'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </ProductSearchStack.Navigator>
    );
}

const ArticleHomeStack = createStackNavigator();

function ArticleHomeNavigation() {
    return (
        <ArticleHomeStack.Navigator>
            <ArticleHomeStack.Screen
                name="ArticleHome"
                component={ArticleHome}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderAllOtherPage headerTitle={'Tin tức'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </ArticleHomeStack.Navigator>
    );
}

const ArticleListStack = createStackNavigator();

function ArticleListNavigation() {
    return (
        <ArticleListStack.Navigator>
            <ArticleListStack.Screen
                name="ArticleList"
                component={ArticleList}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderAllOtherPage headerTitle={'Tin tức'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </ArticleListStack.Navigator>
    );
}

const ArticleDetailStack = createStackNavigator();

function ArticleDetailNavigation() {
    return (
        <ArticleDetailStack.Navigator>
            <ArticleDetailStack.Screen
                name="ArticleDetail"
                component={ArticleDetail}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderAllOtherPage headerTitle={'Tin tức'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </ArticleDetailStack.Navigator>
    );
}

const AccountHomeStack = createStackNavigator();

function AccountHomeNavigation() {
    return (
        <AccountHomeStack.Navigator>
            <AccountHomeStack.Screen
                name="AccountHome"
                component={AccountHome}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderAllOtherPage headerTitle={'Tài khoản'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </AccountHomeStack.Navigator>
    );
}

const ProductHotListStack = createStackNavigator();

function ProductHotListNavigation() {
    return (
        <ProductHotListStack.Navigator>
            <ProductHotListStack.Screen
                name="ProductHotList"
                component={ProductHotList}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderAllOtherPage headerTitle={'Sản phẩm nổi bật'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </ProductHotListStack.Navigator>
    );
}

const ForgotPasswordStack = createStackNavigator();

function ForgotPasswordNavigation() {
    return (
        <ForgotPasswordStack.Navigator>
            <ForgotPasswordStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <HeaderLogin headerTitle={'Đăng nhập'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                        height: 80,
                    }
                }}
            />
        </ForgotPasswordStack.Navigator>
    );
}

const SettingAccountStack = createStackNavigator();

function SettingAccountNavigation() {
    return (
        <SettingAccountStack.Navigator>
            <SettingAccountStack.Screen
                name="SettingAccount"
                component={SettingAccount}
                options={{
                    headerShown: false
                }}
            />
        </SettingAccountStack.Navigator>
    );
}

const AccountOrderListStack = createStackNavigator();

function AccountOrderListNavigation() {
    return (
        <AccountOrderListStack.Navigator>
            <AccountOrderListStack.Screen
                name="AccountOrderList"
                component={AccountOrderList}
                options={{
                    headerShown: false
                }}
            />
        </AccountOrderListStack.Navigator>
    );
}

const AccountOrderDetailStack = createStackNavigator();

function AccountOrderDetailNavigation() {
    return (
        <AccountOrderDetailStack.Navigator>
            <AccountOrderDetailStack.Screen
                name="AccountOrderDetail"
                component={AccountOrderDetail}
                options={{
                    headerShown: false
                }}
            />
        </AccountOrderDetailStack.Navigator>
    );
}

const AccountProductBoughtStack = createStackNavigator();

function AccountProductBoughtNavigation() {
    return (
        <AccountProductBoughtStack.Navigator>
            <AccountProductBoughtStack.Screen
                name="AccountProductBought"
                component={AccountProductBought}
                options={{
                    headerShown: false
                }}
            />
        </AccountProductBoughtStack.Navigator>
    );
}

const AccountProductViewHistoryStack = createStackNavigator();

function AccountProductViewHistoryNavigation() {
    return (
        <AccountProductViewHistoryStack.Navigator>
            <AccountProductViewHistoryStack.Screen
                name="AccountProductViewHistory"
                component={AccountProductViewHistory}
                options={{
                    headerShown: false
                }}
            />
        </AccountProductViewHistoryStack.Navigator>
    );
}

const AccountProductFavoriteStack = createStackNavigator();

function AccountProductFavoriteNavigation() {
    return (
        <AccountProductFavoriteStack.Navigator>
            <AccountProductFavoriteStack.Screen
                name="AccountProductFavorite"
                component={AccountProductFavorite}
                options={{
                    headerShown: false
                }}
            />
        </AccountProductFavoriteStack.Navigator>
    );
}

const AccountProductSaveStack = createStackNavigator();

function AccountProductSaveNavigation() {
    return (
        <AccountProductSaveStack.Navigator>
            <AccountProductSaveStack.Screen
                name="AccountProductSave"
                component={AccountProductSave}
                options={{
                    headerShown: false
                }}
            />
        </AccountProductSaveStack.Navigator>
    );
}

const AccountCoinStack = createStackNavigator();

function AccountCoinNavigation() {
    return (
        <AccountCoinStack.Navigator>
            <AccountCoinStack.Screen
                name="AccountCoin"
                component={AccountCoin}
                options={{
                    headerShown: false
                }}
            />
        </AccountCoinStack.Navigator>
    );
}

const CustomerInfoStack = createStackNavigator();

function CustomerInfoNavigation() {
    return (
        <CustomerInfoStack.Navigator>
            <CustomerInfoStack.Screen
                name="CustomerInfo"
                component={CustomerInfo}
                options={{
                    headerShown: false
                }}
            />
        </CustomerInfoStack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Trang chủ"
            tabBarOptions={{ activeTintColor: '#D8262F' }}>
            <BottomTab.Screen
                name="Trang chủ"
                component={HomePageNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Danh mục"
                component={MenuNavigation}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="apps-outline" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Giỏ hàng"
                component={CartNavigation}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="cart-outline" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Chat"
                component={ProductListNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="chatbubble-ellipses-outline" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Tài khoản"
                component={AccountIndexNavigation}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

const AllStack = createStackNavigator();
function AllStackNavigation() {
    return (
        <AllStack.Navigator initialRouteName="Home">
            <AllStack.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="Menu"
                component={MenuNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ProductCategory"
                component={ProductListNavigator}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ProductDetail"
                component={ProductDetailNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="Cart"
                component={CartNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="CartStep"
                component={CartStepNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="CartPayInstallment"
                component={CartPayInstallmentNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="Login"
                component={LoginNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ProductSearch"
                component={ProductSearchNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ProductHotListNav"
                component={ProductHotListNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="Register"
                component={RegisterNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ArticleHome"
                component={ArticleHomeNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ArticleList"
                component={ArticleListNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ArticleDetail"
                component={ArticleDetailNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountHome"
                component={AccountHomeNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountIndex"
                component={AccountIndexNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="ForgotPassword"
                component={ForgotPasswordNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="SettingAccount"
                component={SettingAccountNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountOrderList"
                component={AccountOrderListNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountOrderDetail"
                component={AccountOrderDetailNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountProductBought"
                component={AccountProductBoughtNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountProductViewHistory"
                component={AccountProductViewHistoryNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountProductFavorite"
                component={AccountProductFavoriteNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountProductSave"
                component={AccountProductSaveNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="AccountCoin"
                component={AccountCoinNavigation}
                options={{ headerShown: false }}
            />
            <AllStack.Screen
                name="CustomerInfo"
                component={CustomerInfoNavigation}
                options={{ headerShown: false }}
            />
        </AllStack.Navigator>
    );
}
