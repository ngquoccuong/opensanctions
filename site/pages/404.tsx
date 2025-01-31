import Link from 'next/link'
import Container from 'react-bootstrap/Container';

import Layout from '../components/Layout'

import styles from '../styles/404.module.scss'

export default function Error() {
  return (
    <Layout.Base title="Page not found">
      <Container>
        <h1 className={styles.errorTitle}>
          Page not found
        </h1>

        <p className={styles.errorSummary}>
          The page you have requested cannot be found. Try visiting
          the <Link href="/datasets/">dataset listing</Link> to explore all
          material published on this site.
        </p>
      </Container>
    </Layout.Base >
  )
}