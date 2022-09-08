import { useState } from "react";

const useToggleMenu =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitioned, setIsTransitioned] = useState(true);

    let transitionDuration = 1000;
    let tabletBreakpoint =768;

    const handleToggle = ()=>{
        if (!isTransitioned) return false;
        !isOpen ? showMenu() : closeMenu();
    };
    

    const showMenu = () => {
        setIsOpen(true);
        setIsTransitioned(false);
        setIsExpanded(true);

        setTimeout(() => {
            setIsTransitioned(true);
        }, transitionDuration);
    };
    
    const closeMenu = () => {
        setIsTransitioned(false);
        setIsOpen(false);
        setIsExpanded(false);

        setTimeout(() => {
            setIsTransitioned(true);
        }, transitionDuration);
    };

    const restoreToDefault = () =>{
        setIsOpen(false);
        setIsOpen(false);
        setIsExpanded(false);
        setIsTransitioned(true)
    }

    return [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,

    ]

}

export default useToggleMenu;