import React from 'react';
import { View, Button, StyleSheet, TextInput, FlatList, Text, ActivityIndicator } from 'react-native';
import SoundItem from './SoundItem'
import { getSample } from '../API/searchApi'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            songs : [],
            isLoading: false
        }
        this.searchedText = ""
    }

    // Fetch music informations 
    fetchMusic(){
        this.setState({isLoading: true })
        if(this.searchedText.length > 3) {
            getSample(this.searchedText).then(data => this.setState({songs: data.results}));
        }
        this.setState({isLoading: false })
    }

    // Input text
    changeSearch(text){
        this.searchedText = text;
    }

    // Details of searched music
    seeDetails = (id, name, username, durationFinal, description, imageUrl, urlSong) => {
         this.props.navigation.navigate('Ajouter', {id: id, name: name, username: username, durationFinal:durationFinal, description: description, urlSong: urlSong, imageUrl:imageUrl})
    }

    render(){

        return(
            <View style={styles.container}> 
                <TextInput style={styles.textInput} 
                    placeholder="Rechercher un artiste ou une musique... " 
                    onChangeText={(text)=>this.changeSearch(text)} 
                    onSubmitEditing={() => this.fetchMusic()} 
                />
                {!this.state.isLoading ? (
                    <FlatList
                        data={this.state.songs}
                        keyExtractor={(item) => item.trackId}
                        onEndReachedThreshold={0.25}
                        renderItem={({ item }) => <SoundItem song={item}  seeDetails={this.seeDetails} />}
                    /> 
                    ) : ( 
                    <View style={styles.indicator} >
                        <ActivityIndicator size='large' />
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20, 
    flex: 1 
  }, 
  textInput: {
    backgroundColor: '#fff',
    paddingLeft: 10, 
    paddingTop: 8, 
    paddingBottom: 10, 
    marginLeft: 20, 
    marginRight: 20, 
    borderRadius: 8, 
    marginBottom: 20
  }, 
  indicator: {
    position: 'absolute', 
    top:100, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  
})

export default Search;