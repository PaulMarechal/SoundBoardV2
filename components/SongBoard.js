import React from 'react';
import { StyleSheet, Button, TextInput, Text,Linking, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";

class SongBoard extends React.Component {

  constructor(props){
    super(props)
      this.state = { 
        idSong: props.route.params?.idSong,
        imgSong: props.route.params?.imgSong,
        nameSong: props.route.params?.nameSong,
        artistSong: props.route.params?.artistSong,
        urlSong: props.route.params?.urlSong,
        noteSong: '0',
        adding: false,
    }
  }

  render () {
    
    return (
      <View >
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
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesSong: state.favoritesSong
  }
}

export default connect(mapStateToProps)(SongBoard);