import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoUpdated } from "../store/features/todo/todoSlice"

const UpdateTODOForm = () => {
  const dispatch = useDispatch()
  const todoToUpdate = useSelector((state) => state.todos.todoUpdate)
  const [update, setUpdate] = useState(todoToUpdate.title)
  const [isValid, setIsValid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (/^\s*$/.test(update)) {
      setIsValid(true)
      setUpdate("")
      return
    } else {
      dispatch(
        todoUpdated({
          id: todoToUpdate.id,
          name: update,
        })
      )
      setUpdate("")
      setIsValid(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex space-x-3">
        {isValid && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            Please enter a valid TODO.
          </div>
        )}
        <input
          type="text"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Update"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </>
  )
}

export default UpdateTODOForm
