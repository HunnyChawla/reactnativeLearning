import { View, StyleSheet,TextInput,Button } from "react-native"
import { useState } from "react";
function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return(<View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        onChangeText={goalInputHandler} 
        placeholder="Add your Goal here"
        value={enteredGoalText}></TextInput>
        <Button title="Add goal" onPress={addGoalHandler}></Button>
    </View>)
}
const styles = StyleSheet.create({
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
});

export default GoalInput;