import {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

import {addTodo} from './store/store';



import {useDispatch} from 'react-redux';



const AddTodo = ()=>{
    const [todoText,setTodoText]= useState();
    const dispatch = useDispatch();



    const handleAddTodo = ()=>{
        if (todoText){
            dispatch(addTodo(todoText));
            setTodoText('')
        }
    }


    return (
        <View style={{flexDirection:'row',alignItems:'center'}}>
      <TextInput
        style={{flex: 1, borderWidth: 1, padding: 8}}
        placeholder="Enter Add New Todo"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
    )
}

export default AddTodo;
