import EmptyTodoListMessageProps from '../../interfaces/EmptyTodoListMessageProps';
import styles from './EmptyTodoListMessage.module.css';

const EmptyTodoListMessage: React.FC<EmptyTodoListMessageProps> = ({children}) => {
  return <p className={styles.emptyTodoListMessage}>{children}</p>
}

export default EmptyTodoListMessage
