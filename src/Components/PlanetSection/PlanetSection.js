import { useState, useEffect } from "react";

import IllustrationContainer from "./ImageIllustration/Illustration";
import InfoContainer from "./Info/Info";
import IntroContainer from "./Intro/Intro";

import { Section, Container } from "./PlanetSectionStyles";
import TabsContainer from "./Tabs/Tabs";
import useDataChange from "./useReplaceInfo";

const PlanetSection = ({ planetData }) => {
  const [handleClick, currentTab, currentData, isChanging] =
    useDataChange(planetData);

//console.log(currentData, 'h')

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <Section>
      <Container>
        <TabsContainer
          planetData={planetData}
          handleClick={handleClick}
          currentTab={currentTab}
          windowWidth={windowWidth}
        />
        <IllustrationContainer
          planetData={planetData}
          currentData ={currentData}
          isChanging={isChanging}
        />
        <IntroContainer
          planetData={planetData}
          currentData={currentData}
          isChanging={isChanging}
        />
        <InfoContainer planetData={planetData} />
      </Container>
    </Section>
  );
};

export default PlanetSection;
