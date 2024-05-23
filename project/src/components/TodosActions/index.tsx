import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Btn from '../Btn'
import TodosActionsProps from '../../interfaces/TodosActionsProps'
import styles from './TodosActions.module.css'
import React from 'react'

const TodosActions: React.FC<TodosActionsProps> = ({resetCompletedTodos, deleteAllTodos, completedTodosExist}) => {
  return (
    <div className={styles.todosActions}>
      <Btn
        title="Reset Completed Todos"
        onClick={resetCompletedTodos}
        disabled={!completedTodosExist}>
        <RiDeleteBin2Line/>
      </Btn>
      <Btn
        title="Reset Todos"
        onClick={deleteAllTodos}>
        <RiRefreshLine/>
      </Btn>
    </div>
  )
}

export default TodosActions
