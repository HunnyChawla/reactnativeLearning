import { StyleSheet,Text } from "react-native";

function GoalItem(itemData) {
    return(<Text style = {styles.goalItem} >{itemData.text}</Text>)
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor:'purple',
        padding:5,
        margin: 8,
        color: 'white',
        borderRadius: 5,
        fontWeight: 'bold'
    }
})

export default GoalItem;