import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';

const App = () => {
  return (
    // <SampleComponent />
    <View>
      <StylingReactNativeComponent />
    </View>
  );
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20, 
          marginLeft: 20, 
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  }
})

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}></View>
      <Text>Ian Febrian</Text>
      <Text>Rizky</Text>
      <Home />
      <Foto />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text>Halaman Home untuk Ian</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Class Component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100}}
        />
        <Text>Ini Hewan</Text>
      </View>
    );
  }
}

export default App;
