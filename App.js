import { StyleSheet, View, TextInput, Button,  FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './component/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setGoalsCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    setGoalsCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}
    ]);
    console.log(courseGoals);
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder="Add your Goal here"></TextInput>
        <Button title="Add goal" onPress={addGoalHandler}></Button>
      </View>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 24,
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    width: '70%'
  },
  goalsContainer: {
    flex: 5
  }
});
