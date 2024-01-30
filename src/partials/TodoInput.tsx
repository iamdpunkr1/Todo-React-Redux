import { useState } from "react"
import { addTodo } from "../redux/todo/todoActions"
import { useDispatch } from "react-redux"


const TodoInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const handleClick = () => {
    // console.log(value)
    dispatch(addTodo({id:Date.now(),value}))
    setValue('')
  }

  return (
    <div className="flex justify-center gap-4 py-4">
            <input type="text"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   placeholder="Enter your todo"
                   className="w-5/6 px-4 py-2 border border-gray-300 rounded-md" />
            <button disabled={value? false : true} onClick={handleClick} className="w-1/6 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-800 rounded-md">Add</button>
    </div>
  )
}

export default TodoInput