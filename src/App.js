import BakeryItems from "./components/BakeryItems";
import Header from "./components/Header";
import { BAKERY_ITEMS } from "./constants";
import "./App.css";

function App() {
  return (
    <div className={"bakery-app"}>
      <Header />
      <BakeryItems className={"bakery-items-container"} items={BAKERY_ITEMS} />
    </div>
  );
}

export default App;
