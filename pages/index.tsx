import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Skills from './Skills';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        className={styles.shivangImage}
        alt="shivang's illustration"
        src="/assets/shivang-dark.png"
      />

      <p className={styles.name}>Hi! I&apos;m Shivang.</p>
      <p className={styles.occupation}>
        Frontend Developer <br /> JavaScript Engineer
      </p>

      <div className={styles.skills}>
        <Skills />
      </div>
    </div>
  );
};

export default Home;
