import PageTitle from '../components/PageTitle'
import TodoForm from '../components/TodoForm'

import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <PageTitle>Todo</PageTitle>
      <TodoForm />
    </div>
  )
}
