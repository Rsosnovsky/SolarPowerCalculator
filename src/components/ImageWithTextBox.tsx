import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export interface Props {
    source?: any;
    text?: string;
    highlight?: boolean;
     
}

const ImageWithTextBox: React.FC<Props> = ({source, text, highlight, settest}) => {


    return (
        
        <View style={[styles.Container]}>
                <Image source={source} style={{ width: 250, height: 250 }} />  
                <h4>{text}</h4>
                {(highlight === true)? 
                <View style={styles.boxStyle}/>
                :<View/>
                }
                
        </View>
   

        );
        }
    
    export default ImageWithTextBox;

// styles
const styles = StyleSheet.create({
    Container: {
        width: 250,
        height: 300,
        display: "flex",
        alignItems: 'center',
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