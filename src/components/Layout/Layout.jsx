import React, { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LogoCamper from '../../assets/images/camper.png';
import LogoTree from '../../assets/images/tree.png';

import { Container, NavBox, LogoBox, LogoImage, LogoText, LogoTextAccent } from './LayoutStyles';

const Layout = () => {
  return (
    <Container>
      <NavBox>
        <LogoBox>
          <Link to="/">
            <LogoTextAccent>
              <LogoImage src={LogoCamper} alt="CamperCar" />
              <LogoImage src={LogoTree} alt="Trees" />
            </LogoTextAccent>
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
