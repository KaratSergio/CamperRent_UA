import Slider from '../Slider/Slider';

import BannerA from '../../assets/images/slider/foto-a.jpg';
import BannerB from '../../assets/images/slider/foto-b.jpg';
import BannerC from '../../assets/images/slider/foto-c.jpg';
import BannerD from '../../assets/images/slider/foto-d.jpg';
import BannerE from '../../assets/images/slider/foto-e.jpg';
import BannerF from '../../assets/images/slider/foto-f.jpg';
import BannerG from '../../assets/images/slider/foto-g.jpg';
import BannerH from '../../assets/images/slider/foto-h.jpg';

import {
  HomeSection,
  MainTitle,
  MainText,
  AccentText,
  ServicesTitle,
  TextMessageWrapper,
  TextMessageOne,
  TextMessageTwo,
  TextMessageThree,
  TextMessageFour,
  TextMessageFive,
  FotoCampingOne,
  MessageBoxOne,
  MessageBoxTwo,
} from './HomePageStyles';
import { DecorLine } from '../CamperModal/CamperModalStyles';

const HomePage = () => {
  const images = [BannerA, BannerB, BannerC, BannerD, BannerE];

  return (
    <HomeSection>
      <MainTitle>"Forward to new adventures with CamperRent!"</MainTitle>
      <DecorLine />
      <Slider images={images} />
      <MainText>
        <AccentText>CamperRent</AccentText> is a team of professionals dedicated to creating
        unforgettable <br />
        <AccentText>camping experiences</AccentText> for its clients. We strive to provide you with
        the best <br />
        <AccentText>camping models</AccentText> with a personal touch and impeccable service.
      </MainText>

      <ServicesTitle>Services</ServicesTitle>
      <DecorLine />
      <TextMessageWrapper>
        <MessageBoxOne>
          <TextMessageOne>
            <AccentText>A full range of services</AccentText> for your camping holiday: car rental,
            camping equipment, consultations and much more. <br />{' '}
            <AccentText>
              Discover our range of diverse camping models - from cozy vans to luxurious RVs
            </AccentText>
            .CamperRent makes sure you find the perfect car for your next adventure.
          </TextMessageOne>
          <FotoCampingOne src={BannerF} alt="Camping" />
          <div>
            <TextMessageTwo>
              CamperRent will provide you with everything you need for a{' '}
              <AccentText>comfortable and safe adventure </AccentText>
              in the great outdoors."
            </TextMessageTwo>
            <TextMessageThree>
              <AccentText>Freedom and flexibility</AccentText>: travel without restrictions,
              following your own route and schedule.
            </TextMessageThree>
          </div>
        </MessageBoxOne>
        <MessageBoxTwo>
          <FotoCampingOne src={BannerG} alt="Camping" />
          <div>
            <TextMessageFour>
              <AccentText>Close to nature:</AccentText> enjoy the beauty of the surrounding world and
              a sense of <AccentText>freedom</AccentText>, being away from the hustle and bustle of
              the city.
            </TextMessageFour>
            <TextMessageFive>
              <AccentText>Comfort and convenience:</AccentText> our camping models are equipped with
              everything you need for a pleasant stay in nature.
            </TextMessageFive>
          </div>
          <FotoCampingOne src={BannerH} alt="Camping" />
        </MessageBoxTwo>
      </TextMessageWrapper>
    </HomeSection>
  );
};

export default HomePage;
