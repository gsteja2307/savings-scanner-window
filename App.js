import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Header from './components/Header';
// import { Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <View style={styles.container}>
          <Header>
            <Image resizeMode='stretch'
              style={{width:200, height: 30,marginTop:29, }}
              source={require('./assets/headerImage1.png')}
            />
          </Header>
          <Header>
            <Image resizeMode='stretch'
              style={{ width: 100, height: 30, marginTop: 29, }}
              source={require('./assets/headerImage2.png')}
            />
          </Header>
        </View>
        <View>
          <Footer>
          <Image resizeMode='stretch'
              style={{width:200, height: 30,marginTop:29, }}
              source={require('./assets/footer.png')}
          />
          </Footer>
        </View>
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
