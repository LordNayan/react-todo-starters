import { useDispatch } from "react-redux"
import { Todo, removeTodo } from "../features/todos/todoSlice"

interface Props{
    todo: Todo
}

export const ListItem: React.FC<Props> = ({todo})=>{
    const dispatch = useDispatch()
    return (
    <div className="list-item-container">
        <div className="list-item-text">
            <span>{todo.title}</span>
        </div>
        <button className="btn delete-btn" onClick={()=> dispatch(removeTodo(todo.id))}>-</button>
    </div>)
}