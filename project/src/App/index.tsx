import { useState } from 'react'

import PageTitle from '../components/PageTitle'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import EmptyTodoListMessage from '../components/EmptyTodoListMessage'

import styles from './App.module.css'

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddNewTodo = (text: string) => {
    if (!text) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: text,
      isCompleted: false,
    }

    setTodos([...todos, newTodo]);
  }

  const checkLengthTodoList = (): JSX.Element => {
    if (todos.length === 0) {
      return <EmptyTodoListMessage>Todo List is empty</EmptyTodoListMessage>
    }
    return <TodoList todos={todos} />
  }

  return (
    <div className={styles.app}>
      <PageTitle>Todo</PageTitle>
      <TodoForm addNewTodo={handleAddNewTodo} />
      {checkLengthTodoList()}
    </div>
  )
}
