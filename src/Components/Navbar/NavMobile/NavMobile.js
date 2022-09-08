/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
import useToggleMenu from '../useToggleMenu';
import { Nav, Menu, Bars, List } from './NavMobileStyles';



function NavMobile({windowWidth}) {

    const [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ] = useToggleMenu;

    useEffect(()=>{
        windowWidth >= tabletBreakpoint ? restoreToDefault(): '';
    }, [windowWidth])

  return (
    <Nav>
        <Menu
                aria-label="Menu toggle"
                aria-expanded={isExpanded}
                aria-controls="nav-list"
                onClick={handleToggle}
            >
                <Bars isOpen={isOpen} />
            </Menu>
    </Nav>
  )
}

export default NavMobile