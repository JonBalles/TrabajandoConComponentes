import './App.css';
import { ContentWrapper } from './components/ContentWrapper';
import { SideBar } from "./components/Sidebar";



function App() {
  return (
    <div className="App">
      <div id="wrapper">
     <SideBar />
     <ContentWrapper />
    </div>
    </div>
  );
}

export default App;
