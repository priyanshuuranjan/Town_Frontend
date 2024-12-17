import  Navbar  from './pages/Navbar';
import Home from './pages/Home';
import SellerDashboard from './components/SellerDashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './pages/Card';



function App() {
  return (
    <div className="App">
      <Navbar/>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/card' element={<Card/>}/>
      <Route path='SellerDashboard' element={<SellerDashboard/>}/>
    </Routes>
    </Router>
     
    </div>
  );
}

export default App;
