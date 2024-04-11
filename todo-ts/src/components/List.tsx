import { useSelector } from "react-redux"
import { Todo, TodoStore } from "../features/todos/todoSlice"
import { ListItem } from "./ListItem"

export const List: React.FC = ()=>{
    const todos:Todo[] = useSelector((state: TodoStore)=> state.todos.todos)
    return <ul>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
            return <ListItem key={todo.id} todo={todo}></ListItem>
        })}
    </ul>
}