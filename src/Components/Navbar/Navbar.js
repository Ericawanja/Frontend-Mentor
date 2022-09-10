// eslint-disable-next-line no-unused-vars
import { NavDesktop } from "./NavDesktop/NavDesktop";
import { Header, Logo, LogoLink, Container } from "./NavbarStyles";
import { useEffect, useState } from "react";
import NavMobile from "./NavMobile/NavMobile";

export const Navbar = ({ pathName, activePlanet, onHover }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tabletBreakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.01, duration: 4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <Header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <Logo>
          <LogoLink to="/">The planets</LogoLink>
        </Logo>
        {windowWidth >= tabletBreakpoint ? (
          <NavDesktop
            pathName={pathName}
            onHover={onHover}
            activePlanet={activePlanet}
          />
        ) : (
          <NavMobile windowWidth={windowWidth} />
        )}
      </Container>
    </Header>
  );
};
