import * as React from 'react';
import { StyleSheet, Button, TextInput, Text,Linking, View, Image, ScrollView, TouchableOpacity, Icon } from 'react-native';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import {Audio} from 'expo-av'
import Ionicons from "react-native-vector-icons/Ionicons";

class AddSound extends React.Component {

  // Props to have all necessary informations
  constructor(props){
    super(props)
      this.state = { 
        id: props.route.params?.id,
        name: props.route.params?.name,
        username: props.route.params?.username,
        durationFinal: props.route.params?.durationFinal,
        description: props.route.params?.description,
        imageUrl: props.route.params?.imageUrl,
        urlSong: props.route.params?.urlSong,
        adding: false,
    }
  }

  // To play sound with url 
  async playSound(urlSong){
    // Song loading
    const {sound} = await Audio.Sound.createAsync(
      {uri:urlSong}, 
      {shouldPlay:true}
    )
    setSound(sound)
    await sound.playAsync();
  }

  // Add to fav and redirect to fav page
  toggleFavorite(){
    const song = {
      id: this.state.id, 
      name: this.state.name, 
      username: this.state.username, 
      durationFinal: this.state.durationFinal, 
      imageUrl: this.state.imageUrl, 
      urlSong: this.state.urlSong
    }

    const action = {type: "TOGGLE_FAVORITE", value: song}
    this.props.dispatch(action)
    this.props.navigation.navigate('Favoris')
  }

  // Add song to fav tab or remove it
  displayAction(){
    if(this.props.favoritesSong.findIndex(item => item.id) !== -1){
      return "Supprimer le sons"
    } else {
      return "Enregistrer"
    }
  }


  render () {
  
  // Adding music informations to display it on search or modal
  const {adding, name, username, durationFinal, description, imageUrl, urlSong, count, id} = this.state;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }}/>
        <Text style={styles.artistName}>🎵 {name}</Text>     
        <Text style={styles.artistName}>👤 {username}</Text>
        <Text style={styles.artistName}>#️⃣ {id}</Text>     
        <Text style={styles.artistName}>⏱ {durationFinal} secondes</Text>  

        <View style={styles.buttonPlay}>
          <TouchableOpacity style={styles.button} onPress={() => this.playSound(urlSong)}>
            <Text>
              <Ionicons name={"play-circle-outline"} size={80} color={'#1B1C1E'} />
            </Text>
          </TouchableOpacity>
        </View>
   
        <View style={styles.descriptionSong}>
          <ScrollView>
            <Text style={styles.descriptionTextSong}> {description}</Text>     
          </ScrollView>
        </View>  
          
        {!adding && ( 
        <View style={styles.buttonFav}>
          <Button 
            title="Ajouter aux favoris"
            onPress={() => this.setState({adding: true})}
          />
        </View>
        
        )}
        {adding && 
        (
          <>
            <View style={styles.buttonFav}>
              <Button title={this.displayAction()} onPress={() => this.toggleFavorite()} />
            </View>
          </>
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
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
    marginTop: 10
  },

  buttonPlay: {
    top: -85,
    left: 225,
    position: 'relative',

  },

  descriptionSong: {
    backgroundColor: '#f5f2f2', 
    marginTop: 10,
    marginRight: 10, 
    marginTop: -75,
    borderRadius: 8,
    height: 160
  }, 

  songName: {
    fontSize: 25, 
    color: '#1B1C1E', 
    paddingLeft: 10, 
    marginTop: 5, 
    marginBottom: 20 
  },
  artistName: {
    marginTop: 20, 
    fontSize: 25, 
    color: '#000', 
    paddingLeft: 10 
  },

  descriptionTextSong: {
    marginTop: 10, 
    marginLeft: 10, 
    marginRight: 10,
    fontSize: 20, 
    color: '#1F1F1F'
  }, 

  inputContainer: {
    paddingTop: 15
  },

  buttonFav: {
    marginTop: 20, 
    marginBottom: 20, 
    marginRight: 50, 
    marginLeft: 50, 
    borderRadius: 8,
    shadowColor: '#121212',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10, 
    backgroundColor: '#f9f9f9'
  },

  buttonTest: {
    marginBottom: 20, 
    marginRight: 50, 
    marginLeft: 50, 
    borderRadius: 8,
    shadowColor: '#121212',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10, 
    zIndex: 3,
    backgroundColor: 'red'
  },
  buttonMusique: {
    marginBottom: 20, 
    marginRight: 50, 
    marginLeft: 50, 
    borderRadius: 8,
    shadowColor: '#121212',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 40, 
    backgroundColor: '#f9f9f9'
  }, 

  image: {
    width: 305,
    height: 120,
    margin: 5,
    backgroundColor: 'gray', 
    borderRadius: 8, 
    marginTop: 20, 
  },

  resumeInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 150,
    fontSize: 14,
    paddingTop: 5,
  },

  textInput: {
    borderColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    marginRight: 50, 
    marginLeft: 50,
    borderRadius: 8,
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesSong: state.favoritesSong
  }
}

export default connect(mapStateToProps)(AddSound);