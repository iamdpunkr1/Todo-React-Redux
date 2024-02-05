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
  const [value, setValue] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    // handleEditTodo (todo.id, value)
    if(value.trim() === '') return

    if (value === todo.value) {
      setModal(!modal)
      return
    }

    dispatch (editTodo ({id: todo.id, value, completed: todo.completed}))
    setModal(!modal)
  }

  const handleCompleted = () => {
    dispatch(toggleTodo (todo.id))
  }

  return (
    <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 items-center border-2 border-solid border-indigo-500 text-white py-3 rounded-md">

                <input onChange={handleCompleted} type="checkbox"
                       className="form-checkbox h-5 w-5  cursor-pointer"
                       checked={todo.completed}
                       style={{backgroundColor:"red !important", color:"red !important"}} />

                {/* {isEdit ?
                <input type="text"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       className="text-slate-700 w-4/6 px-4 py-1 border border-gray-300 rounded-md" />
                : */}
                <span className={`text-slate-800 font-medium w-full  px-2 text-left ml-4 ${todo.completed? "text-slate-600 line-through":""}`}>{todo.value}</span>
                {/* } */}
                

                <div className="flex gap-2">
                
                    {/* //Edit Button */}
                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Edit Todo" onClick={() => { setValue(todo.value); setModal(!modal)}}
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
                
                <Tooltip  id="my-tooltip"  />
                {modal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-indigo-50 p-4  w-96 h-80 rounded-md">
                        <h1 className="text-2xl font-bold text-slate-800 pt-4 pb-6">Update Todo</h1>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 text-slate-700 rounded-md"
                        />

                        {/* Completed Dropdown */}
                        <div className="mt-4 text-left">
                          <div className="text-slate-800 font-medium">Status:</div>
                          <select
                            id="completed"
                            onChange={handleCompleted}
                            value={todo.completed ? 'completed' : 'incomplete'}
                            className="border border-gray-300 rounded-md p-2 text-slate-700 px-2"
                          >
                            <option value="incomplete">Incomplete</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>

                        {/* Cancel and Save Button */}
                        <div className="flex justify-center gap-2 mt-8">
                          <button
                            onClick={() => {
                              setModal(!modal);
                            }}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 hover:scale-110 transition-all 0.5s ease-in text-white rounded-md"
                          >
                            Cancel
                          </button>

                          {/* Save Button */}
                          <button
                            onClick={handleChange}
                            className="px-2 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md hover:scale-110 transition-all 0.5s ease-in-out"
                          >
                            Update Todo
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

    </div>
  )
}

export default Todo