import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

export interface Props {
    navigation: any,
    screen: string
}

const NextButton: React.FC<Props> = ({navigation, screen}) => {
    function goToNextPage() {
        navigation.navigate(screen);
      }

    return (
        
        <TouchableOpacity  onPress={goToNextPage}>
            <Text style={[styles.NextStyling]}>Next</Text>
        </TouchableOpacity>
        
        );
        }
    
    export default NextButton;

// styles
const styles = StyleSheet.create({
    NextStyling: {
        width: 100,
        backgroundColor: '#FF9506',
        alignSelf: 'center',
        margin: 5,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 20,
        padding: 10,
        color: 'white'  
        },
   
    });