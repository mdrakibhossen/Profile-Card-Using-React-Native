import React,{Component} from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'
import { color } from 'react-native-reanimated'


export default class Card extends Component<{}>{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('./proPic.jpg')} />
                    </View>

                    <Text style={styles.name}>Md Rakib Hossen</Text>
                    <Text style={styles.occupation}>Mobile App developer</Text>
                    <Text style={styles.description}>My Chinese name is 明哲. My student id id 201801032. I am student 
                    at Southwest Forestry University.And this is our Sixth assignment of Mobile App Development.
                    </Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        borderColor:'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: 'dodgerblue',
        width: 600,
        height: 600,
        alignItems: 'center'
    },
    cardImageContainer:{
        background:'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 220,
        height: 220,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
        alignItems: 'center' 
    },
    cardImage:{
        width: 175,
        height: 175
    },

    name:{

        color:'white',
        marginTop: 20,
        fontSize: 25,
        fontFamily: "Cochin",
        fontWeight: "bold"
    },

    occupation:{
        
        color:'white',
        marginTop: 10,
        // marginLeft: 30,
        fontSize: 20,
        fontFamily: "Cochin",
        // fontWeight: "bold"

    },
    description:{
        color:'white',
        fontSize: 20,
        fontFamily: "Cochin",
        marginTop:15,
        padding:15

    }
})