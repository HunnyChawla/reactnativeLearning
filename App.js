import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setGoalsCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    setGoalsCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, enteredGoalText
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
        {courseGoals.map((goal) =>  <Text style = {styles.goalItem} key={goal}>{goal}</Text> )}
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
  },
  goalItem: {
    backgroundColor:'purple',
    padding:5,
    margin: 8,
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bold'
  }
});
