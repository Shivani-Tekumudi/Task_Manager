import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './components/layouts/header';
import KanBanBoard from './components/layouts/kanbanBoard';

function App() {
  return (
    <div className="App container-fluid px-lg-5">
  <Header />
  <KanBanBoard />
    </div>
  );
}

export default App;
