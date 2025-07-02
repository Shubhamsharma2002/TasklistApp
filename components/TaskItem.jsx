import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";

const TaskItem = ({ title, description, createdAt, id }) => {
  return (
    // card using react native paper
    <Card style={styles.card}>
      <Card.Title title={title} />
      <Card.Content style={styles.padding} title={title} />
      <Card.Content>
        <Text variant="titleLarge">{description}</Text>
      </Card.Content>
      <Card.Actions
        style={{
          width: "100%",
          display: "flex",
          ...styles.padding
        }}
      >
        <Button style={{ marginRight: "auto",  }}>Delete</Button>
        <Button>Coplete</Button>
      </Card.Actions>
    </Card>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
    padding:{
        padding:10
    },
    card: {
  margin: 10,
  borderRadius: 8,
  backgroundColor: "lightpink", // Required for elevation to work
  ...Platform.select({
    android: {
      elevation: 20,
    },
    ios: {
      shadowColor: "black",
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
    },
  }),
}

});
