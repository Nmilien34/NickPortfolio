import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { CardDetail } from './components/pages/CardDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<CardDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
