import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Chip, TextInput } from 'react-native-paper'

const AddTaskScreen = () => {
  const [title , setTitle] = useState(" ")
   const [description , setdescription] = useState(" ")
   const handlesubmit = ()=>{
      console.log(title);
      console.log(description);
      
      
   }
  return (
    <View style ={styles.container}>
      <Chip  mode="outlined"  style={styles.headings}>AddTask</Chip>
      
      <TextInput value={title} onChangeText={(t) => setTitle(t)}  label="Title" mode='outlined' placeholder='Enter the Title' style={styles.input} />
      <TextInput value={description} onChangeText={(t) => setdescription(t)} multiline label="Description" mode='outlined' placeholder='Enter the Description'  style={styles.input}/>
      <Button onPress={handlesubmit}>Add Task</Button>
    </View>
  )
}

export default AddTaskScreen

const styles = StyleSheet.create({
  container:{
         margin:10
  },
  input:{
    marginVertical:10
  },
  headings:{
    fontSize:26,
    fontWeight:"600",
    textAlign:"center"
  }
})