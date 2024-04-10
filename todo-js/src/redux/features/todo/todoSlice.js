import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{ 
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload,
                done: false,
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)    
        },
        toggleTodo: (state,action)=>{
            state.todos = state.todos.map((todo)=> {
                if(todo.id === action.payload){
                    return {...todo, done: !todo.done}
                }
                return todo;
            })    
        },
    }
})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer 

