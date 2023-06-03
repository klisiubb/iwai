import AddTODOForm from "./AddTODOForm"
import UpdateTODOForm from "./UpdateTODOForm"
import SingleTODOCard from "./SingleTODOCard"
import { todosCleared } from "../store/features/todo/todoSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Card = () => {
  const todos = useSelector((state) => state.todos.todos)
  const toggleForm = useSelector((state) => state.todos.toggleForm)
  const dispatch = useDispatch()

  return (
    <div className="w-1/2 h-3/4 min-h-max bg-stone-900 shadow-2xl rounded-lg p-4 flex flex-col items-center justify-between">
      <div className="flex flex-col space-y-10 w-full items-center">
        <h1 className="text-3xl font-semibold underline text-white text-center">
          My TODO List
        </h1>
        <div className="w-full">
          {toggleForm ? <AddTODOForm /> : <UpdateTODOForm />}
        </div>
        <ul className="">
          {todos.map((todo) => (
            <li key={todo.id}>
              <SingleTODOCard id={todo.id} name={todo.name} />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => dispatch(todosCleared())}
        className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </div>
  )
}

export default Card
