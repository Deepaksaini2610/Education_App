import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBagShopping, } from '@fortawesome/free-solid-svg-icons';
const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-evenly",
          marginBottom: 10,
          textTransform: "uppercase",
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <Image
              style={styles.iconstyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/1165/1165674.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Course");
            }}
          >
            <Image
              style={styles.iconstyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2436/2436874.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("User");
            }}
          >
            <Image
              style={styles.iconstyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Contact");
            }}
          >
            <Image
              style={styles.iconstyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1034/1034255.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

mainContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-evenly',
    marginBottom:10
}
,
iconstyle:{
  width:30,
  height:30,
  padding:10
}
})
export default Menu