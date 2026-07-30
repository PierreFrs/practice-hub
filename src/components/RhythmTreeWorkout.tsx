import { useNavigate } from 'react-router-dom';
import { useWorkoutGenerator } from '../hooks/RhythmTreeWorkoutGenerator';
import './RhythmTreeWorkout.css'; // Import the new CSS file

export default function RhythmTreeWorkout() {
  const navigate = useNavigate();
  const { workout, generateWorkout } = useWorkoutGenerator();

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
          <h1 className="workout-title">🎸 Rhythm Tree</h1>
          <p className="workout-description">
            Génère un workout d'improvisation sous contrainte rythmique (32 mesures).
          </p>
          
          <button 
            onClick={generateWorkout}
            className="generate-button"
          >
            {workout ? 'Générer un autre workout' : 'Démarrer un workout'}
          </button>
        </header>

        {workout && (
          <main className="workout-main">
            <div className="summary-section">
              <h2 className="summary-title">
                {workout.root} {workout.scale}
              </h2>
              
              <div className="style-badge">
                {workout.style}
              </div>

              <p className="progression-text">
                <strong>Progression :</strong> <span className="progression-highlight">{workout.progression}</span>
              </p>
            </div>

            <div className="phrase-grid">
              {Array.from({ length: workout.measures.length / 4 }).map((_, blockIndex) => {
                const rhythmA = workout.measures[blockIndex * 4];
                const rhythmB = workout.measures[blockIndex * 4 + 1];
                const startMeasure = (blockIndex * 4) + 1;
                const endMeasure = startMeasure + 3;

                return (
                  <div key={blockIndex} className="phrase-card">
                    <div className="measure-badge">
                      Mesures {startMeasure}-{endMeasure}
                    </div>

                    <div className="rhythm-display-area">
                      <div className="rhythm-group">
                        <div className="rhythm-item">
                          <strong className="rhythm-notation">{rhythmA.notation}</strong>
                          <span className="rhythm-name">{rhythmA.name}</span>
                        </div>
                        
                        <span className="rhythm-separator">puis</span>
                        
                        <div className="rhythm-item">
                          <strong className="rhythm-notation">{rhythmB.notation}</strong>
                          <span className="rhythm-name">{rhythmB.name}</span>
                        </div>
                      </div>
                      
                      <div className="repeat-indicator">×2</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}