import { Nav, List, Item, Link } from "./NavDesktopstyles";
import {planets} from '../data'

export const NavDesktop = () => {
  return (
    <Nav>
      <List>
        {planets.map(planet=>(
            <Item key={planet.id}>
                <Link
                $bgcolor={planet.color}
                >
                    {planet.name}
                </Link>

            </Item>
        ))}
      </List>
    </Nav>
  );
};
