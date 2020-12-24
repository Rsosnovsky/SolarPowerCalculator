import React from 'react';
import { StyleSheet, View} from 'react-native';

export interface Props {
    test?: boolean;
}

const ImageWithTextBox: React.FC<Props> = (props) => {

    return (
    
            <View style={[styles.DetailedViewScreen_icon]}>
            
            </View>
    
        );
        }
    
    export default ImageWithTextBox;

// styles
const styles = StyleSheet.create({
    DetailedViewScreen_icon: {
        width: 250,
        height: 250,
        backgroundColor: 'red'
        
        },
   
    });