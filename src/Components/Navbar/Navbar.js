// eslint-disable-next-line no-unused-vars
import { NavDesktop } from "./NavDesktop/NavDesktop";
import { Header, Logo, LogoLink, Container } from "./NavbarStyles";

export const Navbar =()=>{
    return(
        <Header>
            <Container>
                <Logo>
                    <LogoLink>The planets</LogoLink>
                    <NavDesktop/>
                </Logo>
            </Container>
        </Header>

    )
}