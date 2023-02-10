import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BakeryItems from "./components/BakeryItems";
import Header from "./components/Header";
import FixedBottomBar from "./components/FixedBottomBar";
import CheckoutList from "./components/CheckoutList";
import { BAKERY_ITEMS } from "./constants";
import "./App.css";

function App() {
  const [showCheckoutBar, setShowCheckoutBar] = useState(false);
  const navigate = useNavigate();

  function handleToggleCheckoutBar(showBar) {
    setShowCheckoutBar(showBar);
  }

  function handleNavigateToCheckout() {
    navigate("/checkout");
  }

  function handleNavigateToMenu() {
    navigate("/");
  }

  return (
    <div className={"bakery-app"}>
      <Header />
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
              {showCheckoutBar ? (
                <FixedBottomBar onClick={handleNavigateToCheckout} />
              ) : null}
            </>
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutList onClickBackToMenu={handleNavigateToMenu} />}
        />
      </Routes>
    </div>
  );
}

export default App;
