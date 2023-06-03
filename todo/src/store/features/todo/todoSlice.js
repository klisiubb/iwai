import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  toggleForm: true,
  todoUpdate: {},
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload]
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    todosCleared: (state) => {
      state.todos = []
      localStorage.removeItem("todos")
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    toggleInputForm: (state, action) => {
      state.toggleForm = !state.toggleForm
      state.todoUpdate = { ...state.todoUpdate, ...action.payload }
    },
    todoUpdated: (state, action) => {
      const { id, name } = action.payload
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, name } : todo
      )
      state.toggleForm = !state.toggleForm
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
  },
})
export const {
  todoAdded,
  todosCleared,
  todoDeleted,
  toggleInputForm,
  todoUpdated,
} = todoSlice.actions
export default todoSlice.reducer
