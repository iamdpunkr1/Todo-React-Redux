
const Todo = () => {
  return (
    <div className="flex justify-between items-center bg-indigo-500 text-white px-4 py-2 rounded-md">
                <span>Todo 1</span>
                <div className="flex gap-2">
                    <button className="px-2 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md">Edit</button>
                    <button className="px-2 py-1 bg-red-500 hover:bg-red-600 rounded-md">Delete</button>
                </div>
    </div>
  )
}

export default Todo