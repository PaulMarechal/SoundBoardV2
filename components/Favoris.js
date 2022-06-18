import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import FavorisItem from './FavorisItem'
import { connect } from 'react-redux';

// Return fav page
class Favoris extends React.Component {
    render () {
        return(
            <View style={styles.container}> 
                <FlatList
                    data={this.props.favoritesSong}
                    onEndReachedThreshold={0.25}
                    renderItem={({ item }) => <FavorisItem song={item} />}
                /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30, 
    flex: 1, 
    marginBottom: 15, 
    marginRight: -60, 
    marginLeft: -60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
    return {
      favoritesSong: state.favoritesSong
    }
}
  
export default connect(mapStateToProps)(Favoris);