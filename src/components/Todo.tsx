
const Todo = () => {
  return (
    <div className="w-full text-center bg-indigo-100 p-8">
        <h1 className='text-4xl font-bold text-slate-800'>Todo List</h1>
        <div className="flex justify-center gap-4 py-4">
            <input type="text" placeholder="Enter your todo" className="w-4/6 px-4 py-2 border border-gray-300 rounded-md" />
            <button className="w-1/6 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-800 rounded-md">Add</button>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center bg-indigo-500 text-white px-4 py-2 rounded-md">
                <span>Todo 1</span>
                <div className="flex gap-2">
                    <button className="px-2 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md">Edit</button>
                    <button className="px-2 py-1 bg-red-500 hover:bg-red-600 rounded-md">Delete</button>
                </div>
            </div>
            <div className="flex justify-between items-center bg-indigo-500 text-white px-4 py-2 rounded-md">
                <span>Todo 2</span>
                <div className="flex gap-2">
                    <button className="px-2 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md">Edit</button>
                    <button className="px-2 py-1 bg-red-500 hover:bg-red-600 rounded-md">Delete</button>
                </div>
            </div>
            <div className="flex justify-between items-center bg-indigo-500 text-white px-4 py-2 rounded-md">
                <span>Todo 3</span>
                <div className="flex gap-2">
                    <button className="px-2 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md">Edit</button>
                    <button className="px-2 py-1 bg-red-500 hover:bg-red-600 rounded-md">Delete</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Todo