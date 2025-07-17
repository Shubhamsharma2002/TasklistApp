import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppScreen, Dummy_task } from '../utils/Constant'
import HomeScreen from '../screens/HomeScreen'
import AddTaskScreen from '../screens/AddTaskScreen'
const AppManager = () => {
    const [currentScreen , setCurrentScreen] = useState(AppScreen.AddTaskScreen);
    const [task , setTask] = useState([...Dummy_task]);
  return (
    // use to define the app state
    <View>
     {currentScreen === AppScreen.AddTaskScreen?(
        <AddTaskScreen/>
     ):(
        <HomeScreen task={task}/>
     ) }
    </View>
  )
}

export default AppManager

const styles = StyleSheet.create({})