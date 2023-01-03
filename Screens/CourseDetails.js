import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../Componenets/CourseData';
const CourseDetails = ({navigation,route}) => {
    const id = route.params.courseId;
    const idSelector = Courses.find((element) =>{
      return id === element.id
    })  
    console.log(id);
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
                {idSelector.name}
              </Text>
            </View>
            <View style={styles.para}>
              <Text>{idSelector.title}</Text>
              <View style = {{justifyContent:"center",alignItems:'center'}}>
                <Text>{idSelector.course1}</Text>
                <Text>{idSelector.course2}</Text>
                <Text>{idSelector.course3}</Text>
              </View>
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
                onPress={() => navigation.navigate("Course")}
              >
                <Text style={{ fontSize: 20, color: "white",textTransform:"uppercase" }}>
                  {idSelector.price} Join Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
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
export default CourseDetails;
