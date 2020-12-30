import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, Text, View} from 'react-native';

//components
import ImageWithTextBox from './components/ImageWithTextBox';
import NextButton from './components/NextButton';
import Question from './components/Question';
import NextStep from './components/NextStep';

export interface Props {
    navigation: any;
}

//images
import camperVan from '../assets/camperVan.png';
import boat from '../assets/boat.png';
import cabin from '../assets/cabin.png';
import otherPro from '../assets/otherPro.png';
import PreviousStep from './components/PreviousStep';
import ScrollQtyTime from './components/ScrollQtyTime';


//this is the object to be edited
const DATA = 
{
    step1Q: 'What Project are you working on?',
    step1: {
        Camper:{
            title: "Camper",
            highlight: false,
            img: camperVan,
            key:0
        },
        Boat: {
            title: "Boat",
            highlight: false,
            img: boat,
            key: 1
        },
        Cabin: {
            title: "Cabin",
            highlight: false,
            img: cabin,
            key: 2
        },
        Other: {
            title: "Other",
            highlight: false,
            img: otherPro,
            key: 3
        }
    },
    step2Q: 'Please select what you are looking to power and for what length of time',
    step2: {
        selected:'',
        survyQuestions:{
            lights: {
                title: 'lights',
                img: 'https://i.imgur.com/S55HwWQ.png',
                message: 'Assumption: 12v and 7watts', 
                qty: 0,  //user input
                time: 0, //user input
                DC: true //AC or DC current
            },
            fan: {
                title: 'fan',
                img: 'https://i.imgur.com/S55HwWQ.png',
                message: 'Assumption: 12v and 7watts', 
                qty: 0,  //user input
                time: 0, //user input
                DC: true //AC or DC current
            }
        },
    },
    step3Q: 'This the title of the form',
    
    }
;


const HomeScreen: React.FC<Props> = ({navigation}) => {
    //This is a test hook, to be deleted in the future
    const [Data, setData] = useState(DATA) //Data that the user plays with
    const [userLocation, setuserLocation] = useState(0)
   

    const highlight =(key: React.ReactText)=>{
        let arry = Data['step1']
        setData(DATA) //rest to original highlight selection
        setData((prevState) => ({
            ...prevState,
            step1: {
              ...prevState.step1,
                [key]: {
                    ...arry[key],
                    highlight: !arry[key].highlight   
                }
            }
          }));
          
    }


    //renders the required for step 1
    const renderCaseOne = ({ item }: any) => (
        <TouchableOpacity onPress ={()=>{highlight(item.title)}}>
            <ImageWithTextBox key = {item.index} source = {item.img} text= {item.title} highlight = {item.highlight}/>
        </TouchableOpacity>
    );

    //renders the required for step 2
    const renderCaseTwo = ({ item }: any) => (
        <ScrollQtyTime
            title = {item.title}
            img = {item.img}
            qty = {item.qty}
            time = {item.time}
            setData = {setData}
            message = {item.message}
            DC = {item.DC}
        />
    );

    const renderCases =()=>{
        switch(userLocation){
            case 0:
                return(
                <FlatList
                    data={findData()}
                    keyExtractor={(item, index) => {
                        return  index.toString();
                       }}
                    renderItem={renderCaseOne}
                    contentContainerStyle={styles.ContairStep1}
                    numColumns = {1}
                    extraData = {[Data, userLocation]}
                />
                )
            case 1:
                return(
                <FlatList
                    data={findData()}
                    keyExtractor={(item, index) => {
                        return  index.toString();
                       }}
                    renderItem={renderCaseTwo}
                    contentContainerStyle={styles.ContairStep2}
                    numColumns = {1}
                    extraData = {[Data, userLocation]}
                />
            )
            case 2: 
                return(
                    <View>Add feedback form here</View>
                )
        }
    }
    

    //this isolates the data to put into the flatList ****need to add logic for every step
    const findData =()=>{
        //this is what the data should look like for step 1
        //need to add logic for every step
        switch(userLocation){
            case 0: 
                let newList: (
                    { title: string; highlight: boolean; img: any; key: number; } | 
                    { title: string; highlight: boolean; img: any; key: number; } | 
                    { title: string; highlight: boolean; img: any; key: number; } | 
                    { title: string; highlight: boolean; img: any; key: number; })[] = []
                
                Object.entries(Data.step1).map(([key, value]) => {
                newList.push(value)
              })
                return(newList
                )
            case 1:
                let newListtwo: ({ title: string; img: string; message: string; qty: number; time: number; } | { title: string; img: string; message: string; qty: number; time: number; })[] = []

                Object.entries(Data.step2.survyQuestions).map(([key, valuetwo])=>{
                    newListtwo.push(valuetwo)
                })
                
                return(newListtwo)
        }
    }

    const findQuestion =()=>{
        switch(userLocation){
            case 0: 
                return(DATA.step1Q)
                
            case 1:
                return(DATA.step2Q)
            case 2:
                return(DATA.step3Q)
        }
    }
    
    
    return (
        <ScrollView>
            {(userLocation>0)? <PreviousStep Location = {userLocation}  setuserLocation = {setuserLocation}/> :<View/>}
            <Question text = {findQuestion()}/>
                {renderCases()}
            {/* <NextButton navigation = {navigation} screen= "CamperVan" /> */ }
            <NextStep Location = {userLocation}  setuserLocation = {setuserLocation} Data = {Data} setData = {setData}/>
            <TouchableOpacity style={{width: 100, height: 100, backgroundColor: 'green'}} onPress ={()=>{console.log(Data)}}/>
        </ScrollView>
        );
    }
    
    export default HomeScreen ;

// styles
const styles = StyleSheet.create({
    ContairStep1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1

        },
    ContairStep2: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1

        },

    });