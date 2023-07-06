import Footer from './components/footer';
import Header from './components/header';
import { styled } from 'styled-components';
import './main.css';

const Paragraph = styled.p`
  width: 80%;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 5% 0;
  width: auto;
`;

const Main = styled.main`
  display: flex;
  overflow-y: auto;
  flex: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  background-color: var(--primary-color-2);
  color: var(--secondary-color-4);
`;

const App = (): JSX.Element => (
  <>
    <Header />
    <Main>
      <Title>Hi, I&apos;m Ben!</Title>
      <Paragraph>
        I am a web developer. I enjoy working with TypeScript in React and Node.
        I also love to dive into automation, CI/CD, and creating highly scalable
        and available cloud native systems.
      </Paragraph>
      <Paragraph>
        I started my journey in development while deployed with the U.S. Army. I
        spent my free time learning the basics with FreeCodeCamp and Mozilla
        Developer Network. When I came home I went to Virginia Commonwealth
        University and got a degree in Computer Science. I also got a minor in
        German for fun. Outside of work I try to travel as much as possible with
        my family, run a lot, try new vegetarian recipes, and continue learning
        languages - right now I&apos;m working on Swedish.
      </Paragraph>
    </Main>
    <Footer />
  </>
);

export default App;
