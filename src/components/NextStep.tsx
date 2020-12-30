import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';

export interface Props {
    Location: number,
    setuserLocation: any,
    Data: any,
    setData: any
}

const NextStep: React.FC<Props> = ({Location, setuserLocation, Data, setData}) => {
    function goToNextPage() {

          switch(Location){
            case 0:
                //Checks id the user highlighed an option, if yes move on
                var moveOn = false 
                Object.entries(Data.step1).map(([key, value]) => {
                    if(value['highlight']){
                        moveOn = true
                        setData((prevState) => ({
                                ...prevState,
                                step2: {
                                  ...prevState.step2,
                                    selected: value['title']
                                }
                              })
                        )
                    }
                })

                if(moveOn){
                    setuserLocation(Location + 1)
                }else{
                    Alert; alert('To get started please select your project');
                }
                
            case 1:
                setuserLocation(Location + 1)
                break;
            
            case 2:
                console.log('Nothing happens')
                break;
        }
    }

    return (
        
        <TouchableOpacity  onPress={goToNextPage}>
            <Text style={[styles.NextStyling]}>Next</Text>
        </TouchableOpacity>
        
        );
        }
    
    export default NextStep;

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