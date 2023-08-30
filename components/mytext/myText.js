import React, {useState,useEffect} from 'react';
import {Text} from 'react-native';
import styles from '../styles';
 
  const  MyText = (props) => {

    const [name,setName ]= useState('Nirvair')
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullName: props.name ? props.name + ' Singh' : 'Unknown Singh',
//     };
//   }
//   componentDidMount(){
//     console.warn('This Is Components Mouted')

//   }
//   componentDidUpdate (){
//     console.warn('Thsi Is Updated')
//   }

//   componentWillUnmount (){
//     console.warn('Componets Being Destroy')
//   }

useEffect(()=>{
    console.warn('Our componets mounted');

    ()=>console.warn('Componets Will unmount')

},[]);
useEffect(() => {
  console.warn('Value of Full Name has been changed');
}, [setName]);



    return (
      <Text style={styles.text1}  onPress={()=>setName('Nirvar Singh')} >
        Hello {props.name} I know that your fullname is{' '}{props.setName}
      
      </Text>
    );
  
}

export default MyText;
