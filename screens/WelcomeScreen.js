import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Modal } from 'react-native';
import db from '../config';


export default class WelcomeScreen extends React.Component{

  constructor(){
    super();
    this.state={
      emailId:'',
      password:''
    }
  }
//<Modal visible=true>
   render(){
     return(
       <View style={styles.container}>
        <View style={styles.profileContainer}>
        <Text style={styles.title}>Book Santa</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor="#FFFF" 
          keyboardType='email-address'
          onChangeText={(text)=>{
            this.setState({emailId:text})
          }}/>

          <TextInput style={styles.loginBox}
          placeholder="password"
          placeholderTextColor="#FFFF" 
          secureTextEntry={true}
          onChangeText={(text)=>{
            this.setState({password:text})
          }}/>
          <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}>
            <Text style={styles.buttonText}>Sigup</Text>
          </TouchableOpacity>
        </View>
       </View>
     )
   }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
