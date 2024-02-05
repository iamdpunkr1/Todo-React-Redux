import { useState } from "react"
import { TodosTypes } from "../components/Todos"
import { editTodo, deleteTodo, toggleTodo } from "../redux/todo/todoActions"
import { useDispatch } from "react-redux"
import { Tooltip } from "react-tooltip"

type TodoProps = {
  todo: TodosTypes,
  // handleDeleteTodo: (id: number) => void,
  // handleEditTodo: (id: number, val:string) => void
}

const Todo = ({todo}: TodoProps) => {
  const [isEdit, setIsEdit] = useState<Boolean>(false)
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch();

  const handleChange = () => {
    // handleEditTodo (todo.id, value)
    dispatch (editTodo ({id: todo.id, value, completed: todo.completed}))
    setIsEdit(!isEdit)
  }

  const handleCompleted = () => {
    dispatch(toggleTodo (todo.id))
  }

  return (
    <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 items-center bg-indigo-500 text-white py-3 rounded-md">

                <input onChange={handleCompleted} type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 cursor-pointer" />

                {isEdit ?
                <input type="text"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       className="text-slate-700 w-4/6 px-4 py-1 border border-gray-300 rounded-md" />
                :
                <span className={`text-white  ${todo.completed? "text-slate-200 line-through":""}`}>{todo.value}</span>
                }
                

                <div className="flex gap-2">
                {isEdit ?
                    // Save Button
                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Save Todo" onClick={handleChange}
                    className="px-2 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md hover:scale-110 transition-all 0.5s ease-in-out">
                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                     <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                     <g id="SVGRepo_iconCarrier">
                       {" "}
                       <path
                         fillRule="evenodd"
                         clipRule="evenodd"
                         d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                         fill="#ffffff"
                       />{" "}
                     </g>
                      </svg> 
                   </button>
                   
                    :
                    //Edit Button
                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Edit Todo" onClick={() => {setIsEdit(!isEdit); setValue(todo.value)}}
                    className="px-2 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md hover:scale-110 transition-all 0.5s ease-in-out">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                       <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                       <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                       <g id="SVGRepo_iconCarrier">
                         {" "}
                         <title />{" "}
                         <g id="Complete">
                           {" "}
                           <g id="edit">
                             {" "}
                             <g>
                               {" "}
                               <path
                                 d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                                 fill="none"
                                 stroke="#ffffff"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                               />{" "}
                               <polygon
                                 fill="none"
                                 points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                                 stroke="#ffffff"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                               />{" "}
                             </g>{" "}
                           </g>{" "}
                         </g>{" "}
                       </g>
                     </svg> 
                   </button>
                    }

                    {/* Delete Button */}
                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Delete Todo" onClick={() => dispatch(deleteTodo(todo.id))}
                     className="px-2 py-1 bg-red-500 hover:bg-red-600 rounded-md hover:scale-110 transition-all 0.5s ease-in-out">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M10 12V17"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M14 12V17"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M4 7H20"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </g>
                      </svg>
                    </button>
                </div>
                
                <Tooltip  id="my-tooltip" variant="light" />
    </div>
  )
}

export default Todo