import Logo from './components/Logo';
import NavPage from './components/NavPage';
import Routes from './Routes/routes';

import { GlobalStyle } from './style/globalstyle';
import { Container, Header } from './style/style';
import { Context } from './Context/AuthContext';

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  const [store, setStore] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    axios
      .get("https://kenzieshop.herokuapp.com/products")
      .then((resp) => setStore(resp.data));

    setLoading(false)
  }, []);

  return (
    <Context.Provider
      value={
        { store, setStore, filterProducts, setFilterProducts, loading, currentSale, setCurrentSale }
      }>
      <Container>

        <GlobalStyle />

        <Context.Provider value={{ activeMenu, setActiveMenu }}>
          <Header>
            <Logo />
            <NavPage />
          </Header>
        </Context.Provider>
        
        <Routes />
      </Container>
    </Context.Provider>
  );
}

export default App;
