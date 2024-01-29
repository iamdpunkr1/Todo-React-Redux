import TodoInput from "../partials/TodoInput"
import Todo from "../partials/Todo"
const Todos = () => {
  return (
    <div className="w-full text-center bg-indigo-100 p-8">
        
        <h1 className='text-4xl font-bold text-slate-800'>Todo List</h1>
        
        <TodoInput />

        <div className="flex flex-col gap-2">
            <Todo />
            <Todo />
        </div>
    </div>
  )
}

export default Todos