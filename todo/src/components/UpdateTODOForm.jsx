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
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex space-x-3 mt-4 w-full max-w-md"
        >
          {isValid && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded w-full">
              Please enter a valid TODO.
            </div>
          )}
          <div className="flex w-full">
            <input
              type="text"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
              placeholder="Update"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-7 rounded-r focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateTODOForm
