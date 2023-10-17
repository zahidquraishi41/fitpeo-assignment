import './App.css';
import RSidebar from './components/Rsidebar/RSidebar';
import Homepage from './pages/Homepage/Homepage';
import { SidebarProvider } from './components/SidebarContext';

const App = () => {
  return <SidebarProvider>
    <div className="App">
      <RSidebar />
      <Homepage />
    </div>
  </SidebarProvider>

};

export default App;
