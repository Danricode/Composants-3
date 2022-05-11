import { StyleSheet } from 'react-native';
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
  borderWidth: 5,
  borderColor:"black",
  borderRadius: 15,

    },
    text: {
      flex:1,
      marginTop:300,
      marginLeft:10,
      width:100,
      color:"red",
      fontSize:20,
        },
  });
  export { styles }