import { useState } from 'react'

import PageTitle from '../components/PageTitle'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

import styles from './App.module.css'

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddNewTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: text,
      isCompleted: false,
    }

    setTodos([...todos, newTodo]);
  }

  return (
    <div className={styles.app}>
      <PageTitle>Todo</PageTitle>
      <TodoForm addNewTodo={handleAddNewTodo} />
      <TodoList todos={todos}/>
    </div>
  )
}
