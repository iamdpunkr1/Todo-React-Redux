import TodoInput from "../partials/TodoInput"
import Todo from "../partials/Todo"
import { connect } from "react-redux"
import { addTodo, deleteTodo, editTodo } from "../redux/todo/todoActions"

export type TodosTypes = {
  id: number,
  value: string
}

type TodosProps = {
  todos: TodosTypes[],
  dispatch: any
}

const Todos = ({todos, dispatch}:TodosProps) => {


  const handleAddTodo = (val: TodosTypes) => {
    // setTodos(prev => [...prev, {id: val.id, value: val.value}])
    dispatch(addTodo(val))
  }

  const handleDeleteTodo = (id:number) => {
    // setTodos(prev => prev.filter(todo => todo.id !== id))
    dispatch(deleteTodo (id))
  }

  const handleEditTodo = (id:number, value:string) => {
    dispatch(editTodo({id, value}))
  }

  return (
    <div className="w-full text-center bg-indigo-100 p-8 min-h-1/2">
        <div className="w-5/6 mx-auto">
          
          <h1 className='text-4xl font-bold text-slate-800'>Todo List</h1>
          <TodoInput handleAddTodo={handleAddTodo} />
          <div className="flex mx-auto flex-col gap-2">
            
            {todos.map((todo) => (
              <Todo handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
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