import Icon from '../Icon/Icon';
import DecorImage from '../../assets/images/footer-decor.png';

import {
  FooterWrapper,
  FooterContent,
  FooterTitle,
  FooterList,
  FooterListItem,
  SocialLink,
  ContactInfo,
  DecorContent,
  DecorImg,
  DecorText,
  FooterTitleContact,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <DecorContent>
        <DecorText>CamperRent</DecorText>
        <DecorImg src={DecorImage} alt="Camping" />
      </DecorContent>
      <FooterContent>
        <div>
          <FooterTitle>Social Media</FooterTitle>
          <FooterList>
            <FooterListItem>
              <SocialLink href="https://www.faccebook.com" target="_blank" aria-label="Facebook">
                <Icon id="icon-facebook" />
              </SocialLink>
            </FooterListItem>
            <FooterListItem>
              <SocialLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                <Icon id="icon-instagram" />
              </SocialLink>
            </FooterListItem>
            <FooterListItem>
              <SocialLink href="https://www.youtube.com" target="_blank" aria-label="Twitter">
                <Icon id="icon-youtube" />
              </SocialLink>
            </FooterListItem>
          </FooterList>
        </div>

        <div>
          <FooterTitleContact>Contact Us :</FooterTitleContact>
          <ContactInfo>
            <p>Phone: +123 456 7890</p>
            <p>Email: contact@yourcompany.com</p>
            <p>Address: 123 Your Street, Your City, Your Country</p>
          </ContactInfo>
        </div>
      </FooterContent>
      <FooterContent>
        <p>© 2024 Your Company. All rights reserved.</p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
