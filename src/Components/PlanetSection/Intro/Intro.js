import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { Text, SourceContainer, Title, Intro, Link } from "./IntroStyles";

function IntroContainer({ planetData, currentData, isChanging }) {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1 },
    },
  };

  //console.log(planetData.overview.source)

  const [contentData, setContentData] = useState("");

  useEffect(() => {
    const checkData = (currentData) => {
      if (currentData === "overview") {
        setContentData(planetData.overview.content);
      } else if (currentData === "structure") {
        setContentData(planetData.structure.content);
      } else {
        setContentData(planetData.geology.content);
      }
    };
    checkData(currentData);
  }, [currentData, contentData]);

  return (
    <Intro
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Title>{planetData.name}</Title>
      <Text isChanging={isChanging}>{contentData}</Text>
      <SourceContainer>
        <Link href= {planetData.overview.source} target="_blank" rel="noreferrer">
          Wikipedia
        </Link>
      </SourceContainer>
    </Intro>
  );
}

export default IntroContainer;
