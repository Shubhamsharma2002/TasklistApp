import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Chip, Text } from "react-native-paper";

const getStatusChipStyle = (status) => {
  switch (status) {
    case "completed":
      return { label: "Completed", style: styles.completedChip };
    case "in-progress":
    case "progress":
      return { label: "In Progress", style: styles.inProgressChip };
    case "pending":
      return { label: "Pending", style: styles.pendingChip };
    default:
      return { label: "Unknown", style: styles.defaultChip };
  }
};

const TaskItem = ({ title, description, createdAt, id, status }) => {
  const { label, style } = getStatusChipStyle(status);

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.padding}>
        <Chip style={[styles.chip, style]}>{label}</Chip>
      </Card.Content>

      <Card.Title title={title} />
      <Card.Content style={styles.padding}>
        <Text variant="titleLarge">{description}</Text>
      </Card.Content>

      <Card.Actions style={{ width: "100%", display: "flex", ...styles.padding }}>
        <Button style={{ marginRight: "auto" }}>Delete</Button>
        <Button>Complete</Button>
      </Card.Actions>
    </Card>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  card: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: "lightpink",
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
  },
  chip: {
    alignSelf: "flex-end",
    marginBottom: 1,
  },
  completedChip: {
    backgroundColor: "#4caf50",
  },
  inProgressChip: {
    backgroundColor: "#ff9800",
  },
  pendingChip: {
    backgroundColor: "#f44336",
  },
  defaultChip: {
    backgroundColor: "#9e9e9e",
  },
});
