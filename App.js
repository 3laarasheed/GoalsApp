import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setmodalIsVisible(true);
  }

  function endAddGoalHandler() {
    setmodalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
    // to close modal after add value to array
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    
      <StatusBar style="light"
      // we use fragment as it isn't allowed 
      // to use two sibiling components next to
      // each other at the top of jsx root
      />
      
      <View style={styles.appContainer}>
        {/* we need a button to control the modal visiblty through state */}
        <Button
          title="Add New Goal"
          color={"#a065ec"}
          // color ios'#a065ec'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: '#1e085a',
    // we can make it global for all screens app
    // from app.json that applied by expo
  },
  goalsContainer: {
    flex: 5,
  },
});

// {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />}
// condition statement

// // import { StatusBar } from 'expo-status-bar';
// import { useState } from "react";
// import { FlatList, StyleSheet, View } from "react-native";

// import GoalItem from "./components/GoalItem";
// import GoalInput from "./components/GoalInput";
// export default function App() {
//   // register your state with its initial state
//   const [courseGoals, setCourseGoals] = useState([]);

//   function addGoalHandler(enteredGoalText) {
//     // this is a coorect way but not the best way of updating state
//     // if your new state depends on the previous state
//     // setCourseGoals([...courseGoals, enteredGoalText]);

//     // and the best way is to pass a function to this state updating function
//     // a function which will be called automatically  by react (MEANING LAST VALUE currentCourseGoals) then derive the new state

//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       { text: enteredGoalText, id: Math.random().toString() },
//       // {text: enteredGoalText, key: Math.random().toString()},

//       // as any list need key we can convert goal to object ==> enteredGoalText
//       // that is the first solution but if you get data from API with no key you can use flatlist prop keyExtractor
//     ]);
//   }

//   function deleteGoalHandler(id) {
//     setCourseGoals((currentCourseGoals) => {
//       return currentCourseGoals.filter((goal) => goal.id !== id);
//     });
//   }

//   return (
//     <View style={styles.appContainer}>
//       {/* here is User input area handling
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your Course Goal!"
//           onChangeText={goalInputHandler}
//         />
//         <Button title="Add Goal" onPress={addGoalHandler}></Button>
//       </View> */}
//       <GoalInput onAddGoal={addGoalHandler} />
//       {/* here is the list that will hold all goals */}
//       <View style={styles.goalsContainer}>
//         {/*<ScrollView>
//          ScrollView is the perfect choice if you want to add scroling around a content and not know
//         the size of screen the user will use but it is not the perfect choice for lists
//         and that because it renders all its content wheneve the overall ui is rendered ==> performance issue

//         The replacement is FlatList which only render the item that actually visible and all the item that are off
//         screenwill only be loaded and rendered lazily when they needed as the user is scrolling

//         You should nkow that scroll view space is determined by the parent or container that hold it
//           {courseGoals.map((goal) => (
//             // by experience and from the doc the uitext element can't accept
//             // broder radius but view can so we add another view tag
//             <View style={styles.goalItem} key={goal}>
//               <Text style={styles.goalText}>{goal}</Text>
//             </View>
//           ))}
//         </ScrollView>
//         {/* each child in a list should have a key prop which uniqely identify the individual list item */}

//         {/* flat list has two important required prop data which has the dynamic list
//             and render item prop which wants a function as a value a function that will tell faltlist
//             hiw to render the individual item which will recieve item auto  */}
//         <FlatList
//           data={courseGoals}
//           renderItem={(itemData) => {
//             // itemData is an object created automatically by flatlist and has helpfull properties
//             // and not just contain item data but it is object with meta data like index,item
//             return (
//               <GoalItem
//                 text={itemData.item.text}
//                 id={itemData.item.id}
//                 onDeleteItem={deleteGoalHandler}
//                 // deleteGoalHandler is apointer to the function itself
//                 // which passed as a value to prop onDeleteItem
//               />
//             );
//           }}
//           alwaysBounceVertical={false}
//           keyExtractor={(item, index) => {
//             return item.id;
//           }}
//           // props that want a function as a value and recieve automatically two parameters and faltlist
//           // calls that function with each list item that being rendered to return key
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },

//   goalsContainer: {
//     flex: 5,
//   },
// });
