import { todoAdded } from "../store/features/todo/todoSlice"
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useState } from "react"

function AddTODOForm() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (/^\s*$/.test(input)) {
      setIsValid(false)
      setInput("")
      return
    } else {
      dispatch(todoAdded({ id: nanoid(), name: input }))
      setInput("")
      setIsValid(true)
    }
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex space-x-3 mt-4 w-full max-w-md"
      >
        {!isValid && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            Please enter a valid TODO.
          </div>
        )}
        <input
          type="text"
          className="shadow appearance-none border rounded w-full"
          placeholder="Add TODO"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddTODOForm
