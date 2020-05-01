import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

export default function App() {

  const [anim, setAnim] = useState(null);

  useEffect(() => {
    if (anim) {
      anim.play();
    }
  }, [anim])

  return (
    <View style={styles.container}>
      <LottieView
          ref={animation => {
            setAnim(animation);
          }}
          style={{
            width: 400,
            height: 400,
          }}
          source={require('./assets/anim_V2.json')}
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
