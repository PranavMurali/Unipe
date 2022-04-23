import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput} from 'react-native';
import tw from "tailwind-react-native-classnames";
import { useStateValue } from "../StateProvider";
import { useNavigation} from '@react-navigation/core';
import { Header ,Icon,Button} from 'react-native-elements';
import { ProgressBar, Colors } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const FormBank = () => {
  const navigation = useNavigation();
  const [{user}] = useStateValue();
  const [male,setMale] = useState(false);
  const [female,setFemale] = useState(false);
  const [married,setMarried] = useState(false);
  const [unmarried,setUnmarried] =useState(false);
  
  const [selectedValue,setSelectedValue] = useState("");
  useEffect(() => {
    if(male){
      setFemale(false);
    }
  }, [male]);

  useEffect(() => {
    if(female){
      setMale(false);
    }
  }, [female]);


  useEffect(() => {
    if(married){
      setUnmarried(false);
    }
  }, [married]);

  useEffect(() => {
    if(unmarried){
      setMarried(false);
    }
  }, [unmarried]);

  return (
    <>
      <Header
      placement="left"
      containerStyle={tw`bg-purple-800`}
      leftComponent={<Icon
      name='arrow-back'
      type='material-icons'
      onPress={()=>navigation.navigate("Form")}
      size={20}
      color='#4B0082'
    />}
      centerComponent={{ text: 'Setup Profile', style: { color: '#fff' } }}
    />
    <View style={tw`flex-row ml-10 mt-2 mr-12`}>
    <ProgressBar progress={1} color={Colors.blue800} />
    <Text style={tw`ml-2 -mt-1 text-gray-500`} >4/4</Text>
    </View>
    <Text style={tw`ml-10 mt-2 text-gray-500`} >Final step - we need your primary bank details</Text>

    <Text style={tw`ml-10 mt-10 text-gray-500`} >Bank Name</Text>
      <Picker
        selectedValue={selectedValue}
        style={tw`ml-10 mt-5`}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="HDFC Bank" />
        <Picker.Item label="ICICI Bank" />
      </Picker>

    <Text style={tw`ml-10 mt-10 text-gray-500`} >Account Holder Name</Text>
    <TextInput style={tw`ml-10 w-80 h-12 border-b-2`} editable={false} value={user}/>
    <Text style={tw`ml-10 mt-4 text-gray-500`} >Bank Account No*</Text>
    <TextInput style={tw`ml-10 w-80 h-12 border-b-2`}/>
    <Text style={tw`ml-10 mt-4 text-gray-500`} >Bank Account Id*</Text>
    <TextInput style={tw`ml-10 w-80 h-12 border-b-2`}/>
    
    <Button title="Finish" type="solid" buttonStyle={tw`ml-10 mt-5 w-80 h-14 text-xl bg-purple-800`} onPress={()=>{navigation.navigate("Home")}}/>

    </>
  )
}

export default FormBank;