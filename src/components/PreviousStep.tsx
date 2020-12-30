import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { Icon, InlineIcon } from '@iconify/react';
import arrowBackOutline from '@iconify-icons/ion/arrow-back-outline';


export interface Props {
    Location: any,
    setuserLocation: any
}

const PreviousStep: React.FC<Props> = ({Location, setuserLocation }) => {
    const onPressBack =()=>{
        setuserLocation(Location - 1)
    }

    return (
            <View style={styles.Arrow_icon_style}>
                <TouchableOpacity onPress = {()=>onPressBack()}>
                    <Icon icon={arrowBackOutline} width = "25" color = 'white'/>
                </TouchableOpacity>
            </View>
        );
    }
    
    export default PreviousStep;

// styles
const styles = StyleSheet.create({
    Arrow_icon_style: {
        margin: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#FF9506',
        alignItems: 'center',
        marginLeft: 100,
        borderRadius: 25,
        width: 50,
        padding: 10
        },
   
    });