import React from 'react';
import { Button, ScrollView, StyleSheet, View} from 'react-native';

//components
import ImageWithTextBox from './components/ImageWithTextBox';
import NextButton from './components/NextButton';

export interface Props {
    navigation: any;
}


import {uploadData} from './config/firebase';

//images
import camperVan from '../assets/camperVan.png';
import boat from '../assets/boat.png';
import cabin from '../assets/cabin.png';
import otherPro from '../assets/otherPro.png';

const HomeScreen: React.FC<Props> = ({navigation}) => {

   

    const onPressLearnMore = () =>{
        console.log('click');
        uploadData();
    }
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

                <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />
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