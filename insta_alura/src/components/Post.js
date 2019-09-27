import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: this.props.foto
    };
 }
  
  carregaIcone(likeada){
    return likeada ? require('../../resources/images/s2-checked.png') : require('../../resources/images/s2.png')
  }

  like(){
    const fotoAtualizada ={
      ...this.state.foto,
      likeada: !this.state.foto.likeada
    }
    this.setState({foto: fotoAtualizada});
  }

  render() {
    const {foto}= this.state;

    return (
      <View>
        <View style={styles.header}>
          <Image
            source={{uri: this.props.foto.urlPerfil }}
            style={styles.perfil_foto} />
          <Text>{this.state.foto.loginUsuario}</Text>   
        </View>

        <Image
          source={{ uri: foto.urlFoto }}
          style={styles.post} />

        <View style={styles.rodape}>
          <TouchableOpacity onPress={this.like.bind(this)}>
            <Image style={styles.botaoDeLike}
              source={this.carregaIcone(foto.likeada)} />
          </TouchableOpacity>
        </View>
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
  },
  botaoDeLike: {
    height: 40,
    width: 40 
  },
  rodape:{
    margin:10
  }
});
