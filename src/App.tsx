import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wallet from './pages/Wallet';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
