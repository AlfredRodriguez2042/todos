import { createSlice } from '@reduxjs/toolkit'

interface ITodo {
  userId: number | string
  id: number | string
  title: string
  completed: boolean
}
interface InitialState {
  todos: ITodo[]
  todo: ITodo | null
}
const initialState: InitialState = {
  todos: [],
  todo: null,
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state: InitialState, action) => {
      return {
        ...state,
        todos: action.payload,
      }
    },
    getTodo: (state: InitialState, action) => {
      return {
        ...state,
        todo: action.payload,
      }
    },
    updateTodo: (state: InitialState, action) => {
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload.id) {
            el = action.payload
          }
          return el
        }),
      }
    },
    createTodo: (state: InitialState, action) => {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      }
    },
    deleteTodo: (state: InitialState, action) => {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      }
    },
  },
})
export const { createTodo, deleteTodo, getTodo, getTodos, updateTodo } =
  todosSlice.actions
export default todosSlice.reducer
