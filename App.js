/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
//react navigations
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';

const SplashScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#ffafbd', '#ffafbd', '#89f7fe', '#50A7C2']}
      style={styles.linearGradient}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={styles.logo}
          source={require('./src/assets/images/logo.jpg')}
        />
      </View>
    </LinearGradient>
  );
};
const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <View style={{flex: 1}}>
        <WebView
          source={{
            uri:
              'https://vietnamtravel.test2.siten.vn/vietnam.travel/index.html',
          }}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
        />
        {loading ? <SplashScreen /> : null}
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 120,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default App;
