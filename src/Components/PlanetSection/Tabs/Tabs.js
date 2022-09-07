import { Tab, Tabs } from "./TabsStyles";


function TabsContainer({planetData}) {
  return (
    <Tabs>
        <Tab planetData={planetData}isActive='true'>Overview</Tab>
        <Tab planetData={planetData}isActive='' >Structure</Tab>
        <Tab planetData={planetData}isActive=''>Surface</Tab>
    </Tabs>
  )
}

export default TabsContainer; 