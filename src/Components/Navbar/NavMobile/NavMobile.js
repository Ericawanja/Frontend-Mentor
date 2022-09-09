/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
import ToggleMenu from './ToggleMenu';
import { Nav, Menu, Bars, List } from './NavMobileStyles';
import {AnimatePresence } from 'framer-motion'
import ItemsMobile from './ItemsController';


function NavMobile({windowWidth}) {

   const [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ] = ToggleMenu();

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
            <AnimatePresence>
                {isOpen && (
                     <List
                     id="nav-list"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ ease: 'linear', duration: 0.3 }}
                     exit={{ opacity: 0 }}
                 >
                     <ItemsMobile restoreToDefault={restoreToDefault} />
                 </List>
                    
                )
                }
            </AnimatePresence>
    </Nav>
  )
}

export default NavMobile