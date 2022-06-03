import React from 'react';
import { StyleSheet, FlatList, Button, TextInput, Text,Linking, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { Audio } from 'expo-av';


export default function App() {
    const [sound, setSound, ] = React.useState();

    async function playSound() {
        console.log('Loading Sound');

        const { sound } = await Audio.Sound.createAsync(
            require("../sounds/applause.mp3")
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync(); 
    }

    React.useEffect(() => {
        return sound ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); 
        } : undefined;
    }, [sound]);

  return (
    <View style={styles.container}>
        <View style={styles.box1}>
            <Button style={styles.buttonContainer1} title="Sound 1" onPress={() => playSound()} />
        </View>
        <View style={styles.box2}>
            <Button style={styles.buttonContainer1} title="Sound 2" onPress={playSound} />
        </View>
        <View style={styles.box3}>
            <Button style={styles.buttonContainer1} title="Sound 3" onPress={playSound} />
        </View>
        <View style={styles.box4}>
            <Button style={styles.buttonContainer1} title="Sound 4" onPress={playSound} />
        </View>
        <View style={styles.box5}>
            <Button style={styles.buttonContainer1} title="Sound 5" onPress={playSound} />
        </View>
        <View style={styles.box6}>
            <Button style={styles.buttonContainer1} title="Sound 6" onPress={playSound} />
        </View>
        <View style={styles.box7}>
            <Button style={styles.buttonContainer1} title="Sound 7" onPress={playSound} />
        </View>
        <View style={styles.box8}>
            <Button style={styles.buttonContainer1} title="Sound 8" onPress={playSound} />
        </View>
    </View>

    
  )
}

const styles = StyleSheet.create({

    container: {    
        flex: 1,
        marginHorizontal: 16,
        width: 'auto'
    }, 

    box1: {
        top: 15,
        left: 15,
        position: 'relative',
        backgroundColor: "powderblue",
        width: 140,
        height: 140,
    }, 

    box2: {
        top: -125,
        left: 180,
        position: 'relative',
        backgroundColor: "skyblue",
        width: 140,
        height: 140,
    },

    box3: {
        top: -105,
        left: 15,
        position: 'relative',
        backgroundColor: "skyblue",
        width: 140,
        height: 140,
    },

    box4: {
        top: -245,
        left: 180,
        position: 'relative',
        backgroundColor: "skyblue",
        width: 140,
        height: 140,
    },

    box5: {
        top: -225,
        left: 15,
        position: 'relative',
        backgroundColor: "skyblue",
        width: 140,
        height: 140,
    },

    box6: {
        top: -365,
        left: 180,
        position: 'relative',
        backgroundColor: "skyblue",
        width: 140,
        height: 140,
    },

    box7: {
        top: -345,
        left: 15,
        position: 'relative',
        backgroundColor: "skyblue",
        width: 140,
        height: 140,
    },

    box8: {
        top: -485,
        left: 180,
        position: 'relative',
        backgroundColor: "skyblue",
        width: 140,
        height: 140,
    },
    

    containerRow: {
        justifyContent: 'row',
    }, 

    buttonContainer: {
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        padding: 40, 
        margin: 10

    },

    buttonContainer1: {
        flexDirection : 'row', 
        backgroundColor: '#ff0000',
        padding: 10, 
        margin: 10

    },

    button: {
        marginRight: 10, 
        marginLeft: 10, 
        backgroundColor: '#ff0000',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }, 
})
