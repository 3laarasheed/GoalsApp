import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // helper function to pass a value with props from child to parent
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // to make it empty again
  }

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText} // to make it empty again
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5a0cee" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

// import { View, TextInput, Button, StyleSheet } from "react-native";
// import { useState } from "react";

// function GoalInput(props) {
//   const [enteredGoalText, setEnteredGoalText] = useState('');
//   //   as i need to add entered goal text i need to do it manually
//   // by passing it to a function which will be hold by another
//   // which the last i can use it as prop function as a value
//   function addGoalHandler() {
//     // addGoalHandler here is another com and another function
//     props.onAddGoal(enteredGoalText);
//     // noice that this is from child to parent so onAddGoal
//     // is a function i recieve from parent and manually add value to it
//     setEnteredGoalText('');
//     // reset the state it self not the view line 37
//   }

//   function goalInputHandler(enteredText) {
//     // as onChangeText is built in RN so it automatically handle
//     // input and send it to value to recieve as parameter

//     // now after we get each key stroke we need to store its updated value as a state
//     // using the function that update your state value your registered
//     setEnteredGoalText(enteredText);
//     // and that line store the value to the created variable you regitered automatically
//   }

//   // to communicate from child to the parent automatically
//   // you can by passing event handler function as a value via props
//   return (
//     //  here is User input area handling
//     <View style={styles.inputContainer}>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Your Course Goal!"
//         onChangeText={goalInputHandler}
//         value={enteredGoalText}
//       />
//       {/* onAddGoal is speacial prop that will be provided
//       by the parent componentwhich holds a function as a value
//       that will be executed upon a press */}
//       <Button title="Add Goal" onPress={addGoalHandler}></Button>
//     </View>
//   );
// }

// export default GoalInput;

// const styles = StyleSheet.create({
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   textInput: {
//     border: 1,
//     borderColor: "#ccc",
//     width: "70%",
//     marginRight: 8,
//     paddind: 8,
//   },
// });
