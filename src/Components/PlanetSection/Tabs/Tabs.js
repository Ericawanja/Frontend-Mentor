import { Tab, Tabs } from "./TabsStyles";

function TabsContainer({ planetData, handleClick, currentData, windowWidth}) {
  //console.log(currentData)
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

  return (
    <Tabs
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Tab
        planetData={planetData}
        data-type="overview"
        onClick={handleClick}
        isActive={currentData === "overview" ? true : false}
      >
        Overview
      </Tab>
      <Tab
        data-type="structure"
        planetData={planetData}
        onClick={handleClick}
        isActive={currentData === "structure" ? true : false}
      >
        {windowWidth >= 768 ? "Internal" : ""} Structure
      </Tab>
      <Tab
        data-type="geology"
        planetData={planetData}
        onClick={handleClick}
        isActive={currentData === "geology" ? true : false}
      >
        Surface {windowWidth >= 768 ? "Geology" : ""}
      </Tab>
    </Tabs>
  );
}

export default TabsContainer;
