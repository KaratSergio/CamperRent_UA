import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: var(--dark-blue);
  color: var(--white);
  padding: 20px;
  width: 100%;
  max-width: 1440px;
  border-radius: 10px;
  margin-top: 100px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const FooterTitleContact = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 40px;
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const FooterListItem = styled.li`
  box-shadow: 0px 0px 6px white;
  border-radius: 50px;
  padding: 6px 6px 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialLink = styled.a`
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  svg {
    fill: var(--white);
    transition: fill 0.3s;

    &:hover {
      fill: #007bff;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
`;

export const DecorContent = styled.div`
  width: 400px;
  height: 60px;
  border-radius: 50px;
  background-color: var(--white);
  margin-bottom: 10px;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.5);
`;

export const DecorImg = styled.img`
  margin-left: 1100px;
  width: 240px;
  height: 240px;
`;
export const DecorText = styled.h3`
  margin-left: 1280px;
`;
