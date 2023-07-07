import {Text, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import React from 'react';

type Props = {};

const App = (props: Props) => {
  const {} = props;

  const write = () => {
    database()
      .ref('/users/123')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'))
      .catch(e => console.log(e));
  };

  const read = () => {
    database()
      .ref('/users/123')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  };

  const update = () => {
    database()
      .ref('/users/123')
      .update({
        age: 3,
      })
      .then(() => console.log('Data updated.'))
      .catch(e => console.log(e));
  };
  const Adding_documents = () => {
    firestore()
      .collection('Users')
      .add({
        name: 'Ada Lovelace',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      })
      .catch(e => console.log(e));
  };
  const Updating_documents = () => {
    firestore();
    firestore()
      .collection('Users')
      .doc('SwaVQJVCxN5dQVwjIr51')
      .update({
        age: 3,
      })
      .then(() => {
        console.log('User updated!');
      })
      .catch(e => console.log(e));
  };
  const Read_documents = async () => {
    const user = await firestore()
      .collection('Users')
      .doc('SwaVQJVCxN5dQVwjIr51')
      .get();
    return console.log(user);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Realtime Database</Text>
      <View style={{padding: 10}} />
      <TouchableOpacity
        onPress={() => read()}
        style={{padding: 20, backgroundColor: 'blue'}}>
        <Text>read</Text>
      </TouchableOpacity>
      <View style={{padding: 20}} />
      <TouchableOpacity
        onPress={() => write()}
        style={{padding: 20, backgroundColor: 'green'}}>
        <Text>write</Text>
      </TouchableOpacity>
      <View style={{padding: 20}} />
      <TouchableOpacity
        onPress={() => update()}
        style={{padding: 20, backgroundColor: 'gray'}}>
        <Text>update</Text>
      </TouchableOpacity>
      <View style={{padding: 20}} />
      <Text>Cloud Firestore</Text>
      <View style={{padding: 10}} />
      <TouchableOpacity
        onPress={() => Adding_documents()}
        style={{padding: 20, backgroundColor: 'blue'}}>
        <Text>Adding Documents</Text>
      </TouchableOpacity>
      <View style={{padding: 20}} />
      <TouchableOpacity
        onPress={() => Updating_documents()}
        style={{padding: 20, backgroundColor: 'green'}}>
        <Text>Updating Documents</Text>
      </TouchableOpacity>
      <View style={{padding: 20}} />
      <TouchableOpacity
        onPress={() => Read_documents()}
        style={{padding: 20, backgroundColor: 'gray'}}>
        <Text>Read Documents</Text>
      </TouchableOpacity>
      <View style={{padding: 20}} />
    </View>
  );
};

export default App;
