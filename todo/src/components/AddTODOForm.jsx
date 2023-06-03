import { useState } from "react"
import { useDispatch } from "react-redux"
import { todoAdded } from "../store/features/todo/todoSlice"
import { nanoid } from "@reduxjs/toolkit"

function AddTODOForm() {
  const [input, setInput] = useState("")
  const [isValid, setIsValid] = useState(true)
  const dispatch = useDispatch()

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

  const handleDismiss = () => {
    setIsValid(true)
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex space-x-3 mt-4 w-full max-w-lg" // Adjust the max-width as needed
      >
        <div className="flex flex-col w-full relative">
          {!isValid && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-2 flex items-center">
              <span className="mr-2">Please enter a valid TODO.</span>
              <button
                className="ml-auto focus:outline-none"
                onClick={handleDismiss}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-700 hover:text-red-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="flex">
            <input
              type="text"
              className="shadow appearance-none border rounded-l w-full"
              placeholder="Add TODO"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-r"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTODOForm
