import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, ImageBackground, BackHandler } from 'react-native';
import SignUp from './SignUp';
import Home from './Home';
import firebase from "../Config"


const auth=firebase.auth()


export default function Auth(props) {
  
  var email,password;

  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.container}>
      <View style={{
        borderWidth:1,
        width:"98%",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:4,
        borderRadius:10,
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
        <TextInput placeholder="Email@site.com" style={styles.inputStyle} inputMode="email" onChangeText={(txt)=>{email=txt;}} ></TextInput>
        <TextInput placeholder="*************" secureTextEntry={true} style={styles.inputStyle} onChangeText={(txt)=>{password=txt;}} ></TextInput>

        <Button title="Submit"
            color={"green"}
            onPress={()=>{
                    auth.signInWithEmailAndPassword(email,password)
                    .then(()=>{props.navigation.navigate("Home")})
                    .catch((err)=>{alert(err)})
            }} ></Button>
        <Button title="Exit" 
            color={"green"} 
            onPress={()=>{BackHandler.exitApp();}}></Button>
        <Text onPress={()=>{ props.navigation.navigate("SignUp") }}>Créer nouveau compte</Text>
        </View>
      <StatusBar style="auto" />
    </ImageBackground>
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
