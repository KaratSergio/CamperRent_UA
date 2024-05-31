import React, { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logotype from '../../assets/images/camper.png';

import {
  Container,
  NavBox,
  LogoBox,
  LogoImage,
  LogoText,
} from './LayoutStyles';

const Layout = () => {
  return (
    <Container>
      <NavBox>
        <LogoBox>
          <Link to="/">
            <LogoImage src={Logotype} alt="Logotype" />
            <LogoText>CamperRent</LogoText>
          </Link>
        </LogoBox>
        <Navigation />
      </NavBox>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
