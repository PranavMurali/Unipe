import React,{useEffect, useState,useRef} from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import tw from "tailwind-react-native-classnames";
import { useStateValue } from "../StateProvider";
import { useNavigation} from '@react-navigation/core';
import { Header ,Icon,Button,BottomSheet,ListItem} from 'react-native-elements';
import { ProgressBar, Colors } from 'react-native-paper';

const Form = () => {
//   const [isVisible, setIsVisible] = useState(false);
// const list = [
//   { title: 'List Item 1' },
//   { title: 'List Item 2' },
//   {
//     title: 'Cancel',
//     containerStyle: { backgroundColor: 'red' },
//     titleStyle: { color: 'white' },
//     onPress: () => setIsVisible(false),
//   },
// ];
  const navigation = useNavigation();
  const [{user},dispatch] = useStateValue();
  const [male,setMale] = useState(false);
  const [female,setFemale] = useState(false);
  const [married,setMarried] = useState(false);
  const [unmarried,setUnmarried] =useState(false);
  const [users,setUsers]=useState("");
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

  useEffect(() => {
    dispatch({
      type: "SET_USER",
      payload: users,
    })}, [users]);
    const refRBSheet = useRef();
  return (
    <>
    <Header
      placement="left"
      containerStyle={tw`bg-purple-800 text-white`}
      leftComponent={<Icon
      name='arrow-back'
      type='material-icons'
      size={20}
      onPress={()=>navigation.navigate("Login")}
      color='#FFf'
    />}
      centerComponent={{ text: 'Setup Profile', style: { color: '#fff' } }}
    />
    <View style={tw`flex-row ml-10 mt-2 mr-12`}>
    <ProgressBar progress={0.5} color={Colors.blue800} />
    <Text style={tw`ml-2 -mt-1 text-gray-500`} >1/4</Text>
    </View>
    
    <Text style={tw`ml-10 mt-2 text-gray-500`} >Welcome Let's Start your onboarding process</Text>
    <Text style={tw`ml-10 mt-5 text-gray-500`} >Full Name</Text>
    <TextInput style={tw`ml-10 w-80 h-12 border-b-2`} value={users} onChangeText={setUsers}/>
    <Text style={tw`ml-10 mt-10 text-gray-500`} >Gender</Text>
    <View style={tw`flex-row`}>
    {male ? <Button buttonStyle={tw`bg-purple-900 w-20 h-10 ml-10 mt-4 rounded-full`} title="Male" type="solid" onPress={() => {setMale(false)}}>Male</Button> : <Button buttonStyle={tw`w-20 text-black h-10 ml-10 mt-4 bg-gray-400 rounded-full`} type="solid" title="Male" onPress={() => {setMale(true)}}>Male</Button>}
    {female ? <Button buttonStyle={tw`bg-purple-900 w-20 h-10 ml-4 mt-4 rounded-full`} title="Female" type="solid" onPress={() => {setFemale(false)}}>Female</Button> : <Button buttonStyle={tw`w-20 text-black h-10 ml-4 mt-4  bg-gray-400 rounded-full`} type="solid" title="Female" onPress={() => {setFemale(true)}}>Female</Button>}
    </View>
    <Text style={tw`ml-10 mt-5 text-gray-500`} >Educational Qualification</Text>
      <Picker
        selectedValue={selectedValue}
        style={tw`ml-10 mt-5`}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="10th Pass" />
        <Picker.Item label="12th Pass" />
        <Picker.Item label="Graduate" />
        <Picker.Item label="Diploma" />
        <Picker.Item label="Post-Graduate" />
        <Picker.Item label="None of the Above" />
      </Picker>
    <Text style={tw`ml-10 mt-5 text-gray-500`} >Marital Status</Text>
    {/* <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
    <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <component/>
      </RBSheet> */}
      {/* <BottomSheet
  isVisible={isVisible}
  containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
>
  {list.map((l, i) => (
    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
      <ListItem.Content>
        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  ))}
</BottomSheet> */}
    <View style={tw`flex-row`}>
    {married ? <Button buttonStyle={tw`bg-purple-900 w-20 h-10 ml-10 mt-4 rounded-full`} title="Married" type="solid" onPress={() => {setMarried(false)}}>Married</Button> : <Button buttonStyle={tw`w-20 h-10 ml-10 mt-4 rounded-full bg-gray-400`} type="solid" title="Married" onPress={() => {setMarried(true)}}>Married</Button>}
    {unmarried ? <Button buttonStyle={tw`bg-purple-900 w-24 h-10 ml-4 mt-4 rounded-full`} title="Unmarried" type="solid" onPress={() => {setUnmarried(false)}}>Unmarried</Button> : <Button buttonStyle={tw`w-24 h-10 ml-4 mt-4 rounded-full bg-gray-400`} type="solid" title="Unmarried" onPress={() => {setUnmarried(true)}}>Unmarried</Button>}
    </View>
    <Button title="Continue" type="solid" buttonStyle={tw`ml-10 mt-5 w-80 h-14 text-xl bg-purple-800`} onPress={()=>{navigation.navigate("Form2")}}/>
    </>
  )
}

export default Form;