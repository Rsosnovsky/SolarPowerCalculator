import React from 'react';
import { StyleSheet, View} from 'react-native';

//components
import ImageWithTextBox from './components/ImageWithTextBox';
import NextButton from './components/NextButton'

export interface Props {
    navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {

    return (
        <View>
            <h3 style={{marginLeft: 100, marginRight: 100, backgroundColor: 'white', borderRadius: 5}}>What Project are your working on?</h3>
            <View style={[styles.Contair]}>
                <ImageWithTextBox/>
                <ImageWithTextBox/>
                <ImageWithTextBox/> 
            </View>
            <NextButton navigation = {navigation} screen= "CamperVan"/>
        </View>
        );
    }
    
    export default HomeScreen ;

// styles
const styles = StyleSheet.create({
    Contair: {
        flexDirection: 'row',
        justifyContent: 'space-around'

        },
   
    });