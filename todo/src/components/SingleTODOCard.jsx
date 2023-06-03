import { BsTrashFill, BsCheckSquare, BsSquare } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"
import { useState } from "react"
import {
  todoDeleted,
  toggleInputForm,
  todoToggled,
} from "../store/features/todo/todoSlice"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"

function SingleTODOCard(props) {
  const [isDone, setIsDone] = useState(props.isDone)
  const dispatch = useDispatch()

  const handleToggle = () => {
    setIsDone(!isDone)
    dispatch(todoToggled({ id: props.id, isDone: !isDone }))
  }

  return (
    <div
      className={`flex justify-between items-center bg-gray-100 py-3 px-4 rounded-md shadow-md mb-3 ${
        isDone ? "line-through" : ""
      }`}
    >
      <div>
        <h1 className={isDone ? "font-semibold line-through" : "font-semibold"}>
          {props.name}
        </h1>
      </div>
      <div className="flex space-x-4">
        {isDone ? (
          <BsSquare
            onClick={handleToggle}
            className="text-gray-500 text-2xl cursor-pointer"
          />
        ) : (
          <BsCheckSquare
            onClick={handleToggle}
            className="text-green-600 text-2xl cursor-pointer"
          />
        )}
        <FaEdit
          onClick={() =>
            dispatch(
              toggleInputForm({
                id: props.id,
                name: props.name,
              })
            )
          }
          className="text-blue-600 text-2xl cursor-pointer"
        />
        <BsTrashFill
          onClick={() => dispatch(todoDeleted(props.id))}
          className="text-red-600 text-2xl cursor-pointer"
        />
      </div>
    </div>
  )
}

SingleTODOCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  isDone: PropTypes.bool,
}

export default SingleTODOCard
