import React,{useEffect, useState} from 'react'
import { Image, Text, View,SafeAreaView,TextInput} from 'react-native';
import tw from "tailwind-react-native-classnames";
import { useStateValue } from "../StateProvider";
import { useNavigation} from '@react-navigation/core';
import { Icon,Button} from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from './HomeView';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
    const navigation = useNavigation();
    const [{user}] = useStateValue();

    const Tab = createBottomTabNavigator();
  return (
    <>
    <View style={tw`bg-white`}>
        <View style={tw`flex-row justify-between items-center p-4`}>
        <Icon
                name="menu"
                type="material-community"
                color="black"
                size={30}
            />
            <Image style={tw`w-28 h-16`} source={require("../Unipe-Thumbnail.png")}/>
            <Icon
                name="ellipsis-vertical-outline"
                type="ionicon"
                color="black"
                size={30}
            />
        </View>
    </View>
    <Tab.Navigator
     screenOptions={({ route }) => ({
      headerShown: false ,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Documents') {
          iconName = focused ? 'document-text' : 'document-text-outline';
        }
        else if (route.name === 'Benefits') {
          iconName = focused ? 'clipboard' : 'clipboard-outline';
        }
        else if (route.name === 'Banking') {
          iconName = focused ? 'cash' : 'cash-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Documents" component={HomeView} />
        <Tab.Screen name="Benefits" component={HomeView} />
        <Tab.Screen name="Banking" component={HomeView} />
    </Tab.Navigator>
    </>
  )
}

export default Home;