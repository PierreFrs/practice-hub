import AdminDashboard from './components/AdminDashboard';
import AuthPage from './components/auth/AuthPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ChordProgressionsWorkout from './components/ChordProgressionsWorkout';
import LandingPage from './components/LandingPage';
import RhythmTreeWorkout from './components/RhythmTreeWorkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', backgroundColor: '#fafafa', width: '100%' }}>
        <Routes>
          {/* Routes publiques */}
          <Route path="/login" element={<AuthPage />} />

          {/* Routes privées : Réservées aux membres connectés */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/workout/rhythm-tree"
            element={
              <ProtectedRoute>
                <RhythmTreeWorkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/workout/chord-progressions"
            element={
              <ProtectedRoute>
                <ChordProgressionsWorkout />
              </ProtectedRoute>
            }
          />

          {/* Route Super-Privée : Réservée aux administrateurs */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App
