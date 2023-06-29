"use client"
import Header from "@/components/header/Header"
import TodoList from "@/components/todoList/TodoList"

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <TodoList />
    </main>
  )
}
