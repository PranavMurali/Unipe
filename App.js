import React ,{useState,useEffect} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
import tw from "tailwind-react-native-classnames"
import LoginScreen from "./screens/LoginScreen";
import {StateProvider} from "./StateProvider";
import OTPScreen from './screens/OTPScreen';
import reducer, { initialState } from './reducer/reducer';
import Form from "./screens/Form";
import auth from '@react-native-firebase/auth';
import { useStateValue } from "./StateProvider";
import FormBank from "./screens/FormBank"
import Home from './screens/Home';

export default function App() {
  return (
  <StateProvider initialState={initialState} reducer={reducer}>
  <NavigationContainer>
  <SafeAreaProvider>
  <KeyboardAvoidingView 
        style={tw`flex-1`} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen 
        name="Otp" 
        component={OTPScreen} 
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen 
        name="Form" 
        component={Form} 
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen 
        name="Form2" 
        component={FormBank} 
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
    </KeyboardAvoidingView>
  </SafeAreaProvider>
</NavigationContainer>
</StateProvider>
  );
}
