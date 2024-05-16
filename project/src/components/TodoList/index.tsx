import React from 'react'

import Todo from '../Todo'

import styles from './TodoList.module.css'

interface TodoListProps {
}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div className={styles.todoList}>
      <Todo />
    </div>
  )
}

export default TodoList
