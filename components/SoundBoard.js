import React from 'react';
import { StyleSheet, FlatList, Button, TextInput, Text,Linking, View, Image, TouchableOpacity, Modal, Pressable, Alert, } from 'react-native';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { Audio } from 'expo-av';
import Favoris from '../components/Favoris';
import FavorisItem from './FavorisItem'


export default function App(props) {
    const [sound, setSound, ] = React.useState();
    const [modalVisible, setModalVisible] = useState(false);

    const song1 = "https://cdn.freesound.org/previews/186/186942_2594536-hq.mp3"
    const song2 = "https://cdn.freesound.org/previews/440/440931_9015615-hq.mp3"
    const song3 = "https://cdn.freesound.org/previews/404/404543_5121236-hq.mp3"
    const song4 = "https://cdn.freesound.org/previews/209/209943_3797507-hq.mp3"
    const song5 = "https://cdn.freesound.org/previews/195/195041_3162775-hq.mp3"
    const song6 = "https://cdn.freesound.org/previews/533/533095_2771755-hq.mp3"
    const song7 = "https://cdn.freesound.org/previews/179/179946_3342732-hq.mp3"
    const song8 = "https://cdn.freesound.org/previews/185/185078_3342732-hq.mp3"

    const propsTest = props
    console.log(sound)

  


    // const {adding, name, username, durationFinal, description, imageUrl, urlSong, count, id} = this.state;


    // const songTest = {
    //   id: this.state.id, 
    //   name: this.state.name, 
    //   username: this.state.username, 
    //   durationFinal: this.state.durationFinal, 
    //   imageUrl: this.state.imageUrl, 
    //   urlSong: this.state.urlSong
    // }

    // console.log(/////*********/////);
    // console.log(props)
    // console.log(/////*********/////);

    async function playSound(song) {
        console.log('Loading Sound');

        const { sound } = await Audio.Sound.createAsync(
            { uri:song}, 
            { shouldPlay:true}
        );
        setSound(sound);
        console.log(favoris)

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
    {/* test  */}

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Choisir une musique</Text>
                    <Favoris/>  
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                    {/* <View component={Favoris} /> */}
                <Text style={styles.textStyle}>Fermer</Text>
                </Pressable>
            </View>
            </View>
        </Modal>

    {/* fin test  */}
        {/* Song 1 | Bleu */}
        <TouchableOpacity onPress={() => { playSound(song1) }} onLongPress={() => { setModalVisible(true) }}>
            <View style={styles.box1}>
                {/* <Button style={styles.buttonContainer1} title="Sound 1" onPress={() => playSound()} /> */}
                {/* <TouchableOpacity onPress={() => { console.log("onPress") }} onLongPress={() => { console.log("onLongPress") }}></TouchableOpacity> */}
            </View>
        </TouchableOpacity>

        {/* Song 2 | Red  */}
        <TouchableOpacity onPress={() => { playSound(song2) }} onLongPress={() => { playSound(song2) }}>
            <View style={styles.box2}>

            </View>
        </TouchableOpacity>

        {/* Song 3 | Purple */}
        <TouchableOpacity onPress={() => { playSound(song3) }} onLongPress={() => { playSound(song2) }}>
            <View style={styles.box3}>

            </View>
        </TouchableOpacity>

        {/* Song 4 |  Orange*/}
        <TouchableOpacity onPress={() => { playSound(song4) }} onLongPress={() => { playSound(song2) }}>
            <View style={styles.box4}>

            </View>
        </TouchableOpacity>

        {/* Song 5 | Green */}
        <TouchableOpacity onPress={() => { playSound(song5) }} onLongPress={() => { playSound(song2) }}>
            <View style={styles.box5}>

            </View>
        </TouchableOpacity>

        {/* Song 6 | Bleu (darker) */}
        <TouchableOpacity onPress={() => { playSound(song6) }} onLongPress={() => { playSound(song2) }}>
            <View style={styles.box6}>

            </View>
        </TouchableOpacity>

        {/* Song 7 | Yellow*/}
        <TouchableOpacity onPress={() => { playSound(song7) }} onLongPress={() => { playSound(song2) }}>
            <View style={styles.box7}>

            </View>
        </TouchableOpacity>
        
        {/* Song 8 | Green (lighter) */}
        <TouchableOpacity onPress={() => { playSound(song8) }} onLongPress={() => { playSound(song2) }}>
            <View style={styles.box8}>

            </View>
        </TouchableOpacity>
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
        backgroundColor: "#e53517",
        width: 140,
        height: 140,
    },

    box3: {
        top: -105,
        left: 15,
        position: 'relative',
        backgroundColor: "#7f00ff",
        width: 140,
        height: 140,
    },

    box4: {
        top: -245,
        left: 180,
        position: 'relative',
        backgroundColor: "#ff8300",
        width: 140,
        height: 140,
    },

    box5: {
        top: -225,
        left: 15,
        position: 'relative',
        backgroundColor: "#83f52c",
        width: 140,
        height: 140,
    },

    box6: {
        top: -365,
        left: 180,
        position: 'relative',
        backgroundColor: "#2c75ff",
        width: 140,
        height: 140,
    },

    box7: {
        top: -345,
        left: 15,
        position: 'relative',
        backgroundColor: "#ffff62",
        width: 140,
        height: 140,
    },

    box8: {
        top: -485,
        left: 180,
        position: 'relative',
        backgroundColor: "#83F52C",
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
    // test
    centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 70,
    paddingTop: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginTop: 30,
    textAlign: "center"
  }
})
