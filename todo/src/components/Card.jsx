import AddTODOForm from "./AddTODOForm"
import UpdateTODOForm from "./UpdateTODOForm"
import SingleTODOCard from "./SingleTODOCard"
import { todosCleared } from "../store/features/todo/todoSlice"
import { useDispatch, useSelector } from "react-redux"

const Card = () => {
  const todos = useSelector((state) => state.todos.todos)
  const toggleForm = useSelector((state) => state.todos.toggleForm)
  const dispatch = useDispatch()

  return (
    <div className="w-9/12 h-3/4 min-h-max bg-gradient-to-tl from-slate-900 via-neutral-800 to-gray-600 shadow-2xl rounded-lg p-4 flex flex-col items-center justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      {/* Add the scrollbar styles using classes */}
      <style>
        {`
          /* Customize the scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Customize the scrollbar track */
          ::-webkit-scrollbar-track {
            background: #ccc;
          }

          /* Customize the scrollbar thumb */
          ::-webkit-scrollbar-thumb {
            background: #888;
          }
        `}
      </style>

      <div className="flex flex-col space-y-10 w-full items-center">
        <h1 className="text-3xl font-semibold underline text-white text-center">
          My TODO List
        </h1>
        <div className="w-full max-w-lg">
          {toggleForm ? <AddTODOForm /> : <UpdateTODOForm />}
        </div>
        <ul className="w-full max-w-lg space-y-4">
          {todos.map((todo) => (
            <li key={todo.id}>
              <SingleTODOCard
                id={todo.id}
                name={todo.name}
                isDone={todo.isDone}
              />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => dispatch(todosCleared())}
        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </div>
  )
}

export default Card
