import { View,Text,Image,StyleSheet} from "react-native";
import React from "react";

export default function Card(props){
    console.log(props);
    return(
        <View style={styles.input}>
            <Text style={styles.titulo}>Prducto:
            <Text  style={styles.datos}> {props.info.name}</Text></Text>
            <Image style={styles.imagen} source={{uri: props.info.foto}} ></Image>
            <Text style={styles.titulo}>Precio:
            <Text  style={styles.datos}> {props.info.price}</Text></Text>
        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20
    }, 
    input: {
      backgroundColor:'#DDDDDD',
      width: 275,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 2
  },
  titulo:{
    fontSize: 15, 
    color: 'red', 
    fontWeight: 'bold'
  },
  datos:{
    fontSize: 10, 
    color: 'black', 
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
  },imagen: {
    height: 150,
    width: 250,
    marginVertical: 20,
  },
  }
  );