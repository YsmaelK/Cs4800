/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar } from "expo-status-bar";
import {Box, NativeBaseProvider, Text} from "react-native"
import HomeScreen from "./src/Screens/LoginScreen.js";
import LoginScreen from "./src/Screens/LoginScreen.js";

export default function App(){
  return( <NativeBaseProvider> <LoginScreen/> </NativeBaseProvider>)
}

 