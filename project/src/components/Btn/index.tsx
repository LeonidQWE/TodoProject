import BtnProps from "../../interfaces/BtnProps";
import styles from './Btn.module.css'

const Btn: React.FC<BtnProps> = ({children, onClick, title, disabled}) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      title={title}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default Btn
