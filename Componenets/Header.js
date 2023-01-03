import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
// import Menu from './menu';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.img}
        source={{
          uri: "https://www.shutterstock.com/shutterstock/photos/1554767198/display_1500/stock-vector-full-stack-developer-concept-with-character-can-use-for-web-banner-infographics-hero-images-1554767198.jpg",
        }}
      />

      <View style={{ marginTop: 45, marginLeft: 80 }}>
        <Text style={{ color: "black", fontWeight: 900, fontSize: 30 }}>
          WELCOME TO
        </Text>
        <View style={{ flexDirection: "row", position: "relative", right: 25 }}>
          <Text
            style={{
              color: "blue",
              fontWeight: 900,
              fontSize: 30,
              marginRight: 30,
            }}
          >
            CODING
          </Text>
          <Text
            style={{
              color: "blue",
              fontWeight: 900,
              fontSize: 30,
              marginRight: 20,
            }}
          >
            EMPIRE
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          marginRight: 20,
          marginLeft: 20,
          letterSpacing: 5,
          whiteSpace: "nowrap",
        }}
      >
        <Text style={{ color: "#999999", fontSize: 20, lineHeight: 26 }}>
          Computer programming is the process of performing a particular
          computation, usually by ,designing and building an executable
          computer.
        </Text>
      </View>
      
    </View>
    
  );
}
const styles = StyleSheet.create({
    mainContainer:{
      flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20
    },
    img:{
      width:'100%',
      height:200,
      marginLeft:20,
      marginRight:20,
      borderRadius:20,
      // borderWidth:1,
      // borderColor:'blue',
      resizeMode:'contain'
    }
})

export default Header