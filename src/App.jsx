import { Routes, Route } from 'react-router-dom';

import CalculatorPage from './components/pages/CalculatorPage';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import Header from './components/UI/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
