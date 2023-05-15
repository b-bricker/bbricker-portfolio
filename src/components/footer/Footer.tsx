import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';

import * as icons from '@fortawesome/free-brands-svg-icons';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <ul className={styles.footerlinks}>
      <li className={styles.footerlinkitem}>
        <a href="https://github.com/b-bricker">
          <FontAwesomeIcon icon={icons.faGithub} />
        </a>
      </li>
      <li className={styles.footerlinkitem}>
        <a href="https://www.linkedin.com/in/benjaminbricker/">
          <FontAwesomeIcon icon={icons.faLinkedin} />
        </a>
      </li>
    </ul>
    <p className={styles.footertext}>
      Please use LinkedIn messaging if you wish to contact me
    </p>
  </footer>
);

export default Footer;
