import Footer from './components/footer';
import Header from './components/header';
import { styled } from 'styled-components';

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
`;

const App = (): JSX.Element => (
  <>
    <Header />
    <Main>
      <Title>Hi, I&apos;m Ben!</Title>
      <Paragraph>
        I am a full stack developer. I enjoy working with TypeScript in React
        and Node.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
        tristique nisl et cursus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer sed pulvinar lorem. Praesent et augue ut urna
        accumsan congue. Aenean aliquam arcu convallis mi ultricies, luctus
        ultricies metus molestie. Integer nec erat nunc. Curabitur ultricies
        accumsan metus et facilisis.
      </Paragraph>
    </Main>
    <Footer />
  </>
);

export default App;
