import { Illustration, Image } from "./IllustrationStyles";




function IllustrationContainer({planetData, isChanging}) {
  return (
    <Illustration>
        
        <Image image={planetData.overview.image}/>
    </Illustration>
  )
}

export default IllustrationContainer;