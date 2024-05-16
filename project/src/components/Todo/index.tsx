import styles from './Todo.module.css'

const Todo = () => {
  return (
    <div className={styles.todo}>
      <h2 className={styles.todoTitle}>wetwetwet</h2>
      <input type="checkbox" className={styles.todoCheckbox} />
    </div>
  )
}

export default Todo
