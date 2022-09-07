import { Text, SourceContainer, Title, Intro, Link } from "./IntroStyles";


function IntroContainer({planetData}) {
    console.log(planetData)
  return (
    <Intro>
        <Title>{planetData.name}</Title>
        <Text>{planetData.overview.content}</Text>
        <SourceContainer>
        <Link href={planetData}>Wikipedia</Link>

        </SourceContainer>
    </Intro>
  )
}

export default IntroContainer