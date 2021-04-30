import React, { useState } from 'react';
import { StyleSheet, View,Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
const myIcon = <Icon name="chevron-small-down" size={30} color="#900" />;
const myIconup = <Icon name="chevron-small-up" size={30} color="#900" />;

const ProductRecBox: React.FC = ({Item}) => {

     const [showDetailsTxt, setshowDetailsTxt] = useState(false)

     const togglrtxt = ()=>{
        setshowDetailsTxt(!showDetailsTxt)
     }
    return (
            
        <View style = {styles.Contair}>
        <Text style = {styles. MainTitle}>Title</Text>
        
            
            <View style = {styles.Imagestyl}>
            <TouchableOpacity>
            <Image
                style={styles.stretch}
                source={{uri: 'https://cdn.shopify.com/s/files/1/0510/6148/9855/products/dVOod24_5258af8e-3555-48a1-96e4-cbf8b61bc7db_600x.jpg'}}
            />

            <View style = {{margin: 10}}>
            <Text>Title</Text>
            <Text>$$$</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {togglrtxt}>
                    <View style = {[styles.WhatsIncluded, {height: 30}]}>
                    {(!showDetailsTxt)?<Text style = {{marginBottom: -10, fontSize: 10}}>Details</Text>:null}
                   { (!showDetailsTxt)?myIcon:myIconup}
                    </View>
            </TouchableOpacity> 

            {(showDetailsTxt)?
            <View style = {styles.DetialsBox}>
                <Text style = {{margin: 10}}>HELLO</Text>
            </View>: null
            }
            </View>
        
            
        </View>
        
        );
    }
    
    export default ProductRecBox ;

// styles
const styles = StyleSheet.create({
    Contair: {
        flex: 1,
        backgroundColor: 'rgba(255,149,6,0.1)',
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center', 
        maxWidth: 300,
        borderRadius: 10
        },
    MainTitle: {
        marginBottom: -25,
        marginTop: 15,
        
    },
    Imagestyl: {
        flex: 1,
        margin: 30,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FF9506'

    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5
      },
      WhatsIncluded: {
        borderTopWidth: 1,
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,.1)',
     
      },
      DetialsBox:{
        flex: 1,
        height: 100,
        backgroundColor: 'red'
      }
   
    });