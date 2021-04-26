import { skills } from './skillsData';
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
