import React, { useContext, useEffect } from 'react';
import { StyleSheet, View,Text, ScrollView} from 'react-native';

import ProductRecBox from './components/ProductRecBox';

//temp data pull
import {DATAB} from './datapull/scriptPull';


export interface Props {
    navigation: any;
    route: any;
}

const ResultsScreen: React.FC<Props> = ({route, navigation}) => {

    //upon page open, get the survay data from the previous page, 
    //pull the asssoicated proucts from the DB
    useEffect(() => {
        const Survay  = DATAB /*route.params*///use this to pull from previous;
        
        let TotalWatt = 0
        for (let i = 0; i < Survay[1].questions.length; i++) {
            const element = Survay[1].questions[i];
            TotalWatt = element.Watt*element.valU*element.valH + TotalWatt
        }

        

    }, [])

    return (
        <ScrollView>
        <View>
            <View style ={styles.Contair}> 
                <ProductRecBox />
                <ProductRecBox />
                <ProductRecBox />
            </View>
            <View style= {{margin: 10}}>
                <Text>This Is What You'll Need</Text> 

                <Text>Solar Panels: You will need</Text>
                <Text>Min Battery Capacity</Text>
                <Text>Charge Contoller</Text>
                <Text>Fuses</Text>
            </View>
        </View>
        </ScrollView>
        );
    }
    
    export default ResultsScreen ;

// styles
const styles = StyleSheet.create({
    Contair: {
        flexDirection: 'row',
        justifyContent: 'space-around'

        },
   
    });