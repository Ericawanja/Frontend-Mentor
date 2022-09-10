import { Nav, List, Item, Link } from "./NavDesktopstyles";
import {planets} from '../data'

export const NavDesktop = ({pathName, activePlanet, onHover}) => {
  return (
    <Nav>
      <List>
        {planets.map(planet=>(
            <Item key={planet.id}>
                <Link
                to={planet.path}
                $bgcolor={planet.color}
                $isActive = {
                  planet.path ===pathName ||
                  planet.path ===activePlanet
                }
              
                >
                    {planet.name}
                </Link>

            </Item>
        ))}
      </List>
    </Nav>
  );
};
