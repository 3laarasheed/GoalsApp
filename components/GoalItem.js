import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  // trying to make the helper function with the same idea
  //   function deleteGoalHandler() {
  //     props.onDeleteItem(props.id);
  //   }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        // onPress ={deleteItemHandler}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={
          ({ pressed }) => pressed && styles.pressedItem
          // (pressDtata) => pressData.pressed
          // object destructuring directly get the property pressed
        }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

// style prop of pressable takes a function
// instead of object as alternative as it is called automatically
// whenever press state changes and all data stored in argument using object destructuring

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

// import { StyleSheet, View, Text, Pressable } from "react-native";

// function GoalItem(props) {
//   return (
//     <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
//       <View style={styles.goalItem}>
//         <Text style={styles.goalText}>{props.text}</Text>
//         {/* text property is chosen name which we should pass
//         by the same name as a property from value holder */}
//       </View>
//     </Pressable>
//   );
// }

// export default GoalItem;

// const styles = StyleSheet.create({
//   goalItem: {
//     margin: 8,
//     padding: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e0acc",
//     //color: "white",
//     // for you to know child can't inherit style from parent
//   },
//   goalText: {
//     color: "white",
//   },
// });
