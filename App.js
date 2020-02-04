import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
} from 'react-native';

export default class EventList extends Component {
  state = {
    libros: []
  }

  componentDidMount() {
    const libros = require('./libros.json').libros
    this.setState( { libros })
  }

  render() {
    return(
      <FlatList
        data={ this.state.libros }
        style={ styles.list }
        renderItem={ ({ item }) => 
          <View style={styles.container}>
            <Text style={styles.titulo} >{ item.title } </Text>
            <Text style={styles.autor}> {item.author}</Text>
          </View>
        }
        keyExtractor={ item => item.id }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#F3F3F3'
  },
  titulo: {
    color: 'red',
    fontSize: 20,
    top: 2
  } 


});