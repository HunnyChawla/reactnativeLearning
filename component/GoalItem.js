import { Pressable, StyleSheet, Text } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress = {props.onDelete.bind(this, props.id)} >
            <Text style={styles.goalItem} >{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: 'purple',
        padding: 5,
        margin: 8,
        color: 'white',
        borderRadius: 5,
        fontWeight: 'bold'
    }
})

export default GoalItem;