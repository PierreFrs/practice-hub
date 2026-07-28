import { useNavigate } from "react-router-dom";
import { WORKOUTS } from "../config/WorkoutCatalogue";
import WorkoutCard from "./WorkoutCard";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', color: '#111827' }}>
          Practice Hub
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
          Choisissez votre module d'entraînement. Développez votre vocabulaire musical, 
          votre technique et votre sens du rythme.
        </p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {WORKOUTS.map((workout) => (
          <WorkoutCard 
            key={workout.id} 
            workout={workout} 
            onSelect={(id) => navigate(`/workout/${id}`)} 
          />
        ))}
      </div>
    </div>
  );
}