import React, { useState } from 'react'
import { TouchableOpacity,View,TextInput } from 'react-native'
// import { Tex } from 'react-native-gesture-handler'
// import { View } from 'react-native-web'
function AssignTask({navigation}) {
    const [name,setname] = useState("");
    const [deadline,setdeadline] = useState(0);
  return (
    <View>
      <View>
        <TextInput
          style={styles.task}
          placeholder="Task Name"
          onChangeText={(name) => setname(name)}
        />
      </View>

      <View>
        <TextInput
          style={styles.deadline}
          placeholder="deadline"
          onChangeText={(deadline) => setdeadline(deadline)}
        />
      </View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("AddManager");
      }} >
        <Text>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AssignTask