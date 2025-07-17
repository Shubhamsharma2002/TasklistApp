import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import TaskItem from '../components/TaskItem'

const HomeScreen = ({task}) => {
  console.log("task",task)
  return (
    <View>
      <Text>HomeScreen</Text>
      {/* using api data for rendring */}
      <FlatList 
      data={task}
      keyExtractor={(item,index)=>item.title+index}
      renderItem={(i)=>(
        <TaskItem title={i.item.title} description={i.item.description} id={i.item.id} status={i.item.status}/>
      )}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})