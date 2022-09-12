import { useState, useEffect } from "react";

import { Illustration, Image } from "./IllustrationStyles";

function IllustrationContainer({ planetData, isChanging, currentData }) {
  

  const [imageUrl, setImageUrl] = useState("");
  
  

  useEffect(() => {
    const checkImageUrl = (planetData, currentData) => {
      if (currentData === "overview") {
        setImageUrl(planetData.overview.image);
      } else if (currentData === "structure") {
        setImageUrl(planetData.structure.image);
      } else {
        setImageUrl(planetData.geology.image);
      }
    };
    checkImageUrl(planetData, currentData);
  }, [planetData, currentData]);

 /* useEffect(() => {
    const checkGeUrl = (planetData, currentData) => {
      if (currentData === "geology") {
        let url = planetData.overview.geo ? planetData.overview.geo : " ";
        setGeoUrl(url);
      }
    };
    checkGeUrl(planetData, currentData)
  }, [planetData, currentData]);*/

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: "20deg",
      x: 200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: { delay: 1, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: "-20deg",
      x: -200,
      transition: { duration: 1 },
    },
  };

  return (
    <Illustration
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Image
        image={imageUrl}
       geo={(currentData === 'geology') ? planetData.geology.geo : false}
        desktopImgWidth={planetData.desktopImgWidth}
        tabletImgWidth={planetData.tabletImgWidth}
        mobileImgWidth={planetData.mobileImgWidth}
        isChanging={isChanging ? true : false}
      />
    </Illustration>
  );
}

export default IllustrationContainer;
