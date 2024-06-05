import styled from 'styled-components';
import Camper from '../assets/images/camp.png';
import Icon from '../components/Icon/Icon';

const NotFoundWrapper = styled.div`
  justify-content: space-around;
  background-image: url('${Camper}');
  background-size: 20%;
  background-repeat: no-repeat;
  background-position-x: 1230px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  margin-left: -260px;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>Page not found</h1>
      <p>404</p>
      <a href="/">
        ← return to <Icon id="icon-home" width={32} height={32} /> Home page
      </a>
    </NotFoundWrapper>
  );
};

export default NotFound;
