// eslint-disable-next-line no-unused-vars
import { NavDesktop } from "./NavDesktop/NavDesktop";
import { Header, Logo, LogoLink, Container } from "./NavbarStyles";
import { useEffect, useState } from "react";
import NavMobile from "./NavMobile/NavMobile";

export const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tabletBreakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);
  return (
    <Header>
      <Container>
        <Logo>
          <LogoLink>The planets</LogoLink>
        </Logo>
        {
            windowWidth >= tabletBreakpoint ? (
                <NavDesktop />
            ) :(
                <NavMobile windowWidth= {windowWidth}/>
            )
        }
      </Container>
    </Header>
  );
};
