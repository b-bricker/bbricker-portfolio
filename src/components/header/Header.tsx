import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>BB</h1>
        {/* <ul className={styles.navlinks}>
          {menuOptions.map((option, index) => (
            <li className={option.className} key={index}>
              <Link
                className={styles.navitemlink}
                to={option.to}
                onClick={option.onClick}
              >
                {option.text}
              </Link>
            </li>
          ))}
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
