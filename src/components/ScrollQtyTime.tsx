import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';
import Slider from '@react-native-community/slider';


export interface Props {
    title: string,
    img: string,
    setData: any,
    qty: any,
    time: any,
    message: any,
    DC: any
}

const ScrollQtyTime: React.FC<Props> = ({title, img, setData, qty, time, message, DC}) => {
    const [highlightDC, sethighlightDC] = useState('')
    const [highlightAC, sethighlightAC] = useState('')
    
    //will highlight the DC or AC base on the DC state
    useEffect(() => {
        console.log(DC)
       if(DC === true){
        console.log('true ran')
        sethighlightDC('#FF9506')
        sethighlightAC('white')
        
       }else if (DC === false){
        console.log('false ran')
        sethighlightDC('white')
        sethighlightAC('#FF9506')
       }
        
        
        return () => {
            
        }
    }, [])

    //updates the time as users scroll through the bar
    const settime =(newTime: any)=>{
        setData((prevState: { step2: { survyQuestions: any; }; }) => ({
            ...prevState,
            step2: {
              ...prevState.step2,
              survyQuestions: {
                    ...prevState.step2.survyQuestions,
                    [title]:{
                        title: title,
                        img: img,
                        qty: qty,
                        message: '',
                        time: newTime

                    }  
                }
            }
          }));
    }

    //updates the qty in the the main data set as user drags the bar
    const setqty =(newQty: any)=>{
        setData((prevState: { step2: { survyQuestions: any; }; }) => ({
            ...prevState,
            step2: {
              ...prevState.step2,
              survyQuestions: {
                    ...prevState.step2.survyQuestions,
                    [title]:{
                        title: title,
                        img: img,
                        qty: newQty,
                        message: '',
                        time: time,
                        DC: DC

                    }  
                }
            }
          }));
    }

    //this will update the DC variable in the overall object
    async function setDCinData (DCState: any){
        setData((prevState: { step2: { survyQuestions: any; }; }) => ({
            ...prevState,
            step2: {
              ...prevState.step2,
              survyQuestions: {
                    ...prevState.step2.survyQuestions,
                    [title]:{
                        title: title,
                        img: img,
                        qty: qty,
                        message: '',
                        time: time,
                        DC: DCState
                    }  
                }
            }
          }));
    }

    const handleDCPress = async ()=>{
        await setDCinData(true)
        sethighlightDC('#FF9506')
        sethighlightAC('white')
    }

    const handleACPress =async ()=>{
        await setDCinData(false)
        sethighlightDC('white')
        sethighlightAC('#FF9506')
    }

    return (
        <View style={[styles.Container]}>
            <Text style = {{textAlign: 'center', flex: 1, fontWeight: "bold", textAlignVertical: 'center', borderRadius: 10}}> {title.charAt(0).toUpperCase() + title.slice(1)}</Text>
            <View style = {{display: 'flex', flexDirection:'row'}}>
                <View style={[styles.ContainerTextImg]}> 
                    <View style = {{flex: 5}}>
                        <ImageBackground source={{uri: img}}
                        style={{alignSelf: 'center', width: 100, height: 100}} />
                    </View>
                </View>

                <View style = {{display: 'flex', flexDirection: 'column', width: "75%", justifyContent: 'space-evenly'}}>
                    <View style = {{display: 'flex', flexDirection: 'row'}}>
                        <TouchableOpacity onPress = {()=> handleACPress()} style = {{backgroundColor: highlightAC, borderRadius: 10}}>
                            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> handleDCPress()} style = {{backgroundColor: highlightDC, borderRadius: 10}}>
                            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>DC</Text>
                        </TouchableOpacity>
                    </View>
                    <View style ={{flexDirection: 'row'}}>
                        <Text style = {{flex: 1, textAlign:'center', fontWeight: 'bold'}}>
                            {qty} unit/s
                        </Text>
                        <Slider
                            value = {qty}
                            style={{width: 200, height: 50}}
                            minimumValue={0}
                            maximumValue={10}
                            step = {1}
                            minimumTrackTintColor="#FF9506" 
                            maximumTrackTintColor="black"
                            onSlidingComplete = {(value: any)=> {setqty(value)}}
                        />
                    </View>
                    
                    <View style ={{flexDirection: 'row'}}>
                        <Text style = {{flex: 1, textAlign:'center', fontWeight: 'bold'}}>
                            {time} hours
                        </Text>
                        <Slider
                            value = {time}
                            style={{width: 200, height: 50}}
                            minimumValue={0}
                            maximumValue={10}
                            step = {1}
                            minimumTrackTintColor="#FF9506" 
                            maximumTrackTintColor="black"
                            onSlidingComplete = {(value: any)=> {settime(value)}}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}
    
    export default ScrollQtyTime;

// styles
const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 5
        },
    ContainerTextImg: {
        backgroundColor: 'white',
        height: 150,
        width: '15%',
        alignSelf: 'center',
        margin: 5,
        borderRadius: 10,
        display: 'flex'
    }
   
    });