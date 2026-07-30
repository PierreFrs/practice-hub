import ChordProgressionsWorkout from './components/ChordProgressionsWorkout';
import LandingPage from './components/LandingPage';
import RhythmTreeWorkout from './components/RhythmTreeWorkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', backgroundColor: '#fafafa', width: '100%' }}>
          
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/workout/rhythm-tree" element={<RhythmTreeWorkout />} />
          <Route path="/workout/chord-progressions" element={<ChordProgressionsWorkout />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App
