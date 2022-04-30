import Logo from './components/Logo';
import NavPage from './components/NavPage';
import Routes from './Routes/routes';
import { GlobalStyle } from './style/globalstyle';
import { Header } from './style/style';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header>
        <Logo />
        <NavPage />
      </Header>
      <Routes />
    </div>
  );
}

export default App;
