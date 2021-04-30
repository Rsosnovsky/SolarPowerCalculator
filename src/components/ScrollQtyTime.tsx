import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';
import Slider from '@react-native-community/slider';


export interface Props {
    SliderOPs: any,
    Qdata: any,
    index: any
}

const ScrollQtyTime: React.FC<Props> = ({Qdata, index}) => {

    let dateUpdater = Qdata;

    const [ACDC, setACDC] = useState(Qdata.ACDC);
    const [valH, setvalH] = useState(Qdata.valH);
    const [valU, setvalU] = useState(Qdata.valU);
    
    const [highlightDC, sethighlightDC] = useState('');
    const [highlightAC, sethighlightAC] = useState('');
    
    //will highlight the DC or AC base on the DC state on open
    useEffect(() => {
        if(ACDC === true){    
        sethighlightDC('#FF9506')
        sethighlightAC('white')
       }else if (ACDC === false){
        sethighlightDC('white')
        sethighlightAC('#FF9506')
       }
    }, [])

    useEffect(()=>{
        dateUpdater.ACDC = ACDC
        dateUpdater.valH = valH
        dateUpdater.valU = valU        
    },[ACDC,valH,valU])

    const handleDCPress = async ()=>{
        sethighlightDC('#FF9506')
        sethighlightAC('white')
        setACDC(true)
    }

    const handleACPress =async ()=>{
        sethighlightDC('white')
        sethighlightAC('#FF9506')
        setACDC(false)
    }

    return (
        <View style={[styles.Container]}>
            <Text style = {{textAlign: 'center', flex: 1, fontWeight: "bold", textAlignVertical: 'center', borderRadius: 10}}> {Qdata.title}</Text>
            <View style = {{display: 'flex', flexDirection:'row'}}>
                <View style={[styles.ContainerTextImg]}> 
                    <View style = {{flex: 5}}>
                        <ImageBackground source={{uri: Qdata.image}}
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
                            {valU} unit/s
                        </Text>
                        <Slider
                            value = {valU}
                            style={{width: 200, height: 50}}
                            minimumValue={0}
                            maximumValue={10}
                            step = {1}
                            minimumTrackTintColor="#FF9506" 
                            maximumTrackTintColor="black"
                            onValueChange = {(value: any)=> {setvalU(value)}}
                        />
                    </View>
                    
                    <View style ={{flexDirection: 'row'}}>
                        <Text style = {{flex: 1, textAlign:'center', fontWeight: 'bold'}}>
                            {valH} hours
                        </Text>
                        <Slider
                            value = {valH}
                            style={{width: 200, height: 50}}
                            minimumValue={0}
                            maximumValue={24}
                            step = {1}
                            minimumTrackTintColor="#FF9506" 
                            maximumTrackTintColor="black"
                            onValueChange = {(value: any)=> {setvalH(value)}}
                    
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