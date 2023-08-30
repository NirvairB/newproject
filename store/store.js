// import {createSlice, configureStore} from '@reduxjs/toolkit';




// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {value: 0},
//   reducers: {
//     increment: state => {
//       state.value += 1;
// },
//     decrement: state => {
//       state.value -= 1;
// }}});

// export const {increment, decrement} = counterSlice.actions;


// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
// }});


// export default store;



import {createSlice,configureStore} from '@reduxjs/toolkit';



const todoSlice =  createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({id: Date.now(), text: action.payload, completed: false});
    },

    toggleTodo:(state,action)=>{
        const todo = state.find((todo)=>todo.id === action.payload.id);
        if (todo){
            todo.completed = !todo.completed;
        }
    },
    removeTodo (state,action){
      return state.filter(todo => todo.id !== action.payload.id);
    }
        }
});


export const {addTodo,toggleTodo,removeTodo}= todoSlice.actions;


const store = configureStore({reducer:{
    todos:todoSlice.reducer
}});

export default store;


