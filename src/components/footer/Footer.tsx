import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
import '../../main.css';
import * as icons from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: var(--secondary-color-3);
`;

const StyledUL = styled.ul`
  width: auto;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 1px;
`;

const StyledLI = styled.li`
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: var(--primary-color-2);
  :hover {
    color: var(--complement-color-2);
  }
`;

const StyledP = styled.p`
  padding: 0;
  margin: 1px;
  color: var(--primary-color-2);
`;

const Footer = (): JSX.Element => (
  <StyledFooter>
    <StyledUL>
      <StyledLI>
        <StyledAnchor href="https://github.com/b-bricker">
          <FontAwesomeIcon icon={icons.faGithub} />
        </StyledAnchor>
      </StyledLI>
      <StyledLI>
        <StyledAnchor href="https://www.linkedin.com/in/benjaminbricker/">
          <FontAwesomeIcon icon={icons.faLinkedin} />
        </StyledAnchor>
      </StyledLI>
    </StyledUL>
    <StyledP>Please use LinkedIn messaging if you wish to contact me</StyledP>
  </StyledFooter>
);

export default Footer;
