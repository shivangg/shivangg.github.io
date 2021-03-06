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
      <div className={styles.aboveTheFold}>
        <img
          className={styles.shivangImage}
          alt="shivang's illustration"
          src="/assets/shivang-dark.png"
        />

        <p className={styles.name}>
          Hi
          <span role="img" aria-label="wave hand">
            👋
          </span>
          I&apos;m Shivang.
        </p>

        <div className={styles.occupation}>
          <p>Frontend Developer</p>
          <p>&</p>
          <p>JavaScript Engineer</p>
        </div>
      </div>

      <div className={styles.skills}>
        <Skills />
      </div>
    </div>
  );
};

export default Home;
