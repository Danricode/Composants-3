import {Text, View, Image } from 'react-native';
import { styles } from "./Style.js";

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.photo}
        source={require('./assets/rover.jpg')}
      />
      <Text style={styles.text}>Le rover Opportunity
</Text>
    </View>
  );
}

