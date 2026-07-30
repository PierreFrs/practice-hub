import { useNavigate } from 'react-router-dom';
import { useChordWorkoutGenerator } from '../hooks/ChordProgressionsWorkoutGenerator';
import { STYLES } from '../config/ChordProgressionsDataSource';
import './ChordProgressionsWorkout.css';

export default function ChordProgressionsWorkout() {
  const navigate = useNavigate();
  const { workout, activeStyle, generateWorkout } = useChordWorkoutGenerator();

  return (
    <div className="workout-page-container">
      <div className="workout-content-wrapper">
        <button 
          onClick={() => navigate('/')}
          className="back-button"
        >
          ← Retour aux exercices
        </button>

        <header className="workout-header">
          <h1 className="workout-title">🎹 Style Progressions</h1>
          <p className="workout-description">
            Choisis un style pour générer une progression d'accords dans une tonalité aléatoire.
          </p>
          
          <div className="style-selector">
            {STYLES.map(style => (
              <button
                key={style}
                onClick={() => generateWorkout(style)}
                className={`style-button ${activeStyle === style ? 'active' : ''}`}
              >
                {style}
              </button>
            ))}
          </div>
        </header>

        {workout ? (
          <main className="chord-workout-main">
            <div className="key-display">
              <span className="key-root">{workout.root}</span>
              <span className="key-quality">{workout.keyQuality}</span>
            </div>

            <div className="progression-display">
              {workout.chords}
            </div>

            <div className="reference-track">
              <span className="reference-icon">🎧</span>
              <div className="reference-info">
                <span className="reference-label">Référence du style :</span>
                <span className="reference-name">{workout.reference}</span>
              </div>
            </div>
            
            <div className="workout-instructions">
              <p><strong>Objectif :</strong> Joue cette progression dans la tonalité indiquée. Essaie de repérer les degrés sur ton manche plutôt que de penser au nom des accords.</p>
            </div>
          </main>
        ) : (
          <div className="empty-state">
            👆 Sélectionne un style ci-dessus pour commencer.
          </div>
        )}
      </div>
    </div>
  );
}