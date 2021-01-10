import React from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70/2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center', marginHorizontal: 20}}>{props.judul}</Text>
    </View>
  );
};

export default function index() {
  return (
    <View>
      <Text>Materi Komponen Dinamis Dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
            <Story
                judul="Youtube Channel"
                gambar="https://instagram.fsub3-2.fna.fbcdn.net/v/t51.2885-15/s150x150/71525546_194857368212200_3489326250818885074_n.jpg?_nc_ht=instagram.fsub3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=cMlTkJwoDTUAX-kS7LB&tp=1&oh=ac04a0fb308becfa1d93b0174c1b7271&oe=602571E9"
            />
            <Story
                judul="Kelas Online"
                gambar="https://instagram.fsub3-1.fna.fbcdn.net/v/t51.2885-15/s150x150/71192934_1723543477781354_7097170052889833273_n.jpg?_nc_ht=instagram.fsub3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=sMeDpBJmvsQAX-HyX3L&tp=1&oh=ee804558c23e43954677a9eb71b8a084&oe=6022E7D3"
            />
            <Story
                judul="Kelas Offline"
                gambar="https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/69938165_755568344870900_7617246324023311416_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=XVHeld_s1eIAX_0rnUn&tp=1&oh=548b56fc37b2483f5367af90794a2a87&oe=602555D6"
            />
            <Story
                judul="Youtube Channel"
                gambar="https://instagram.fsub3-2.fna.fbcdn.net/v/t51.2885-15/s150x150/71525546_194857368212200_3489326250818885074_n.jpg?_nc_ht=instagram.fsub3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=cMlTkJwoDTUAX-kS7LB&tp=1&oh=ac04a0fb308becfa1d93b0174c1b7271&oe=602571E9"
            />
            <Story
                judul="Kelas Online"
                gambar="https://instagram.fsub3-1.fna.fbcdn.net/v/t51.2885-15/s150x150/71192934_1723543477781354_7097170052889833273_n.jpg?_nc_ht=instagram.fsub3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=sMeDpBJmvsQAX-HyX3L&tp=1&oh=ee804558c23e43954677a9eb71b8a084&oe=6022E7D3"
            />
            <Story
                judul="Kelas Offline"
                gambar="https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/69938165_755568344870900_7617246324023311416_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=XVHeld_s1eIAX_0rnUn&tp=1&oh=548b56fc37b2483f5367af90794a2a87&oe=602555D6"
            />
            <Story
                judul="Youtube Channel"
                gambar="https://instagram.fsub3-2.fna.fbcdn.net/v/t51.2885-15/s150x150/71525546_194857368212200_3489326250818885074_n.jpg?_nc_ht=instagram.fsub3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=cMlTkJwoDTUAX-kS7LB&tp=1&oh=ac04a0fb308becfa1d93b0174c1b7271&oe=602571E9"
            />
            <Story
                judul="Kelas Online"
                gambar="https://instagram.fsub3-1.fna.fbcdn.net/v/t51.2885-15/s150x150/71192934_1723543477781354_7097170052889833273_n.jpg?_nc_ht=instagram.fsub3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=sMeDpBJmvsQAX-HyX3L&tp=1&oh=ee804558c23e43954677a9eb71b8a084&oe=6022E7D3"
            />
            <Story
                judul="Kelas Offline"
                gambar="https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/69938165_755568344870900_7617246324023311416_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=XVHeld_s1eIAX_0rnUn&tp=1&oh=548b56fc37b2483f5367af90794a2a87&oe=602555D6"
            />
        </View>
      </ScrollView>
    </View>
  );
}
