import Todo from '../interfaces/Todo'

class TodoTask implements Todo {
  readonly id: string
  title: string
  isCompleted: boolean

  constructor (title: string) {
    this.id = crypto.randomUUID()
    this.title = title
    this.isCompleted = false
  }
}

export default TodoTask
