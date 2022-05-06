import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';

export default function SettingAccount() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxSettingAccountAll}>
                <HeaderAll />

                <ContentSettingAccount />
            </View>
        </SafeAreaView>
    );
}

const HeaderAll = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerAll}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.navigate('AccountHome')}>
                <FontAwesome style={styles.goBackIcon} name="angle-left" />
            </TouchableOpacity>
            <Text style={styles.headerAllTitle}>Cài đặt</Text>
        </View>
    )
}

const ContentSettingAccount = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    return (
        <View style={styles.boxSettingAccount}>
            <View style={styles.boxSettingAccountList}>
                <View style={styles.boxSettingAccountListToggleItem}>
                    <Text style={styles.boxSettingAccountItemTextToggle}>Cho phép nhận  thông báo</Text>
                    <Switch style={styles.boxSettingAccountItemToggle} value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
                </View>
            </View>
            <View style={styles.boxSettingAccountList}>
                <View style={styles.boxSettingAccountItem}>
                    <TouchableOpacity>
                        <Text style={styles.boxSettingAccountItemText}>Chính sách</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxSettingAccountItem}>
                    <TouchableOpacity>
                        <Text style={styles.boxSettingAccountItemText}>Trung tâm hỗ trợ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxSettingAccountItem}>
                    <TouchableOpacity>
                        <Text style={styles.boxSettingAccountItemText}>Phản hồi</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxSettingAccountItem}>
                    <TouchableOpacity>
                        <Text style={styles.boxSettingAccountItemText}>Quy chế hoạt động</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxSettingAccountItem}>
                    <TouchableOpacity>
                        <Text style={styles.boxSettingAccountItemText}>Giới thiệu Nagakawa</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.boxSettingAccountList, styles.boxSettingAccountListLogout]}>
                <TouchableOpacity style={styles.boxSettingAccountLogout}>
                    <Text style={styles.boxSettingAccountLogoutText}>Đăng xuất</Text>
                </TouchableOpacity>
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
    headerAll: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    goBack: {
        width: 50,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackIcon: {
        fontSize: 24,
    },
    headerAllTitle: {
        fontWeight: '700',
        width: winWidth - 70,
        textAlign: 'center'
    },
    boxSettingAccountAll: {
        width: winWidth,
        height: winHeight,
        paddingTop: 30,
    },
    boxSettingAccount: {
        width: winWidth,
        backgroundColor: '#f2f2f2',
        height: '100%'
    },
    boxSettingAccountList: {
        marginBottom: 10,
    },
    boxSettingAccountListToggleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },
    boxSettingAccountItemTextToggle: {},
    boxSettingAccountItemToggle: {},
    boxSettingAccountItem: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        padding: 10,
    },
    boxSettingAccountItemText: {},
    boxSettingAccountListLogout: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    boxSettingAccountLogout: {
        width: '100%',
        height: 40,
        borderColor: '#D8262F',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    boxSettingAccountLogoutText: {
        fontWeight: '700',
        fontSize: 14,
        textTransform: 'uppercase',
        color: '#D8262F',
    },
});
