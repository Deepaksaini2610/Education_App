import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Componenets/Header'
import Menu from '../Componenets/menu'
// import Menu from '../Componenets/menu'
const Home = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style = {{justifyContent:'center',marginBottom:20,marginLeft:20,marginRight:20,marginTop:100}}>
        <View style = {[styles.linestyle,{marginBottom:20}]}></View>
        <Menu />
        <View style = { [styles.linestyle,{marginVertical:20} ]}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
mainContainer:{
  // justifyContent:'center',
  // alignItems:'center',
  marginRight:20,
  marginLeft:20,
  flex:1
},
linestyle:{
  borderWidth:1,
  borderColor:'black',
  
}
})

export default Home