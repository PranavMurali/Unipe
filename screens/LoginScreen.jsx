import React ,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput} from 'react-native';
import tw from "tailwind-react-native-classnames";
import { Icon,Button} from 'react-native-elements';
import { useNavigation} from '@react-navigation/core';
import { useStateValue } from "../StateProvider";
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [next, setNext] = useState(false);
  const [{conf},dispatch] = useStateValue();
  const [confirm, setConfirm] = useState(null);

  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      navigation.navigate('Otp');
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    dispatch({
      type: "SET_CONF",
      payload: confirm,
    })}, [confirm]);

  useEffect(() => {
    dispatch({
      type: "SET_PHONE",
      payload: phoneNumber,
    })}, [phoneNumber]);

  useEffect(() => {
    if(phoneNumber.length === 14){
      setNext(true);
    }
    else{
      setNext(false);
    }
  }, [phoneNumber]);

  return (
    <SafeAreaView>
        <View style={tw`bg-white h-full`}>
            <Text style={tw`text-4xl text-black text-center mt-40 lowercase text-purple-900 font-bold`}>UNIPE</Text>
            <Text style={tw`ml-20 mt-10 text-purple-900`}>Enter Mobile Number for Verification</Text>
            <Text style={tw`ml-10 mt-20 text-gray-500`} >Mobile Number</Text>
            <TextInput style={tw`ml-10 w-80 h-12 border-b-2`} value={phoneNumber} onChangeText={setPhoneNumber} autoCompleteType="tel" keyboardType="phone-pad" textContentType="telephoneNumber"/>
            {next ? <Button id= "recaptcha" title="Continue" type="solid" buttonStyle={tw`ml-10 mt-5 w-80 h-14 text-xl`} onPress={() => {signIn(phoneNumber) }}/> : <Button id= "recaptcha" title="Continue" type="solid" buttonStyle={tw`ml-10 mt-5 w-80 h-14 text-xl`} disabled/>}
            {/* <View id="recaptcha"></View>  */}
        </View>

    </SafeAreaView>
  )
}

export default LoginScreen;