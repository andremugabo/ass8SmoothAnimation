import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { SlideInDown, SlideInUp } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AboutScreen = ({ navigation }) => {
  return (
    <Animated.View style={styles.container} entering={SlideInUp}>
      <Text style={styles.text}>About Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const MainScreen = ({ navigation }) => {
  return (
    <Animated.View style={styles.container} entering={SlideInUp}>
      <Text style={styles.text}>Main Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text>About</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
