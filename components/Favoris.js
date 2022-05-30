import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import FavorisItem from './FavorisItem'
import { connect } from 'react-redux';

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
    marginRight: 20, 
    marginLeft: 20,
  }
})

const mapStateToProps = (state) => {
    return {
      favoritesSong: state.favoritesSong
    }
}
  
export default connect(mapStateToProps)(Favoris);