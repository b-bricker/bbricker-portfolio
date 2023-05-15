import Footer from './components/footer';
import Header from './components/header';
import styles from './App.module.scss';

const App = (): JSX.Element => (
  <>
    <Header />
    <main>
      <h1 className={styles.contentheader}>Hi, I&apos;m Ben!</h1>
      <p className={styles.contenttext}>
        I am a full stack developer. I enjoy working with TypeScript in React
        and Node.
      </p>
      <p className={styles.contenttext}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
        tristique nisl et cursus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer sed pulvinar lorem. Praesent et augue ut urna
        accumsan congue. Aenean aliquam arcu convallis mi ultricies, luctus
        ultricies metus molestie. Integer nec erat nunc. Curabitur ultricies
        accumsan metus et facilisis.
      </p>
    </main>
    <Footer />
  </>
);

export default App;
