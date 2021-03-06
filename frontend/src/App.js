import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// Components
import NavBar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <NavBar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/products/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
