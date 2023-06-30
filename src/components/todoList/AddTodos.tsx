import React from "react"
import styled from "styled-components"
import { ITodoState, ITodoItem } from "./TodoList"

const AddTodosContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Button = styled.button`
  background-color: black;
  width: 6rem;
  height: 3rem;
  padding: 0.25rem;
  color: white;
  text-align: center;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  color: black;
`

const AddTodos = ({ setTodos, todos }: ITodoState) => {
  const [inputText, setInputText] = React.useState<string>("")

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleAddTodo = () => {
    const newTodo: ITodoItem = {
      id: todos.length + 1,
      text: inputText,
      isFavorite: false,
    }

    setTodos([newTodo, ...todos])
    localStorage.setItem("todos", JSON.stringify(todos))
    setInputText("")
  }

  return (
    <AddTodosContainer>
      <div
        style={{
          paddingRight: "0.5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button onClick={handleAddTodo}>Add Note</Button>
      </div>
      <Input
        type="text"
        placeholder="Add a note"
        value={inputText}
        onChange={handleInputChange}
      />
    </AddTodosContainer>
  )
}

export default AddTodos
