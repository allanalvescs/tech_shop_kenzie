import './App.css';
import Logo from './components/Logo';
import NavPage from './components/NavPage';
import Routes from './Routes/routes';
import { Header } from './style/style';

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <NavPage />
      </Header>
      <Routes />
    </div>
  );
}

export default App;
