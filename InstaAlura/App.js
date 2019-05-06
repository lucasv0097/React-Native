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

export default class App extends React.Component {
  render() {

    const photo =[
      { id: 1, user: 'Lucas' },
      { id: 2, user: 'Daniela' },
      { id: 3, user: 'Paulo' },
      { id: 4, user: 'Luara' }
  ];
    return (
      <FlatList style = { { marginTop: 20 } }
        keyExtractor = { item => String( item.id ) }
        data = { photo }
        renderItem = { ( { item } ) =>
          
          <View>
            <View style = { { margin: 10, flexDirection: 'row', alignItems: 'baseline' } }>
              <Image source = { require( './resources/images/perfil.jpg' ) } 
                style = { { width: 40, height: 40, borderRadius: 20 } }></Image>
              
              <Text>{ item.user }</Text>
            </View>
            
            <Image source = { require( './resources/images/javascript.png' ) } 
            style = { { marginRight : 10, width: width, height: width } }></Image>
          </View>
  }
      />
    );
  }
}