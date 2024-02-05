import { useState } from "react"
import { addTodo } from "../redux/todo/todoActions"
import { useDispatch } from "react-redux"


const TodoInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const handleClick = () => {
    // console.log(value)
    dispatch(addTodo({id:Date.now(),value, completed:false}))
    setValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() !== ''){
      handleClick()
    }
  }

  return (
    <div className="flex flex-col md:lg:flex-row items-center justify-center gap-4 py-4 mt-4">
            <input type="text"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   onKeyDown={handleKeyPress}
                   placeholder="Enter your todo"
                   className="w-full md:lg:w-5/6 px-4 py-2 border border-gray-300 rounded-md" />
            <button
             disabled={value? false : true}
             onClick={handleClick}
             className=" w-full md:lg:w-1/6 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-800 rounded-md hover:scale-110 transition-all 0.5s ease-in-out">
              Add
            </button>
    </div>
  )
}

export default TodoInput