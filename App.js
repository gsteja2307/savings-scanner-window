import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Header from './components/Header';
// import { Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Header style={styles.container}>
            <Image resizeMode='cover'
              style={{ width: 100, height: 30, marginTop: 29, }}
              source={require('./assets/headerImage2.png')}
            />
            <Image resizeMode='cover'
              style={{width:200, height: 30,marginTop:29, }}
              source={require('./assets/headerImage1.png')}
            />
        </Header>
        <Header>
          <Text>We make it easy to complete your window installation projects</Text>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#000',
    flexDirection:'row',
    justifyContent:'space-around'
  },
});
