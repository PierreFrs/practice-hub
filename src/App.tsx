import AdminDashboard from './components/adminDashboard';
import ChordProgressionsWorkout from './components/chordProgressionsWorkout';
import LandingPage from './components/landingPage';
import RhythmTreeWorkout from './components/rhythmTreeWorkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', backgroundColor: '#fafafa', width: '100%' }}>
          
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/workout/rhythm-tree" element={<RhythmTreeWorkout />} />
          <Route path="/workout/chord-progressions" element={<ChordProgressionsWorkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App
