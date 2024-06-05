import { Nav, NavList, NavItem, StyledNavLink } from './NavigationStyles';
import Icon from '../Icon/Icon';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">
            <Icon id="icon-home" size={24} />
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/catalog">
            <Icon id="icon-list" size={24} />
            Catalog
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/favorites">
            <Icon id="icon-star" size={24} />
            Favorites
          </StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
