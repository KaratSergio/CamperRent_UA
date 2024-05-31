import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #333;
  padding: 15px;
  width: 800px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
`;
