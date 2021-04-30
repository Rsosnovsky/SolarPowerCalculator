import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Dimensions, Text, Modal, Alert, TouchableHighlight, Button} from 'react-native';

//components
import SelectBox from './components/SelectBox';
import Question from './components/Question';

import {uploadData, uploadEmailData} from './config/firebase';

import ScrollQtyTime from './components/ScrollQtyTime';

import {DATAB} from './datapull/scriptPull';
import { TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export interface Props {
    navigation: any;
}


const HomeScreen: React.FC<Props> = ({navigation}) => {
    
    // Pull full survay
    let FullSurvay = DATAB;
    
    //Pull ref id to be assoicated with the email input
    const [getSurvayID, setgetSurvayID] = useState('');

    //this is used as a tracker to where we are on the survay
    const [locTracker, setlocTracker] = useState(0)
    
    // hook to keep track of location on survay
    const [SurvayLoc, setSurvayLoc] = useState(DATAB[locTracker])
    
    //used to refesh list cz for somereason the obj can't
    const [Refresh, setRefresh] = useState(false);

    // hook to control the disable btn
    const [disBtn, setdisBtn] = useState(true);

    // hook for modal which is shown on the last step to collect email and show reuslts
    const [modalVisible, setModalVisible] = useState(false);

    const [emailInput, setemailInput] =useState('')
    const [emailValidTest, setemailValidTest] =useState(true)

    //get the length of the survay to know when to end it
    let LengthOfSurvay = FullSurvay.length;

    //used to refesh hooks in case they pil
    useEffect(() => {}, [Refresh])

    //Used to point at the next step in survay 
    useEffect(() => {
        setSurvayLoc(DATAB[locTracker])
    }, [locTracker])

    // select type operations
    const ConvertBoxToSelect = (index: number) =>{
        let localSurvayLoc = SurvayLoc
        for (let S = 0; S < localSurvayLoc.questions.length; S++) {
            if (S === index){ 
            localSurvayLoc.questions[S].val = !localSurvayLoc.questions[S].val;
            localSurvayLoc.questions[S].val ===true?setdisBtn(false):setdisBtn(true)
            }else{
            localSurvayLoc.questions[S].val = false
            }
        }
        setSurvayLoc(localSurvayLoc)
        //rerender list, remeber hook pile into a list and then run at once 
        setRefresh(!Refresh) 

    }
    
    const renderQuestion = () => {
        return(
            SurvayLoc.questions.map((item, index)=>{
                return(
                    (SurvayLoc.type == 'select')?
                    <TouchableOpacity 
                        style = {styles.QuestionsInner} 
                        onPress = {() => ConvertBoxToSelect(index)} 
                        key = {index}
                        >
                        <SelectBox 
                            source ={item.image} 
                            text = {item.title} 
                            highlight = {item.val}
                        />
                    </TouchableOpacity>:

                    (SurvayLoc.type == 'slide')?
                    
                  /**<ScrollQtyTime SliderOPs ={SliderOPs} Qdata = {item} index = {index} />*/
                   <ScrollQtyTime  Qdata = {item} index = {index} key = {index}/>

                    :
                    <View>Something is wrong, Please check back again later</View>

                )
            })
        
            )
    }

    
    //Pull ref id to be assoicated with the email input
    const pullDocID = (input: string) =>{
        setgetSurvayID(input);
        setModalVisible(true) 
    } 
    /************* */

    //Mange the next btn operations, when last page is reached opens modal and requests email
    const NxtBtnFunction = () => {
        FullSurvay[locTracker] = SurvayLoc;
      
        //go to next page if last page then we open modal & send data to firebase
        if (locTracker < LengthOfSurvay-1){
        setlocTracker(locTracker+1)
    } 
        else{
        uploadData(FullSurvay, pullDocID)
    }
        
    }

    const BKBtnFunction = () => {
        FullSurvay[locTracker] = SurvayLoc
        setlocTracker(locTracker-1) 
    }

    // validates the email formart is correct, you can export this into a seprate file

    const validate = (text: string) => {
        setemailInput(text)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          setemailValidTest(false)
          return false;
        }
        else {
          setemailValidTest(true)
          
        }
      }
    
    // in modal when user submits email, this wil luse the ref ID of the survay and save the email 
    // to firebase with the associated ID
    const onPressGetEmail =() =>{
        uploadEmailData({
            SurvayID: getSurvayID,
            email: emailInput
        })

        // go to result screen and pass down the results of the survay
        navigation.navigate('ResultsScreen',  FullSurvay)
      }
    
     return (
        <ScrollView>
            <Question text = {SurvayLoc.questionTitle}/>        
            <View style = {[styles.QuestionsBox, {flexDirection: (windowWidth>1024 && SurvayLoc.type == 'select')?'row':'column'} ]}>
            {renderQuestion()}
            </View>

            <View style = {styles.NavBTNs}>
               { (locTracker > 0 )?
               /** if location on survay is anything larger then the first one show the back btn */
               <TouchableOpacity 
                style = {[styles.NXTBKBTN, {backgroundColor: '#C1C1C1'}]}
                onPress = {BKBtnFunction}
                >
                    <Text> {'< BACK'}</Text>
                </TouchableOpacity>: null}
                
                <TouchableOpacity 
                    style = {[styles.NXTBKBTN , {backgroundColor: disBtn?'rgba(0,0,0,.2)':'#FF9506'}]} 
                    onPress={NxtBtnFunction}
                    disabled = {disBtn}
                    >
                        <Text> {'NEXT >'}</Text>
                </TouchableOpacity>

            </View>

            {
                modalVisible?
            <Modal
                transparent={modalVisible}
                animationType="slide"
                visible={false}
                style = {styles.modalMainContainer}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text >Please enter email address to see your recommendations</Text>
                
                <TextInput
                    placeholder="Please enter email here"
                    onChangeText={(text) => validate(text)}
                    value={emailInput}
                    style = {styles.inputBoxEmail}
                />
                {(emailValidTest)?null:<Text>Invalid email</Text>}

                <Button
                    onPress={onPressGetEmail}
                    title="Show Reuslts"
                    color="#FF9506"
                    accessibilityLabel="Learn more about this purple button"
                    disabled = {emailInput?!emailValidTest:true}
                    />
                </View>

                </View>
            </Modal>:null 
} 
        </ScrollView>
        );
    }
    
    export default HomeScreen ;

// styles
const styles = StyleSheet.create({
    QuestionsBox: {
        flex:1,
        },
    QuestionsInner: {
        flex:1,
        justifyContent: 'space-evenly',
        margin: 5,
        },
    NavBTNs:{
        flexDirection:'row', 
        flex: 1, 
        height: 50
    },
    NXTBKBTN:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    modalMainContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0,0.75)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      inputBoxEmail: {
    
        height: 40,
        borderColor: '#FF9506',
        borderWidth: 1,
        borderRadius: 5,
        margin: 15,
        padding: 5,

      }

    });