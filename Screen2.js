import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,Image,ImageBackground, ScrollView} from 'react-native';
import Card from './Components/Card';
const image = {uri: 'https://th.bing.com/th/id/R.ef112b7b70234511bb90117f0750bbec?rik=ITumbnqNTeKwDw&riu=http%3a%2f%2ffc02.deviantart.net%2ffs70%2fi%2f2013%2f174%2f7%2f8%2fwallpaper_celeste_y_violeta__abstracto__by_tutorialespopcorn-d6accdr.png&ehk=UshNG%2ftbj0%2fleN3NiR%2ftihrHDKZNQjjSHf%2b7lEKt%2fNs%3d&risl=&pid=ImgRaw&r=0'};
const Screen2 = () => {
  const [num1,setNum1]= useState(0);
const [num2,setNum2]= useState(0);
const [result,setResult]= useState(0);
const products = [
 {id: 1, name: 'REDRANGON TECLADO MECANICO KUMARA', price: 20.50, foto: 'https://tecnomundoec.com/wp-content/uploads/TECLADO-KUMARA-WH.jpg'},
 {id: 2, name: 'ASUS M1603QA-MB240 AMD RYZEN 7-5800HS | 8GB RAM | 512GB SSD | PANTALLA 16″ HD | FREEDOS | TECLADO ESPAÑOL | BLUE', price: 685, foto: 'https://tecnomundoec.com/wp-content/uploads/asus-r7.jpg'},
 {id: 3, name: 'IMPRESORA EPSON ECOTANK L3210', price: 250, foto:'https://tecnomundoec.com/wp-content/uploads/2020/04/epsonl3110750x555-2.jpg'},
 {id: 4, name: 'CAMARA WIFI C2C 1080P', price: 36, foto:'https://tecnomundoec.com/wp-content/uploads/CAMARA-C2C-.jpg'},
 {id: 5, name: 'ALTAVOCES LED GAMING SCORPION (MA-SG118)', price: 15, foto:'https://tecnomundoec.com/wp-content/uploads/2020/05/SG118-1.jpg'}]
 const sumaPrecios = products.reduce((total, producto) => total + producto.price, 0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
          {products.map((user, index) => (
           
            <View  >
              <Card info={user} ></Card>
              
            </View>
            
          ))}
          
          <Text style={styles.title}>Total: ${sumaPrecios}</Text>
        </ScrollView>
        </ImageBackground> 
    </View>
    
  );

};



export default Screen2;

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 8,
    },
    titulo: {
      fontSize: 20,
      color: 'red',
      fontWeight: 'bold',
      justifyContent: 'center',
      marginBottom: 6,
      backgroundColor: '#80ff80',
  
    },
    image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  });