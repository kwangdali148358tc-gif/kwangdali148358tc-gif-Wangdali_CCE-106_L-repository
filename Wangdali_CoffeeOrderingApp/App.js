import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const[score,  setScore] = useState(0);
  const Addfive = () => {
  setScore ( score + 5 );
};
  return (
    <View style={styles.container}>
    <Text style = {styles.text}>  
      {score}
    </Text>
      <Pressable onPress={Addfive} style={styles.button}>
        press to add 5
      </Pressable>
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
  botton: {
    alignItem: "center",
    width: 100,
    height: 100,
    borderBlockColor: "black",
  },
  text: {
    alignItem: "center",
    width: 100,
    height: 100,
    borderBlockColor: "black",
}
});