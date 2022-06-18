import React from 'react'
import { StyleSheet, View, Text, Image, Button, useState } from 'react-native'
import { connect } from 'react-redux';
import { Audio } from 'expo-av';

// Display sound item
function SoundItem(props){
    const {song, seeDetails } = props
    const [sound, setSound] = React.useState();

    // To return only this type of music (hq-mp3) 
    const urlSong = song.previews["preview-hq-mp3"]
    // To return this kind of image 
    const imageUrl = song.images["waveform_l"]

    const duration = song.duration
    // Duration with 2 numbers after comma
    const durationFinal = duration.toFixed(2);

    async function playSound(urlSong) {
        // Song loading
        const { sound } = await Audio.Sound.createAsync(
            { uri:urlSong}, 
            { shouldPlay:true}
        );
        setSound(sound);
        // Play song
        await sound.playAsync(); 
    }

  React.useEffect(() => {
    return sound ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        } : undefined;
    }, [sound]);

    return (
        <View style={styles.main_container}>
        <Image
            style={styles.image}
            source={{ uri: imageUrl }}
        />
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{song.name}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>{song.username}</Text>
                    <Text style={styles.description_text}>{durationFinal} secondes</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonInfo}>
                        <Button
                            onPress={() => seeDetails(song.id, song.name, song.username, durationFinal, song.description, imageUrl, urlSong)}
                            title={"Infos"}
                            color="tomato"
                        />
                    </View>
                    
                    <View style={styles.buttonPlay}>
                        <Button style={styles.button} title="▶️" onPress={() => playSound(urlSong)} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    buttonPlay: {
        top: -35,
        left: 100,
        position: 'relative',
        width: 60,
        height: 60,
    },

    main_container: {
        height: 160,
        flexDirection: 'row',
        borderColor: '#f9f9f9',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 15, 
        marginRight: 20, 
        marginLeft: 20,
        backgroundColor: '#fff', 
        paddingLeft: 10, 
        borderRadius: 8,
        shadowColor: '#121212',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    image: {
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: 'gray', 
        borderRadius: 8, 
        marginTop: 20, 
    },

    buttonContainer: {
        backgroundColor: '#f9f9f9',
        marginRight: 60, 
        marginLeft: 30, 
        borderRadius: 8, 
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        height: 40,
    },

    content_container: {
        flex: 1,
        margin: 5
    },

    header_container: {
        flex: 5,
        flexDirection: 'row'
    },

    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        flex: 2,
    },

    description_container: {
        flex: 7
    },

    description_text: {
        fontStyle: 'italic',
        color: '#CCCCCC'
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default SoundItem