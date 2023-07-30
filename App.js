import { StyleSheet, View, TextInput, Button,  FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';

export default function App() {
  const [courseGoals, setGoalsCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setGoalsCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: enteredGoalText, id: Math.floor(Math.random() * 100000).toString()}
    ]);
    console.log(courseGoals);
  }

  function deleteGoal(id) {
    setGoalsCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => {
        return goal.id !== id;
      })
  });
  }
  
  return (
    <View style={styles.container}>
      <GoalInput onAddGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
          return (
          <GoalItem 
            text = {itemData.item.text} 
            key = {itemData.item.id}
            id = {itemData.item.id}
            onDelete = {deleteGoal}/>
          )
        }}
          keyExtractor={itemData => itemData.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
