import React from 'react';

import styles from './PageTitle.module.css'

interface PageTitleProps {
  children: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <h1 className={styles.pageTitle}>{children}</h1>;
}

export default PageTitle
