// import {TouchableOpacity, FlatList, Text, View} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {toggleTodo, removeTodo} from './store/store';

// const TodoItem = ({todo}) => {
//   const dispatch = useDispatch();

//   return (
//     <TouchableOpacity
//       onPress={() => dispatch(toggleTodo.completed(todo.id))}
//       onLongPress={() => dispatch(removeTodo(todo.id))}>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <Text style={{marginRight: 10}}>{todo.text}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const TodoList = () => {
//   const todos = useSelector(state => state.todos);

//   return (
//     <FlatList
//       data={todos}
//       keyExtractor={todo => todo.id.toString()}
//       renderItem={({item}) => <TodoItem todo={item} />}
//     />
//   );
// };

// export default TodoList;
