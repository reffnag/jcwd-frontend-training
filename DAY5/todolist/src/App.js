import logo from './logo.svg';
import './App.css';
import PageTemplate from './pages/template';
import { Routes, Route } from "react-router-dom"
import PageTokoBuah from './pages/tokobuah';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate/>}></Route>
      <Route path="/tokobuah" element={<PageTokoBuah/>}></Route>
    </Routes>

  );
}

export default App;
