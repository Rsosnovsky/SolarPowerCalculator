import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export interface Props {
    source?: any;
    text?: string;
}

const ImageWithTextBox: React.FC<Props> = ({source, text}) => {

    return (
        
            <TouchableOpacity style={[styles.Container]}>
                   <Image source={source} style={{ width: 250, height: 250 }} />  
                   <h4>{text}</h4>
            </TouchableOpacity>
    
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
   
    });