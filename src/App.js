import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BakeryItems from "./components/BakeryItems";
import Header from "./components/Header";
import FixedBottomBar from "./components/FixedBottomBar";
import { BAKERY_ITEMS } from "./constants";
import "./App.css";

function App() {
  const [showCheckoutBar, setShowCheckoutBar] = useState(false);

  function handleToggleCheckoutBar(showBar) {
    setShowCheckoutBar(showBar);
  }

  return (
    <div className={"bakery-app"}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BakeryItems
                  onHandleToggleCheckoutBar={handleToggleCheckoutBar}
                  className={"bakery-items-container"}
                  items={BAKERY_ITEMS}
                />
                {showCheckoutBar ? <FixedBottomBar /> : null}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
