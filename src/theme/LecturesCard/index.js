import React from 'react';

import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function LecturesCard(props) {
  const {
    subdomain,
    name,
  } = props;

  return (
    <Link to={`http://${subdomain}.easifem.com`} className={styles.lecturesCard}>
      <strong>{name}</strong>
    </Link>
  );
}

export default LecturesCard;
