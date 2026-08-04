import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { WORKOUTS } from "../config/WorkoutCatalogue";
import WorkoutCard from "./WorkoutCard";
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();
  // Initialisation du hook de traduction
  const { t } = useTranslation();

  return (
    <div className="landing-container">
      
      <header className="landing-header">
        {/* Remplacement des textes en dur par les clés de traduction */}
        <h1 className="landing-title">{t('landing.title')}</h1>
        <p className="landing-description">
          {t('landing.subtitle')}
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