import type { Metadata } from 'next'
import PageData from './pageData';
import styles from './page.module.scss';

const { metaData } = PageData;

export const metadata: Metadata = metaData;

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world!</h1>
    </main>
  );
}
