import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { CardDetail } from './components/pages/CardDetail';
import { ProjectDetail } from './components/pages/ProjectDetail';
import { About } from './components/pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/:slug" element={<CardDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
