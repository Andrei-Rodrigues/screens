import React from 'react';
import { View, Appbar, Text, FAB, Surface, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#FFFFFF',
    }}
    >
      <View style={{
        backgroundColor: '#4461A2',
        width: '100%',
        height: 55,
      }}>
        <Icon name="arrow-left-l" size={25} color='#FFFFFF' style={{
          marginLeft: 20,
          marginTop: 15,
        }}/>
        <Icon name="search" size={20} color='#FFFFFF' style={{
          marginLeft: 60,
          top: -25,          
        }}/>
      </View>
      <View style={{
        backgroundColor: '#D5E1FF',
        width: '100%',
        height: 200,
      }}>
      </View>
      <View style={{
        backgroundColor: '#BCD2EE',
        width: 150,
        height: 150,
        left: 135,
        bottom: 40,
        borderRadius: 2,
        top: -50,
      }}>
      </View>
      <Text style={{
        textAlign: 'center',
        fontSize: 25,
        top: -40,
      }}> Your name </Text>
      <View style={{
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
        top: -25,
      }}>
        <Icon name="messenger" size={30} color='#000000' style={{
          marginTop: 25,
          marginLeft: 100,         
        }}/>
         <Icon name="commenting" size={30} color='#000000' style={{
           bottom: 28,
           left: 290,

                  }}/>
      </View>
      <Text style={{
        top: 5,
        marginLeft: 10,
        fontSize: 15,
      }}>
      Your base info 1
      </Text>
      <Text style={{
        top: 20,
        marginLeft: 10,
        fontSize: 15,
      }}>
      Your base info 2
      </Text>

       <View style={{
        backgroundColor: '#FFFFFF',
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 30,
      }}>
      <Text style={{
        fontSize: 15,
      }}>
      ABOUT
      </Text>
      <Text style={{
        fontSize: 15,
        left: 10,
      }}>
      PHOTOS
      </Text>
      <Text style={{
        fontSize: 15,
        left: 20,
      }}>
      FRIENDS
      </Text>
       </View>
    </ScrollView>
  );
}

export default App;