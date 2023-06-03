import { BsTrashFill, BsCheckSquare } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"
import { useState } from "react"
import { todoDeleted, toggleInputForm } from "../store/features/todo/todoSlice"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"

function SingleTODOCard(props) {
  const [isDone, setIsDone] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between items-center bg-gray-100 py-3 px-4 rounded-md shadow-md mb-3">
      <div>
        <h1 className={isDone ? "font-semibold line-through" : "font-semibold"}>
          {props.name}
        </h1>
      </div>
      <div className="flex space-x-4">
        <BsCheckSquare
          onClick={() => setIsDone(!isDone)}
          className="text-green-600 text-2xl cursor-pointer"
        />
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
}

export default SingleTODOCard
