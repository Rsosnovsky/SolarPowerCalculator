import React from 'react';
import { StyleSheet, View} from 'react-native';

export interface Props {
    text: string;
}

const Title: React.FC<Props> = (props) => {

    return (
    
            <View style={[styles.font]}>
                <h2>{props.text}</h2>
            </View>
    
        );
        }
    
    export default Title;

// styles
const styles = StyleSheet.create({
    font: {
        alignSelf:'center'
        
        },
   
    });