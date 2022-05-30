import React from 'react';
import { StyleSheet, Button, TextInput, Text,Linking, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";

class AddSong extends React.Component {

  constructor(props){
    super(props)
      this.state = { 
        idSong: props.route.params?.idSong,
        nameSong: props.route.params?.nameSong,
        artistSong: props.route.params?.artistSong,
        urlSong: props.route.params?.urlSong,
        adding: false,
    }
  }

  toggleFavorite(){
    const song = {id: this.state.idSong, name: this.state.nameSong, artist: this.state.artistSong, note: this.state.noteSong}
    const action = {type: "TOGGLE_FAVORITE", value: song}
    this.props.dispatch(action)
    this.props.navigation.navigate('Favoris')
  }

  displayAction(){
    if(this.props.favoritesSong.findIndex(item => item.id === this.state.idFilm) !== -1){
      return "Supprimer le sons"
    } else {
      return "Enregistrer"
    }
  }

  render () {

  const {adding, nameSong, artistSong, urlSong} = this.state
    
    return (
      <View style={styles.container}>
        <Text style={styles.artistName}>👤 {artistSong}</Text>
        <Text style={styles.songName}>🎵 {nameSong}</Text>     
        <Text>Ecouter la musique :  </Text> 

        <View style={styles.buttonMusique}>
          <Button title="Aller sur iTunes" onPress={ ()=>{ Linking.openURL(`${urlSong}`)}} />
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
            <View style={styles.buttonMusique}>
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

export default connect(mapStateToProps)(AddSong);