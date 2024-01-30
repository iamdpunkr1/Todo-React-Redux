import TodoInput from "../partials/TodoInput"
import Todo from "../partials/Todo"
import { useState } from "react"

export type TodosTypes = {
  id: number,
  value: string
}
const Todos = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([])

  const handleAddTodo = (val: TodosTypes) => {
    setTodos(prev => [...prev, {id: val.id, value: val.value}])
  }

  const handleDeleteTodo = (id:number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const handleEditTodo = (id:number, val:string) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          id: todo.id,
          value: val
        }
      }
      return todo
    })
    setTodos(newTodos);
  }
  return (
    <div className="w-full text-center bg-indigo-100 p-8 h-1/2">
        <div className="w-5/6 mx-auto">
          
          <h1 className='text-4xl font-bold text-slate-800'>Todo List</h1>
          <TodoInput handleAddTodo={handleAddTodo} />
          <div className="flex mx-auto flex-col gap-2">
            
            {todos.map((todo, index) => (
              <Todo handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
                    todo={todo}
                    key={index} />
            ))}
              
          </div>
        
        </div>     
    </div>
  )
}

export default Todos