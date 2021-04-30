import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { Icon, InlineIcon } from '@iconify/react';
import arrowBackOutline from '@iconify-icons/ion/arrow-back-outline';



const NextButton: React.FC<Props> = () => {

    return (
            <View style={styles.Arrow_icon_style}>
                <TouchableOpacity onPress={goBack}>
                    <Icon icon={arrowBackOutline} width = "25" color = 'white'/>
                </TouchableOpacity>
            </View>
        );
    }
    
    export default NextButton;

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