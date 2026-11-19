import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, ImageBackground, BackHandler } from 'react-native';

import firebase from "../Config";

const auth=firebase.auth();



export default function SignUp(props) {
  
  var email,password,confirmpassword;

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
        crier un compte
        </Text>
        <TextInput placeholder="Email@site.com" style={styles.inputStyle} inputMode="email" onChangeText={(txt)=>{email=txt;}} ></TextInput>
        <TextInput placeholder="*************" secureTextEntry={true} style={styles.inputStyle} onChangeText={(txt)=>{password=txt;}} ></TextInput>
        <TextInput placeholder="confirmer mot de passe" secureTextEntry={true} style={styles.inputStyle} onChangeText={(txt)=>{confirmpassword=txt;}} ></TextInput>

        <Button title="Signup"
            color={"green"}
            onPress={()=>{ 
                if (password!=confirmpassword){
                    alert("password non conforme!")
                }else{
                    auth.createUserWithEmailAndPassword(email,password)
                        .then(()=>{props.navigation.replace("Home")})
                        .catch((err)=>{alert(err)});
                } }} ></Button>
        <Button title="back" 
            color={"green"} 
            onPress={()=>{props.navigation.goBack();}}></Button>
        <Text>Créer nouveau compte</Text>
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
