import { useState } from "react";

function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitionend, setIsTransitionend] = useState(true);
  let transitionDuration = 1000;
  let tabletBreakpoint = 768;

  const handleToggle = () => {
    !isOpen ? showMenu() : closeMenu();
  };

  const showMenu = () => {
    setIsOpen(true);
    setIsTransitionend(false);
    setIsExpanded(true);
    setTimeout(() => {
      setIsTransitionend(true);
    }, transitionDuration);
  };

  const closeMenu = () => {
    setIsTransitionend(false);
    setIsOpen(false);
    setIsExpanded(false);
    setTimeout(() => {
      setIsTransitionend(true);
    }, transitionDuration);
  };

  const restoreToDefault = () => {
    setIsOpen(false);
    setIsExpanded(false);
    setIsTransitionend(true);
  };

  return [handleToggle, restoreToDefault, isOpen, isExpanded, tabletBreakpoint];
}

export default ToggleMenu;
