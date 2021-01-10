import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import profile2 from './profile2.png';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
          <View
            style={{backgroundColor: 'yellow', height: 50, width: 50}}></View>
          <View
            style={{backgroundColor: 'green', height: 50, width: 50}}></View>
          <View
            style={{backgroundColor: 'purple', height: 50, width: 50}}></View>
        </View>
        <View style={{flexDirection: 'row',  alignItems: 'center', marginTop: 20, marginLeft: 20}}>
          <Image source={profile2} style={{width: 100, height: 100, borderRadius: 50}} />
          <View style={{marginLeft: 14}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Muhamad Rizky Fajar Febrian</Text>
              <Text style={{ color: 'gray'}}>Teknik Informatika - S1</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;