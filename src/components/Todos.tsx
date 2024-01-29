import TodoInput from "../partials/TodoInput"
import Todo from "../partials/Todo"
const Todos = () => {
  return (
    <div className="w-full text-center bg-indigo-100 p-8">
        <div className="w-5/6 mx-auto">
          
          <h1 className='text-4xl font-bold text-slate-800'>Todo List</h1>
          <TodoInput />
          <div className="flex mx-auto flex-col gap-2">
              <Todo />
              <Todo />
          </div>
        
        </div>     
    </div>
  )
}

export default Todos