import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 20px;
  background-image: linear-gradient(to right, #101828, #475467, #e44848, #ffc531, #f2f4f7);
  border-radius: 10px;
  margin-bottom: 100px;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 40px;
  margin: 0 10px 0 10px;
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: var(--light-gray);
`;
export const LogoTextAccent = styled.div`
  display: flex;
  height: 50px;
  align-items: flex-end;
  justify-content: space-around;
  font-size: 34px;
  font-weight: bold;
  background: linear-gradient(to bottom, rgb(0, 149, 255) 5%, #ffc531 65%);
  border-radius: 38px;
  box-shadow: 0px 0px 6px var(--light-gray-accent);
  color: transparent;
  margin-bottom: 4px;
`;
