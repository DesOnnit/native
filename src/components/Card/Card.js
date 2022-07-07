/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../style/card';
import HTMLView from 'react-native-htmlview';
export default function Card(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigate ? props.handleNavigate(props.card.id) : '';
      }}
      style={styles.card}>
      <Text style={styles.title}>{props.card.title}</Text>
      <Image
        source={{uri: props.card.image_url}}
        style={styles.img}
        resizeMode="contain"
      />
      <HTMLView value={props.card.short_text} />
    </TouchableOpacity>
  );
}
