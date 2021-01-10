import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import macbook from '../../asset/image/macbook.jpg';
const StylingComponent = () => {
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
        <View
          style={{
            padding: 12,
            backgroundColor: '#f2f2f2',
            width: 212,
            borderRadius: 8,
          }}>
          <Image
            source={macbook}
            style={{width: 188, height: 107, borderRadius: 8}}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
            New Macbook Pro 2019
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#f2994a',
              marginTop: 12,
            }}>
            Rp 25.000.000
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: 'black',
              marginTop: 12,
            }}>
            Jakarta Barat
          </Text>
          <View
            style={{
              backgroundColor: '#6fcf97',
              borderRadius: 25,
              paddingVertical: 6,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
              }}>
              BELI
            </Text>
          </View>
        </View>
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
    },
  });

  export default StylingComponent;