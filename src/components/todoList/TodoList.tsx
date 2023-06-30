import React from "react"
import TodoItems from "./TodoItems"
import AddTodos from "./AddTodos"

export interface ITodoItem {
  id: number
  text: string
  isFavorite: boolean
}
export interface ITodoState {
  todos: ITodoItem[]
  setTodos: React.SetStateAction<any>
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodoItem[]>([])

  return (
    <div className="w-full p-4">
      <AddTodos setTodos={setTodos} todos={todos} />

      <TodoItems setTodos={setTodos} todos={todos} />
    </div>
  )
}

export default TodoList
