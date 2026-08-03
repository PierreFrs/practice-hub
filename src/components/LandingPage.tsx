import { useNavigate } from "react-router-dom";
import { WORKOUTS } from "../config/workoutCatalogue";
import WorkoutCard from "./workoutCard";
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      
      <header className="landing-header">
        <h1 className="landing-title">Practice Hub</h1>
        <p className="landing-description">
          Choisissez votre module d'entraînement. Développez votre vocabulaire musical, 
          votre technique et votre sens du rythme.
        </p>
      </header>

      <div className="workout-grid">
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