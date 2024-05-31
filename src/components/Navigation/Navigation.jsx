import { Nav, NavList, NavItem, NavLink } from './NavigationStyles';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/catalog">Catalog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/favorites">Favorites</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
