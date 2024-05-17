import React from 'react'
import styles from './EmptyTodoListMessage.module.css'

interface EmptyTodoListMessageProps {
  children: string
}

const EmptyTodoListMessage: React.FC<EmptyTodoListMessageProps> = ({children}) => {
  return <p className={styles.emptyTodoListMessage}>{children}</p>
}

export default EmptyTodoListMessage
