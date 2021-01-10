import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import profile2 from '../../asset/image/profile2.png';

export default function Position() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Image source={profile2} style={styles.icon} />
        <Text style={styles.badge}>10</Text>
      </View>
      <Text style={styles.text}>Muhamad Rizky Fajar Febrian</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  badge: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
