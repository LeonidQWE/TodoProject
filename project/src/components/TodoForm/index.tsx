import React, {useState, useRef} from 'react'


import styles from './TofoForm.module.css'

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

interface TodoFromProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoForm: React.FC<TodoFromProps> = ({todos, setTodos}) => {
  const [todo, setTodo] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: todo,
      isCompleted: false,
    }

    setTodos([...todos, newTodo]);
    setTodo('');

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmitTodo}>
      <input type="text" className={styles.todoFormInput} onChange={(event) => setTodo(event.target.value)} ref={inputRef}/>
      <button type="submit" className={styles.todoFormSubmit}>Submit</button>
    </form>
  )
}

export default TodoForm
