import React from 'react'

import styles from './TofoForm.module.css'

interface TodoFromProps {

}

const TodoForm: React.FC<TodoFromProps> = () => {
  return (
    <form className={styles.todoForm}>
      <input type="text" className={styles.todoFormInput} />
      <button type="submit" className={styles.todoFormSubmit}>Submit</button>
    </form>
  )
}

export default TodoForm
