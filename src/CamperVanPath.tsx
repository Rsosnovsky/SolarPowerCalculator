import React from 'react';
import { StyleSheet, View} from 'react-native';
import GoBackButton from './components/GoBackButton';


export interface Props {
    navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {

    return (
        <View> 
            <GoBackButton navigation = {navigation}/>
            <h3 style={{marginLeft: 100, marginRight: 100, backgroundColor: 'white', borderRadius: 5}}>What Project are your working on?</h3>
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