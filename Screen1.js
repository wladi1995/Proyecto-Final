import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text,TextInput, Image, Button, StyleSheet,ImageBackground,Alert } from 'react-native';
const image = {uri: 'https://th.bing.com/th/id/R.ef112b7b70234511bb90117f0750bbec?rik=ITumbnqNTeKwDw&riu=http%3a%2f%2ffc02.deviantart.net%2ffs70%2fi%2f2013%2f174%2f7%2f8%2fwallpaper_celeste_y_violeta__abstracto__by_tutorialespopcorn-d6accdr.png&ehk=UshNG%2ftbj0%2fleN3NiR%2ftihrHDKZNQjjSHf%2b7lEKt%2fNs%3d&risl=&pid=ImgRaw&r=0'};
const Screen1 = ({ navigation }) => {
    const [usuario,setUsuario]= useState('');
    const [contraseña,setContraseña]= useState('');
    const users = [
      {id:1, username: 'admin', password:'123456'},
      {id:2, username:'itsqmet', password:'12345678'},
     ]
  return (
    <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.text}>Por favor ingrese sus credenciale </Text>
      
      <Image
      
        source={{uri:'https://tecnomundoec.com/wp-content/uploads/2020/04/logo-2.1.png'}} 
        style={styles.imagen}
      />
      <Text style={styles.text} > <Icon name="user" size={20} color="#666" style={styles.icon} /> User Name</Text>
     
        <TextInput style={styles.input}
        placeholder="Usuario" 
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
     />
     <Text style={styles.text} > <Icon name="lock" size={20} color="#666" style={styles.icon} /> Password</Text>
      <TextInput style={styles.input}
        placeholder="Contraseña"
        value={contraseña}
        onChangeText={(text) => setContraseña(text)}
        secureTextEntry 
      />
      <Button
        title="Acceder"
        onPress={() => {if(users[1].username==usuario &users[1].password==contraseña ||users[0].username==usuario &users[0].password==contraseña){
          navigation.navigate('Screen2')
          setContraseña('');
          setUsuario('');
        }else{
          Alert.alert('ALERTA', 'LAS CREDENCIALES NO SON CORRECTAS', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        } }}
      />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagen: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },input: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 5
  },image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
  },
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'left',
   /* backgroundColor: '#000000c0',*/
   
  },
});

export default Screen1;
