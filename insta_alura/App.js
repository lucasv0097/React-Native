import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import Post from "./src/components/Post";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foto: [
        { id: 1, user: "Lucas" },
        { id: 2, user: "Daniela" },
        { id: 3, user: "Paulo" },
        { id: 4, user: "Luara" }
      ]
    };
  }

  componentDidMount() {
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
      .then(resposta => resposta.json())
      .then(json => this.setState({ foto: json }));
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => String(item.id)}
        data={this.state.foto}
        renderItem={({ item }) => <Post foto={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});
