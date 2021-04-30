import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export interface Props {
    source?: any;
    text?: string;
    highlight?: boolean;
     
}

const SelectBox: React.FC<Props> = ({source, text, highlight}) => {


    return (
        
        <View style={styles.Container}>
            
                <Image source={{uri : source}} style={styles.imgSyl} />  
                <h4>{text}</h4>
                {(highlight === true)? 
                <View style={styles.boxStyle}/>
                :<View/>
                }
             
        </View>
   

        );
        }
    
    export default SelectBox;

// styles
const styles = StyleSheet.create({
    Container: {
        minHeight: 300,
        flex: 1,
        alignItems: 'center',
        },

    imgSyl:{
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    boxStyle: {
        backgroundColor: '#FF9506', 
        width: "100%", 
        height:"100%", 
        position: 'absolute', 
        opacity:.1, 
        borderRadius: 5
    }

    });