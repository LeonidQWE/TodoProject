class TodoTask {
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
