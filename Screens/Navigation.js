import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import Course from './Course';

import CourseDetails from './CourseDetails';
const stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // backgroundColor:"black",
            },
            headerTitle: "Course",
            headerTitleAlign: "center",
          }}
          name="Course"
          component={Course}
        />
        <stack.Screen
          name="User"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Student Data",
            headerTitleAlign: "center",
          }}
          component={User}
        />
        <stack.Screen
          name="Contact"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Contact Us",
            headerTitleAlign: "center",
            textTrasform: "uppercase",
          }}
          component={Contact}
        />
        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "About",
            headerTitleAlign: "center",
          }}
          name="About"
          component={About}
        />
        <stack.Screen
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Course Detail",
            headerTitleAlign: "center",
          }}
          name="CourseDetail"
          component={CourseDetails}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation