import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux';

function SongItem(props){
    const {song, seeDetails } = props
    return (
        <View style={styles.main_container}>
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{song.trackName}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>{song.artistName}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => seeDetails(song.trackId, song.artworkUrl60, song.trackName, song.artistName, song.trackViewUrl)}
                        title={"Infos"}
                        color="tomato"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

buttonContainer: {
    backgroundColor: '#f9f9f9',
    marginRight: 60, 
    marginLeft: 60, 
    borderRadius: 8, 
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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

export default SongItem