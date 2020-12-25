import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

//logo
import { Asset } from 'expo-asset';


//define logo
const logo = Asset.fromModule(require('../../assets/logo.png')).uri;

const Header: React.FC = () => {

    return (
        <View>
            <View style={[styles.HeaderBackground]}>
                <Image source={logo} alt="Logo" style={[styles.logo]}/>    
            </View>
        </View>
        );
        }
    
    export default Header;

// styles
const styles = StyleSheet.create({
    HeaderBackground: {
        paddingHorizontal: 0,
        height: 75,
        backgroundColor: '#3A2A2F',
        display: 'flex',
        justifyContent: 'center'
        },
    logo: {
        width: 75,
        height: 75,
        alignSelf: 'center'
    }
   
    });