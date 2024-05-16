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

  console.log(todos)

  return (
    <div className={styles.app}>
      <PageTitle>Todo</PageTitle>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos}/>
    </div>
  )
}
