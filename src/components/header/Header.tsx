import { styled } from 'styled-components';
import '../../main.css';
// import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--secondary-color-3);
  height: 5%;
`;

const StyledNav = styled.nav`
  width: 10%;
  height: 100%;

  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const StyledUL = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// const StyledLI = styled.li<{ $selected: string; $name: string }>`
//   display: inline-block;
//   padding: 10px 15px;
//   text-decoration: none;
//   color: white;
//   font-weight: ${(props) =>
//     props.$selected === props.$name ? 'bold' : 'normal'};
// `;

// const StyledLink = styled(Link)`
//   display: inline-block;
//   padding: 10px 15px;
//   text-decoration: none;
//   color: white;
// `;

const StyledH1 = styled.h1`
  display: inline-block;
  color: var(--primary-color-2);
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledH1>BB</StyledH1>
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
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
