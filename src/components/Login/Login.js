/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {login} from '../../style/login';
import {auth} from '../../utils/auth';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  function handleChangeEmail(text) {
    setEmail(text);
  }
  function handleChangePassword(text) {
    setPassword(text);
  }
  const handleLogin = async (email, password) => {
    const response = await auth(email, password);
    console.log(response);
    if (response.ok) {
      dispatch({
        type: 'login',
        payload: {
          user: response.data.user,
          data: {
            accessToken: response.headers['access-token'],
            client: response.headers.client,
            uid: response.headers.uid,
          },
        },
      });
      navigation.navigate('News');
    }
  };
  return (
    <View style={styles.login}>
      <View style={styles.form}>
        <Text style={styles.title}>Вход</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Введите ваш e-mail"
            onChangeText={handleChangeEmail}
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Введите ваш пароль"
            onChangeText={handleChangePassword}
          />
        </View>
        <Button title="Войти" onPress={() => handleLogin(email, password)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create(login);
