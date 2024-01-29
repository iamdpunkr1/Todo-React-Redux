
const TodoInput = () => {
  return (
    <div className="flex justify-center gap-4 py-4">
            <input type="text" placeholder="Enter your todo" className="w-4/6 px-4 py-2 border border-gray-300 rounded-md" />
            <button className="w-1/6 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-800 rounded-md">Add</button>
    </div>
  )
}

export default TodoInput