import Logo from './components/Logo';
import NavPage from './components/NavPage';
import Routes from './Routes/routes';

import { GlobalStyle } from './style/globalstyle';
import { Header } from './style/style';
import { Context } from './Context/AuthContext';
import { useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <div>
      <GlobalStyle />
      <Context.Provider value={{ activeMenu, setActiveMenu }}>
        <Header>
          <Logo />
          <NavPage />
        </Header>
      </Context.Provider>
      <Routes />
    </div>
  );
}

export default App;
