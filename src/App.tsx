import LandingPage from './components/LandingPage';
import RhythmTreeWorkout from './components/RhythmTreeWorkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', backgroundColor: '#fafafa', width: '100%' }}>
          
        {/* Le composant Routes décide quel composant afficher en fonction de l'URL */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/workout/:workoutId" element={<RhythmTreeWorkout />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App
