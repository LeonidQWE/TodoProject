import PageTitleProps from '../../interfaces/PageTitleProps';
import styles from './PageTitle.module.css';

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h1 className={styles.pageTitle}>{children}</h1>;
}

export default PageTitle
