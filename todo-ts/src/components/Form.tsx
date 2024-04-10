import { ChangeEventHandler, FormEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export const Form: React.FC = ()=>{
    const [item, setItem] = useState<string>("Input your Item");
    const dispatch = useDispatch();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function submitForm(e:FormEvent<HTMLFormElement>){
        console.log(item)
        e.preventDefault()
        if(item.length){
            dispatch(addTodo(item))
        }
        setItem("")
    }
    return <form className="input-form" onSubmit={submitForm}>
        <input onChange={(e:ChangeEventHandler<HTMLInputElement>)=> setItem((e.target as HTMLInputElement).value)} className="text-input"></input>
        <button className="add-btn" type="submit">Add todo</button>
    </form>

}