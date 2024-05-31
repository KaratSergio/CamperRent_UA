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
  background-color: #f2f2f2;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
