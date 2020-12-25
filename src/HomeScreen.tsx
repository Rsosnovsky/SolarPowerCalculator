import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';

//components
import ImageWithTextBox from './components/ImageWithTextBox';
import NextButton from './components/NextButton'

export interface Props {
    navigation: any;
}

//images
import camperVan from '../assets/camperVan.png';
import boat from '../assets/boat.png';
import cabin from '../assets/cabin.png';
import otherPro from '../assets/otherPro.png';

const HomeScreen: React.FC<Props> = ({navigation}) => {

    return (
        <ScrollView>
            <h3 style={{marginLeft: 100, marginRight: 100, backgroundColor: 'white', borderRadius: 5}}>What Project are your working on?</h3>
                <View style={[styles.Contair]}>
                    <ImageWithTextBox source = {camperVan} text= {"Camper/Van/RV"}/>
                    <ImageWithTextBox source = {boat} text = {"Boat"}/>
                    <ImageWithTextBox source = {cabin} text = {"Cabin"}/>
                    <ImageWithTextBox source = {otherPro} text = {"Other"}/> 
                </View>
                <NextButton navigation = {navigation} screen= "CamperVan"/>
        </ScrollView>
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