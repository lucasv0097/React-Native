import React, { Component } from "react";

import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class Post extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={{ uri: this.props.foto.urlPerfil }}
            style={styles.perfil_foto}
          ></Image>

          <Text>{this.props.foto.loginUsuario}</Text>
        </View>
        <Image
          source={{ uri: this.props.foto.urlFoto }}
          style={styles.post}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    margin: 10,
    flexDirection: "row",
    alignItems: "baseline"
  },
  perfil_foto: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  post: {
    marginRight: 10,
    width: width,
    height: width
  }
});
