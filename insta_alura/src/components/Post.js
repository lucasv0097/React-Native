import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Post extends React.Component {
  render() {
    return (
        <View>
        <View style={styles.header}>
            <Image source={require('../../resources/images/perfil.jpg')}
            style={styles.perfil_foto}></Image>

            <Text>{item.user}</Text>
        </View>

        <Image source={require('../../resources/images/javascript.png')}
            style={styles.post}></Image>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    margin: 10,
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  perfil_foto:{
    width: 40,
    height: 40,
    borderRadius: 20 
  },
  post:{
    marginRight: 10,
    width: width,
    height: width
  }
});