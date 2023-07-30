import { StyleSheet, View, TextInput, Button,  FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';

export default function App() {
  const [courseGoals, setGoalsCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setGoalsCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}
    ]);
    console.log(courseGoals);
  }
  
  return (
    <View style={styles.container}>
      <GoalInput onAddGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
          return <GoalItem text = {itemData.item.text}/>
        }}
          keyExtractor={itemData => itemData.key}
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
