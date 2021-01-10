import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return(
    <View>
      <View style={{width: 80, height:80, backgroundColor: '#0abde3'}}></View>
      <Text>Ian Febrian</Text>
      <Text>Rizky</Text>
      <Home />
      <Foto />
      <TextInput style={{borderWidth: 1}} />
    </View>
  )
}

const Home = () => {
  return <Text>Halaman Home untuk Ian</Text>
}

const Foto = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}} />
}

export default App;