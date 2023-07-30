import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native"
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

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.imgStyle} source={require('../assets/images/goal.png')}></Image>
                <TextInput
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    placeholder="Add your Goal here"
                    placeholderTextColor="white" 
                    value={enteredGoalText}>
                </TextInput>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}><Button color = '#0e29c4' title="Add goal" onPress={addGoalHandler}></Button></View>
                    <View style={styles.btn}><Button color = '#c40e5d' title="Cancel" onPress={props.onClose}></Button></View>
                </View>

            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: 24,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#5b12b5'
    },
    textInput: {
        borderWidth: 1,
        width: '70%',
        color: 'white',
        borderColor:'white'
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 10
    },
    btn: {
        padding: 10
    },
    imgStyle: {
        height: 100,
        width: 100
    }
});

export default GoalInput;