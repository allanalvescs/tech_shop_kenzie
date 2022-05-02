import Logo from './components/Logo';
import NavPage from './components/NavPage';
import Routes from './Routes/routes';

import { GlobalStyle } from './style/globalstyle';
import { Container, Header } from './style/style';
import { Context } from './Context/AuthContext';

import { useEffect, useState } from "react";
import axios from "axios";
import NavProducts from './components/NavProducts';

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  const [store, setStore] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://kenzieshop.herokuapp.com/products")
      .then((resp) => setStore(resp.data));
  }, []);
  console.log(store)
  return (
    <Context.Provider value={{ store, setStore, filterProducts, setFilterProducts, activeMenu, setActiveMenu }}>
      <Container>

        <GlobalStyle />

        <Header>
          <Logo />
          <NavPage />
        </Header>
        <Routes />
      </Container>
    </Context.Provider>
  );
}

export default App;
