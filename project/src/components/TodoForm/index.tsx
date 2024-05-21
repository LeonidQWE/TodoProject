import {useState} from 'react';
import TodoFromProps from '../../interfaces/TodoFormProps';
import styles from './TofoForm.module.css';

const TodoForm: React.FC<TodoFromProps> = ({addNewTodo}) => {
  const [todo, setTodo] = useState('');

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewTodo(todo);
    setTodo('');
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmitTodo}>
      <input
        type="text"
        className={styles.todoFormInput}
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
        placeholder="Enter New Todo"/>
      <button type="submit" className={styles.todoFormSubmit}>Submit</button>
    </form>
  )
}

export default TodoForm
