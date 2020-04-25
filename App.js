import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

export default function App() {

  useEffect(() => {
    if (this.animation) {
      this.animation.play();
    }
  }, [])

  return (
    <View style={styles.container}>
      <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
          }}
          source={require('./assets/anim.json')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
