import IllustrationContainer from "./ImageIllustration/Illustration";
import InfoContainer from "./Info/Info";
import IntroContainer from "./Intro/Intro";
import { Intro } from "./Intro/IntroStyles";
import { Section, Container } from "./PlanetSectionStyles";
import TabsContainer from "./Tabs/Tabs";

const PlanetSection = ({ planetData }) => {
  return (
    <Section>
      <Container>
        <IntroContainer planetData= {planetData}/>
        <IllustrationContainer planetData= {planetData}/>
        <TabsContainer planetData={planetData}/>
        <InfoContainer planetData={planetData}/>
      </Container>
    </Section>
  );
};

export default PlanetSection;
