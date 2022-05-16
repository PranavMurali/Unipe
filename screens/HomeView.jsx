import React ,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,SafeAreaView,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from "tailwind-react-native-classnames";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const HomeView = () => {
  return (
    <>
    <View style={tw`flex-row ml-5`}>
        <Ionicons style={tw`mt-4`} name="search-sharp" size={30}/>
        <TextInput style={tw`border-b-2 w-80`} placeholder="Search"/>
    </View>
    <ScrollView>
    <View style={tw`flex-row ml-5`}>
      <Card style={tw` w-44 mt-5`}>
          <Card.Content>
            <Title>Payslip Nov</Title>
            <Paragraph>Updated on Nov 1 2022</Paragraph>
          </Card.Content>
          <Card.Actions>
          <Ionicons style={tw`mt-4 text-purple-900`} name="download-outline" size={30}/> 
          <Text style={tw`mt-6 text-purple-900`}>Download</Text>
          </Card.Actions>
      </Card>

      <Card style={tw` ml-2 w-44 mt-5`}>
          <Card.Content>
            <Title>Payslip Nov</Title>
            <Paragraph>Updated on Nov 1 2022</Paragraph>
          </Card.Content>
          <Card.Actions>
          <Ionicons style={tw`mt-4 text-purple-900`} name="download-outline" size={30}/> 
          <Text style={tw`mt-6 text-purple-900`}>Download</Text>
          </Card.Actions>
      </Card>
    </View>

    <View style={tw`flex-row ml-5`}>
      <Card style={tw` w-44 mt-5`}>
          <Card.Content>
            <Title>Payslip Nov</Title>
            <Paragraph>Updated on Nov 1 2022</Paragraph>
          </Card.Content>
          <Card.Actions>
          <Ionicons style={tw`mt-4 text-purple-900`} name="download-outline" size={30}/> 
          <Text style={tw`mt-6 text-purple-900`}>Download</Text>
          </Card.Actions>
      </Card>

      <Card style={tw` ml-2 w-44 mt-5`}>
          <Card.Content>
            <Title>Payslip Nov</Title>
            <Paragraph>Updated on Nov 1 2022</Paragraph>
          </Card.Content>
          <Card.Actions>
          <Ionicons style={tw`mt-4 text-purple-900`} name="download-outline" size={30}/> 
          <Text style={tw`mt-6 text-purple-900`}>Download</Text>
          </Card.Actions>
      </Card>
    </View>

    <View style={tw`flex-row ml-5`}>
      <Card style={tw` w-44 mt-5`}>
          <Card.Content>
            <Title>Payslip Nov</Title>
            <Paragraph>Updated on Nov 1 2022</Paragraph>
          </Card.Content>
          <Card.Actions>
          <Ionicons style={tw`mt-4 text-purple-900`} name="download-outline" size={30}/> 
          <Text style={tw`mt-6 text-purple-900`}>Download</Text>
          </Card.Actions>
      </Card>

      <Card style={tw` ml-2 w-44 mt-5`}>
          <Card.Content>
            <Title>Payslip Nov</Title>
            <Paragraph>Updated on Nov 1 2022</Paragraph>
          </Card.Content>
          <Card.Actions>
          <Ionicons style={tw`mt-4 text-purple-900`} name="download-outline" size={30}/> 
          <Text style={tw`mt-6 text-purple-900`}>Download</Text>
          </Card.Actions>
      </Card>
    </View>
    </ScrollView>  
    
  </>
  )
}

export default HomeView