/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, {useState, useEffect} from 'react';
// import {Button, TextInput,View,SafeAreaView} from 'react-native';
// import auth from '@react-native-firebase/auth';

// function PhoneSignIn() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   // verification code (OTP - One-Time-Passcode)
//   const [code, setCode] = useState('');

//   // Handle login
//   function onAuthStateChanged(user) {
//     if (user) {
//       // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
//       // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
//       // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
//       // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
//     }
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   // if (!confirm) {
//   //   return (
//   //     // <View style={{padding:80,margin:10}}>

//   //     // <Button
//   //     //   title="Phone Number Sign In"
//   //     //   onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
//   //     // />
//   //      </View>
//   //   );
//   // }

//   return (
//     <>
//       <SafeAreaView style={{padding: 10, margin: 10}}>
//       <View>
//  <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </View>
//       </SafeAreaView>
//     </>
//   );
// }

// export default PhoneSignIn;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import TodoList from './ToDoList';
// import AddTodo from './AddTodo';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <TodoList />
//       <AddTodo />
//     </Provider>
//   );
// };

// export default App;

// import React from 'react';
// import { View, Text, FlatList, Image, Button ,TouchableOpacity} from 'react-native';

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity,TextInput } from 'react-native';

// function App() {
//   const [data, setData] = useState([
//     {
//       id: 'c1',
//       carName: 'Swift Maruti Suzuki',
//       imageUrl: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210713115737_Buying_Used_Swift_1.jpg&w=700&q=90&c=1',
//       dealerPrice: 180000,
//       newDealerPrice: '',
//       showBidButton: true,
//       endTime: new Date().getTime() + 6 * 60 * 60 * 1000, // Set the end time 6 hours from now
//     },
//     {
//       id: 'c2',
//       carName: 'Hundai I 10 magna 4 D',
//       imageUrl: 'https://imgd-ct.aeplcdn.com/664x415/cw/cars/discontinued/hyundai/i10-2007-2010.jpg?q=75',
//       dealerPrice: 120000,
//       newDealerPrice: '',
//       showBidButton: true,
//       endTime: new Date().getTime() + 6 * 60 * 60 * 1000, // Set the end time 6 hours from now
//     },
//   ]);

//   const updateDealerPrice = (itemId) => {
//     const newData = data.map((item) => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           dealerPrice: parseFloat(item.newDealerPrice) || item.dealerPrice,
//         };
//       }
//       return item;
//     });

//     setData(newData);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTime = new Date().getTime();

//       const newData = data.map((item) => {
//         const timeDifference = Math.max(0, Math.floor((item.endTime - currentTime) / 1000)); // Ensure time difference is non-negative
//         const hours = Math.floor(timeDifference / 3600);
//         const minutes = Math.floor((timeDifference % 3600) / 60);
//         const seconds = timeDifference % 60;

//         return {
//           ...item,
//           timeRemaining: `${hours}:${minutes}:${seconds}`,
//         };
//       });

//       setData(newData);
//     }, 1000); // Update every second

//     return () => {
//       clearInterval(interval);
//     };
//   }, [data]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={{ margin: 10 }}>
//         <Image resizeMode='contain' source={{ uri: item.imageUrl }} style={{ width: 200, height: 150 }} />
//         <Text>{item.carName}</Text>
//         <TextInput style={{fontWeight:'bold',color:'black'}}
//           placeholder="Add Own Bid Here"
//           value={item.newDealerPrice}
//           onChangeText={(text) => {
//             const newData = data.map((dataItem) => {
//               if (dataItem.id === item.id) {
//                 return { ...dataItem, newDealerPrice: text };
//               }
//               return dataItem;
//             });
//             setData(newData);
//           }}
//           keyboardType="numeric"
//         />
//         {item.showBidButton && (
//           <View>
//             <TouchableOpacity onPress={() => updateDealerPrice(item.id)} style={{ margin: 10, padding: 10, backgroundColor: 'green' }}>
//               <Text style={{ color: 'white' }}>Highest Bid</Text>
//               <Text>{item.dealerPrice}</Text>
//             </TouchableOpacity>
//             <Text style={{alignSelf:'center'}}>Almost Over: {item.timeRemaining}</Text>
//             <View>

//               </View>
//           </View>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View>
//       <FlatList horizontal keyExtractor={(item) => item.id} data={data} renderItem={renderItem} />
//     </View>
//   );
// }

// import {useState, useEffect, useRef, Component, ReactNode} from 'react';

// import {Text, SafeAreaView, View, TextInput, Image,Button,Switch} from 'react-native';
// import {} from '@react/n'

// import useToggle from './CustamHook/UseToggle';
// import styles from './components/styles';
// import MyText from './components/mytext/myText';

// const App = () => {
//   const [email, setEmail] = useState();
//   const [paswword, setPassword] = useState();
//   const [shouldkeepLogging,setShouldKeepLogging] = useState(true)

//   return (
//     <SafeAreaView>
//       <TextInput 
//       value={email}
//         style={{borderWidth: 1, borderRadius: 4, padding: 10}}
//         placeholder="Email"
//         keyboardType="email-address"
//         onChangeText={(value)=>setEmail(value)}
//       />
   
//           <TextInput
//           value={paswword}
//         style={{borderWidth: 1, borderRadius: 4, padding: 10}}
//         placeholder="Email"
//         keyboardType="email-address"
//         onChangeText={(value)=>setPassword(value)}
//       />
//          <Switch value={shouldkeepLogging} onValueChange={value=>setShouldKeepLogging(value)}/>
//       <Button title='Submit' color="red" onPress={()=>console.warn(email,paswword)}  />
      

//     </SafeAreaView>
//   );
// };

// export default App;

import {View, Text,SafeAreaView} from 'react-native';
import Title from './components/Title/Title';
import React from 'react';
import  FontAwesomeIcon from '@fortawesome/react-native-fontawesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavouriteScreen from './components/FavouriteScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MyDrawer = ()=>{
  return (
    <View>
      <Text>Drawer Screen</Text>
    </View>
  )
}


const DrawerSreen = ()=>{
  return (
    <Drawer.Navigator >
      <Drawer.Screen name='Register' component={RegisterScreen}/>

      <Drawer.Screen name="Mydawers" component={MyDrawer}/>
    </Drawer.Navigator>
  )
}



const Bottom = ()=>{
  return (
    
 
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Mydawers' component={DrawerSreen} options={{tabBarIcon:()=>(<Ionicons name="home" size={24} color="black"/>)}} /> 
        <Tab.Screen name='Favourite' component={FavouriteScreen} options={{tabBarIcon:()=>(<Ionicons name="heart" size={24} color="black"/>)}} />
      </Tab.Navigator>
 
    



  )
}

const App = ()=>{
  return (
 <NavigationContainer >
  <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Bottom" component={Bottom} />
      </Stack.Navigator>
 </NavigationContainer>

 
  )
}

export default App;
