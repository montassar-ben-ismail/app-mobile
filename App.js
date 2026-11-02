import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        borderWidth:1,
        width:"98%",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:10
        }}>
        <Text 
          style={{ 
          fontWeight: "bold",
          fontSize:32,
          color:"rgb(25,78,78)",
          backgroundColor:"red",
          width:"100%",
          textAlign:"center",
       }}>
        Bienvenue
        </Text>
        <TextInput placeholder="Email@site.com" style={styles.inputStyle} inputMode="email"></TextInput>
        <TextInput placeholder="*************" secureTextEntry={true} style={styles.inputStyle}></TextInput>

        <Button title="Submit" color={"green"}></Button>
        <Button title="Exit" color={"green"}></Button>
        <Text>Créer nouveau compte</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:{
    width:"80%",
    height:45,
    borderWidth:1,
    borderRadius:8,
    margin:3
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center", //align horizontal
    justifyContent: "center",//align vertical
  },
});
