import Logo from './components/Logo';
import NavPage from './components/NavPage';
import Routes from './Routes/routes';

import { GlobalStyle } from './style/globalstyle';
import { Header } from './style/style';
import { Context } from './Context/AuthContext';

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get("https://kenzieshop.herokuapp.com/products")
      .then((resp) => setStore(resp.data));
  }, []);

  return (
    <Context.Provider value={{ store, setStore }}>
      
      <GlobalStyle />

      <Context.Provider value={{ activeMenu, setActiveMenu }}>
        <Header>
          <Logo />
          <NavPage />
        </Header>
      </Context.Provider>

      <Routes />
    </Context.Provider>
  );
}

export default App;
