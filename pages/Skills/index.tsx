import styles from './style.module.scss';

const DEFAULT_SIZE = 50;

const Skills = () => (
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
);
export default Skills;

const skills = [
  { name: 'HTML5 / CSS3', src: '/assets/skillsLogos/HTML-CSS.png' },
  { name: 'Docker', src: '/assets/skillsLogos/docker.png', width: 70 },
  { name: 'Prettier', src: '/assets/skillsLogos/prettier.png' },
  { name: 'Git', src: '/assets/skillsLogos/git.png' },
  {
    name: 'React Konva',
    src: '/assets/skillsLogos/react-konva.png',
  },
  { name: 'React', src: '/assets/skillsLogos/react.png' },
  {
    name: 'React Native',
    src: '/assets/skillsLogos/reactnative.png',
    width: 45,
    height: 75,
  },
  { name: 'Redux', src: '/assets/skillsLogos/redux.png' },
  { name: 'SocketIO', src: '/assets/skillsLogos/socketio.svg' },
  { name: 'ESLint', src: '/assets/skillsLogos/eslint.png' },
  { name: 'TS', src: '/assets/skillsLogos/TS.png' },
  { name: 'Vue', src: '/assets/skillsLogos/vue.png' },
  {
    name: 'Webpack',
    src: '/assets/skillsLogos/webpack.png',
  },
  { name: 'Arduino', src: '/assets/skillsLogos/arduino.png' },
];
