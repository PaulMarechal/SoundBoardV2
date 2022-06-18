import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux';
import { Audio } from 'expo-av';

function FavorisItem(props){
    // retun all informations obj ( duration, id, imageURL, name, urlSong, username)
    const { song } = props

    // To play song and return fav item informations on fav tab 
    async function playSound(urlSong) {
      // Loading sound
      const { sound } = await Audio.Sound.createAsync(
          { uri: song.urlSong}, 
          { shouldPlay:true}
      );
      setSound(sound)
      // Playing sound
      await sound.playAsync(); 
    }
    return (
        <View style={styles.main_container}>
          <Image style={styles.image} source={{ uri: song.imageUrl }} />
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.titreMusique}>{song.name}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text>{song.username}</Text>
                    <Text>{song.durationFinal} secondes</Text>
                    <Text>{song.id}</Text>
                </View>
                <View style={styles.buttonPlay}>
                        <Button style={styles.button} title="▶️" onPress={() => playSound(props)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    height: 160,
    width: 300,
    flexDirection: 'row',
    borderColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: '#fff', 
    paddingLeft: 10, 
    borderRadius: 8,
    shadowColor: '#121212',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: 'gray', 
    borderRadius: 8, 
    marginTop: 20, 
  },
  header_container: {
    flex: 5,
    flexDirection: 'row'
  },
  backImage: {
      borderRadius: 8
  }, 
  titreMusique: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 2,
    marginTop: 20
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FavorisItem