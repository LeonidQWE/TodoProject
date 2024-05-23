import CompletedTodosTextProps from "../../interfaces/CompletedTodosText";
import styles from './CompletedTodosText.module.css'

const CompletedTodosText: React.FC<CompletedTodosTextProps> = ({children}) => {
  return (
    <h2 className={styles.completedTodosText}>
      {children}
    </h2>
  )
}

export default CompletedTodosText
