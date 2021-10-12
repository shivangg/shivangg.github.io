import styles from './style.module.scss';

const DEFAULT_SIZE = 50;

const Skills = () => (
  <>
    <h3 className={styles.skillTitle}>Skills</h3>
    <ul className={styles.skillsContainer}>
      {skills.map((skill) => (
        <li key={skill.name} className={styles.skillContainer}>
          <div>
            <img
              alt={skill.name}
              width={skill.width || DEFAULT_SIZE}
              height={skill.height || DEFAULT_SIZE}
              src={skill.src}
            />
            <p>{skill.name}</p>
          </div>
        </li>
      ))}
    </ul>
  </>
);
export default Skills;

const skills = [
  { name: 'HTML5 / CSS3', src: '/assets/skillsLogos/HTML-CSS.webp' },
  { name: 'Docker', src: '/assets/skillsLogos/docker.webp', width: 70 },
  { name: 'Prettier', src: '/assets/skillsLogos/prettier.png' },
  { name: 'Git', src: '/assets/skillsLogos/git.webp' },
  {
    name: 'React Konva',
    src: '/assets/skillsLogos/react-konva.webp',
  },
  { name: 'React', src: '/assets/skillsLogos/react.webp' },
  {
    name: 'React Native',
    src: '/assets/skillsLogos/reactnative.webp',
    width: 45,
    height: 75,
  },
  { name: 'Redux', src: '/assets/skillsLogos/redux.webp' },
  { name: 'SocketIO', src: '/assets/skillsLogos/socketio.svg' },
  { name: 'ESLint', src: '/assets/skillsLogos/eslint.webp' },
  { name: 'TS', src: '/assets/skillsLogos/TS.webp' },
  { name: 'Vue', src: '/assets/skillsLogos/vue.webp' },
  {
    name: 'Webpack',
    src: '/assets/skillsLogos/webpack.webp',
  },
  { name: 'Arduino', src: '/assets/skillsLogos/arduino.webp' },
];
