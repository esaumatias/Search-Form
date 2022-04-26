import Rotas from './router/Router';
import AppProvider from './context/AppProvider';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Rotas />
    </AppProvider>
  );
}

export default App;
