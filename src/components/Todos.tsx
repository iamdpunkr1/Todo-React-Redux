import TodoInput from "../partials/TodoInput"
import Todo from "../partials/Todo"
import { connect } from "react-redux"
import { useMemo, useState } from "react"


export type TodosTypes = {
  id: number,
  value: string,
  completed: boolean,
}

type TodosProps = {
  todos: TodosTypes[],
}

const Todos = ({todos}:TodosProps) => {

  // const handleAddTodo = (val: TodosTypes) => {
  //   // setTodos(prev => [...prev, {id: val.id, value: val.value}])
  //   dispatch(addTodo(val))
  // }

  // const handleDeleteTodo = (id:number) => {
    // setTodos(prev => prev.filter(todo => todo.id !== id))
    // dispatch(deleteTodo (id))
  // }

  // const handleEditTodo = (id:number, value:string) => {
  //   dispatch(editTodo({id, value}))
  // }
  const [filter, setFilter] = useState<string>('All')

  const filteredTodos = useMemo(() => {
    
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.completed)
      case 'Uncompleted':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  },[filter, todos])

  return (
    <div className="w-full text-center bg-indigo-100 py-16 px-2 md:lg:px-8 min-h-1/2 rounded-md">
        <div className="w-5/6 mx-auto">
          
          <h1 className='text-4xl font-bold text-slate-800'>Todo List</h1>
          <TodoInput />
          <div className="flex mx-auto flex-col gap-2">
            
            {/* Filter Todo */}
            {todos.length > 0 && 
            <>
            <select value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-3/5 md:w-2/5 lg:1/4 px-4 py-2
                              
                              border border-gray-300 rounded-md text-slate-600 font-medium">
              <option value="All" className="hover:bg-indigo-500">All</option>
              <option value="Completed">Completed</option>
              <option value="Uncompleted">Uncompleted</option>
            </select>
            
            {filteredTodos.length === 0 && <p className="text-slate-800 text-xl py-8 font-bold">No Todo Found</p>}
            </>
            }
            
            {filteredTodos.map((todo) => (
              <Todo 
                    // handleDeleteTodo={handleDeleteTodo}
                    // handleEditTodo={handleEditTodo}
                    todo={todo}
                    key={todo.id} />
            ))}
              
          </div>
        
        </div>     
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch: (action: any) => {dispatch(action)}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);