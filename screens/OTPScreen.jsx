import React ,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput, KeyboardAvoidingView} from 'react-native';
import tw from "tailwind-react-native-classnames";
import { Icon,Button} from 'react-native-elements';
import { useNavigation} from '@react-navigation/core';
import { useStateValue } from "../StateProvider";


const OTPScreen = () => {
  const navigation = useNavigation();
  const [{phn,auth,conf},dispatch] = useStateValue();
  const [otp, setOtp] = useState('');
  const [next, setNext] = useState(false);

  async function confirmVerificationCode(code) {
    console.log(conf,phn);
    try {
      await conf.confirm(code);
      navigation.navigate('Form');
    } catch (error) {
      alert('Invalid code');
    }
  }
    
  useEffect(() => {
    if(otp.length === 6){
      setNext(true);
    }
    else{
      setNext(false);
    }
  }, [otp]);


  useEffect(() => {
    if(auth){
      navigation.navigate('Form');
    }
  }, [auth]);


  return (
    <KeyboardAvoidingView style={tw`flex-1`} behavior="padding" keyboardVerticalOffset={40}>
    <SafeAreaView>
      <View style={tw`bg-white h-full`}>
          <Text style={tw`text-4xl text-black text-center mt-40 lowercase text-purple-900 font-bold`}>UNIPE</Text>
          <Text style={tw`ml-10 mt-10 text-purple-900`}>Please wait, we will auto verify the OTP sent to {phn}
          <Icon
            name='edit'
            type='material-icons'
            size={14}
            color='#4B0082'
            onPress={() =>navigation.navigate('Login')}
          /></Text>
          <TextInput style={tw`ml-28 mt-20 w-40 h-12 border-b-2`} letterSpacing={14} maxLength={6} numeric value={otp} onChangeText={setOtp} keyboardType="numeric"/>
          <Text style={tw`text-xl ml-36 mt-20 text-black text-purple-500`}>Resend OTP</Text>
          {next ? <Button id= "recaptcha" title="Verify" type="solid" buttonStyle={tw`ml-10 mt-5 w-80 h-14 text-xl rounded`} onPress={() => {confirmVerificationCode(otp)}}/> : <Button id= "recaptcha" title="Verify" type="solid" buttonStyle={tw`ml-10 mt-5 w-80 h-14 text-xl rounded`} disabled/>}
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default OTPScreen