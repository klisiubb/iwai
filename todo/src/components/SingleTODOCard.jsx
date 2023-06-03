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
    <div className=" flex justify-between bg-red-100 py-2 rounded shadow">
      <div className="px-4">
        <h1 className={isDone ? "font-semibold line-through" : "font-semibold"}>
          {props.name}
        </h1>
      </div>
      <div className="px-4 flex space-x-4">
        <BsCheckSquare
          onClick={() => setIsDone(!isDone)}
          className="text-green-600 text-2xl"
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
          className="text-blue-600 text-2xl"
        />
        <BsTrashFill
          onClick={() => dispatch(todoDeleted(props.id))}
          className="text-red-600 text-2xl"
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
