import "./drawer.css";
import React, { useState } from "react";

const LeftDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`left-drawer ${isOpen ? "open" : "drawer"}`}>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      {isOpen && <div>Drawer Content</div>}
    </div>
  );
};

export default LeftDrawer;
