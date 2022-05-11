import { StyleSheet, Text, View, Image } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
      },
  photo: {
flex:3,
width:50,
height:300,
marginTop:200,
  },
  text: {
    marginTop:300,
    marginLeft:10,
    width:100,
      },
});
