import { Nav, List, Item } from "./NavDesktopstyles";
import {planets} from '../data'

export const NavDesktop = () => {
  return (
    <Nav>
      <List>
        {planets.map(planet=>(
            <Item key={planet.id}>
                <div>
                    {planet.name}
                </div>

            </Item>
        ))}
      </List>
    </Nav>
  );
};
