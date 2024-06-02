import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-image: linear-gradient(to left, #e44848, #ffc531, #f2f4f7);
  padding: 15px;
  width: 978px;
  border-radius: 15px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--dark-blue);
  font-family: var(--font-semibold);
  font-size: 24px;
  position: relative;

  &.active::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
  }

  &.active::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
  }

  &:hover::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
  }
`;
