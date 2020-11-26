import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import egg01 from './assets/egg01.png';
import egg02 from './assets/egg02.png';
import egg03 from './assets/egg03.png';

export default function App() {
  const [count, setCount] = React.useState(100);

  let countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count + 100);
    }
  };

  interface Result {
    msg: string | number;
    img: Object;
  }
  let result: Result = {
    msg: 100,
    img: egg01,
  };

  if (count === 75) {
    result.msg = "まだまだ割れない";
  } else if (count === 50) {
    result.msg = "割れてきた";
  } else if (count === 25) {
    result.msg = "もう割れそう";
  } else if (count === 0) {
    result.msg = "割れた";
  } else {
    result.msg = count;
  }

  if (count <= 50 && count > 0) {
    result.img = egg02;
  } else if (count === 0) {
    result.img = egg03;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{result.msg}</Text>
      <TouchableOpacity onPress={() => countDown()}>
        <Image source={result.img} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 45,
    padding: 8,
    width: "100%",
    height: 75,
    textAlign: "center",
    backgroundColor: "black",
    color: "#195",
  },
  logo: {
    margin: 50,
    resizeMode: "contain",
  },
});
