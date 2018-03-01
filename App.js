/**
 * Todo application React Native
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import * as firebase from 'firebase';
import { firebaseConfig } from './configs/firebase'
import Header from './src/components/Header';
import ButtonBar from './src/ButtonBar';
import ListItem from './src/components/ListItem';

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    // start listening for firebase updates
    this.listenForItems(this.itemsRef);
  }

  // update the state once an item is added
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        tasks: items
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Todo.'} />
        <FlatList
          data={this.state.tasks}
          style={styles.list}
          renderItem={({ item }) => <ListItem app={this.itemsRef} item={item} />}
        />
        <ButtonBar app={this.itemsRef} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  list: {
    margin: 20,
    marginBottom: 70,
  }
};
