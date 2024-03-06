import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // console.log(itemData)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode) 
  }

  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
