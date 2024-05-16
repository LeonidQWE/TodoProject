import PageTitle from '../components/PageTitle'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <PageTitle>Todo</PageTitle>
      <TodoForm />
      <TodoList />
    </div>
  )
}
