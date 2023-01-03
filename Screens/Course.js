import React from 'react'
import {Image, FlatList,  Text, TouchableOpacity,StyleSheet,View } from "react-native";
// import { FlatList } from 'react-native-gesture-handler'
// import {  } from 'react-native-web';
import Courses from '../Componenets/Coursedata'
// import CourseCard from '../Componenets/CourseCard';
// import { useNavigation } from '@react-navigation/native';
// import Navigation from './Navigation';
function Course({navigation}) {
  function CourseCard({ item }) {
    // const navigation = useNavigation();
    return (
      <View style={styles.mainContainer}>
        <View style={styles.smallContainer}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 20,
              margin: 20,
            }}
          >
            <Image
              source={{
                uri: "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
              }}
              resizeMode="contain"
              style={{ width: 200, height: 200 }}
            />
            <View style={styles.coursePage}>
              <View style={styles.heading}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 900,
                    color: "darkblue",
                    lineHeight: "normal",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View style={styles.para}>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "lightblue",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 200,
                    height: 50,
                    borderRadius: 20,
                  }}
                  onPress={() => navigation.navigate("CourseDetail",{courseId:item.id})}
                >
                  <Text style={{ fontSize: 20, color: "white" }}>
                    Detailed Course
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item) => {
        item.id;
      }}
      data={Courses}
      renderItem={CourseCard}
    />
  );
}


  

const styles = StyleSheet.create({
  para: {
    padding: 4,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  coursePage: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
  },
  heading: {
    textTransform: "uppercase",

    fontWeight: 900,
    marginTop: 10,
  },
  smallContainer: {
    padding: 4,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    marginTop: 20,
    backgroundColor: "lightblue",
    borderRadius: 20,
  },
});
export default Course;