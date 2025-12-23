import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LenisProvider } from './components/providers/LenisProvider';
import { HomePage } from './components/pages/HomePage';
import { CardDetail } from './components/pages/CardDetail';
import { ProjectDetail } from './components/pages/ProjectDetail';
import { About } from './components/pages/About';
import { Learnings } from './components/pages/Learnings';

function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/learnings" element={<Learnings />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/:slug" element={<CardDetail />} />
          </Routes>
        </div>
      </LenisProvider>
    </BrowserRouter>
  );
}

export default App;
