import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import Person from "react-native-bootstrap-icons/icons/person";
import Telephone from "react-native-bootstrap-icons/icons/telephone";
import Envelope from "react-native-bootstrap-icons/icons/envelope";
import Geoalt from "react-native-bootstrap-icons/icons/geo-alt";
import Lock from "react-native-bootstrap-icons/icons/lock";

export default function Register() {
    const [checkedRegis, setCheckedRegis] = useState(false);
    const [checkedRegisBaoMat, setCheckedRegisBaoMat] = useState(false);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.boxRegister}>
                    <Text style={styles.boxRegisterTitle}>Tạo tài khoản Nagakawa</Text>
                    <View style={styles.boxRegisterItem}>
                        <Person width="19" height="19" style={styles.boxRegisterItemIcon} />
                        <TextInput style={styles.boxRegisterItemInput} placeholder="Họ tên*" />
                    </View>
                    <View style={styles.boxRegisterItem}>
                        <Telephone width="19" height="19" style={styles.boxRegisterItemIcon} />
                        <TextInput style={styles.boxRegisterItemInput} placeholder="Số điện thoại*" />
                    </View>
                    <View style={styles.boxRegisterItem}>
                        <Envelope width="19" height="19" style={styles.boxRegisterItemIcon} />
                        <TextInput style={styles.boxRegisterItemInput} placeholder="Email đăng ký*" />
                    </View>
                    <View style={styles.boxRegisterItem}>
                        <Geoalt width="19" height="19" style={styles.boxRegisterItemIcon} />
                        <TextInput style={styles.boxRegisterItemInput} placeholder="Địa chỉ*" />
                    </View>
                    <View style={styles.boxRegisterItem}>
                        <Lock width="19" height="19" style={styles.boxRegisterItemIcon} />
                        <TextInput style={styles.boxRegisterItemInput} placeholder="Mật khẩu*" />
                    </View>
                    <View style={styles.boxRegisterItem}>
                        <Lock width="19" height="19" style={styles.boxRegisterItemIcon} />
                        <TextInput style={styles.boxRegisterItemInput} placeholder="Nhập lại mật khẩu*" />
                    </View>
                    <View style={styles.checkKmRegis}>
                        <View style={styles.checkKmRegisCheck}>
                            <Checkbox status={checkedRegis ? 'checked' : 'unchecked'} onPress={() => setCheckedRegis(!checkedRegis)} />
                        </View>
                        <Text style={styles.checkKmRegisText}>Tôi muốn nhận các thông tin khuyến mãi từ Nagakawa</Text>
                    </View>
                    <TouchableOpacity style={styles.boxLoginSubmit}>
                        <Text style={styles.boxLoginSubmitText}>Đăng ký</Text>
                    </TouchableOpacity>
                    <View style={styles.checkKmRegis}>
                        <View style={styles.checkKmRegisCheck}>
                            <Checkbox status={checkedRegisBaoMat ? 'checked' : 'unchecked'} onPress={() => setCheckedRegisBaoMat(!checkedRegisBaoMat)} />
                        </View>
                        <View style={styles.checkKmRegisText}>
                            <Text>Tôi đồng ý với các</Text>
                            <TouchableOpacity>
                                <Text style={styles.colorGreen}>chính sách bảo mật Nagakawa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxLoginLineChia}>
                    <View style={styles.boxLoginLine}></View>
                    <Text style={styles.boxLoginLineChiaText}>Hoặc</Text>
                    <View style={styles.boxLoginLine}></View>
                </View>
                <View style={styles.loginSocial}>
                    <TouchableOpacity style={[styles.loginSocialItem, styles.loginSocialItemFace]}>
                        <FontAwesome style={styles.loginSocialItemIcon} name="facebook" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginSocialItem, styles.loginSocialItemGoogle]}>
                        <FontAwesome style={styles.loginSocialItemIcon} name="google" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginSocialItem, styles.loginSocialItemZalo]}>
                        <Image style={styles.loginSocialItemImg} source={require('../assets/images/zalo-login.png')} />
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const winWidth = Dimensions.get('window').width; //full width
const winHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxRegister: {
        width: winWidth,
        minHeight: winHeight - 130,
        padding: 10,
        backgroundColor: '#fff',
    },
    boxRegisterTitle: {
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '700'
    },
    boxRegisterItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
        paddingBottom: 5,
        marginBottom: 10,
    },
    boxRegisterItemIcon: {
        marginRight: 10,
        color: '#999'
    },
    boxRegisterItemInput: {
        width: winWidth - 49,
        height: 30,
    },
    checkKmRegis: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    checkKmRegisCheck: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginRight: 10,
    },
    checkKmRegisText: {
        width: winWidth - 66,
    },
    boxLoginSubmit: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#d9282f',
        marginBottom: 20,
    },
    boxLoginSubmitText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    colorGreen: {
        color: '#008445',
    },
    boxLoginLineChia: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxLoginLine: {
        width: 80,
        height: 1,
        backgroundColor: '#e1e1e1',
    },
    boxLoginLineChiaText: {
        marginHorizontal: 5,
        color: '#777',
        fontWeight: '300',
    },
    loginSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSocialItem: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#3B5998',
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSocialItemIcon: {
        fontSize: 18,
        color: '#fff'
    },
    loginSocialItemImg: {
        width: 22,
        height: 24,
    },
    loginSocialItemFace: {},
    loginSocialItemGoogle: {
        backgroundColor: '#DF4A32',
    },
    loginSocialItemZalo: {
        backgroundColor: '#0F8EDD'
    },
});
