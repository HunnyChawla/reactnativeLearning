import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setGoalsCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setGoalsCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, { text: enteredGoalText, id: Math.floor(Math.random() * 100000).toString() }
    ]);
    console.log(courseGoals);
    onStartAddGoal();
  }

  function deleteGoal(id) {
    setGoalsCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => {
        return goal.id !== id;
      })
    });
  }

  function onStartAddGoal() {
    setShowModal(!showModal);
  }

  return (
    <>
    <StatusBar style='auto'/>
    <View style={styles.container}>
      <Button title="Add Goal" color = '#0e29c4' onPress={onStartAddGoal}></Button>
      <GoalInput isVisible={showModal} onAddGoalHandler={addGoalHandler} onClose={onStartAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                key={itemData.item.id}
                id={itemData.item.id}
                onDelete={deleteGoal} />
            )
          }}
          keyExtractor={itemData => itemData.id}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'#5b12b5'
  },
  goalsContainer: {
    flex: 5
  }
});
