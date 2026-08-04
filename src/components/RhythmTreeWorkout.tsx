import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRhythmTreeWorkoutGenerator } from '../hooks/UseRhythmTreeWorkoutGenerator';
import './RhythmTreeWorkout.css';

export default function RhythmTreeWorkout() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { workout, generateWorkout } = useRhythmTreeWorkoutGenerator();

  return (
    <div className="workout-page-container">
      <div className="workout-content-wrapper">
        <button 
          onClick={() => navigate('/')}
          className="back-button"
        >
          {t('rhythm_tree.back_button')}
        </button>

        <header className="workout-header">
          <h1 className="workout-title">{t('rhythm_tree.title')}</h1>
          <p className="workout-description">
            {t('rhythm_tree.description')}
          </p>
          
          <button 
            onClick={generateWorkout}
            className="generate-button"
          >
            {workout ? t('rhythm_tree.generate_new') : t('rhythm_tree.generate_start')}
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
                <strong>{t('rhythm_tree.progression_label')}</strong> <span className="progression-highlight">{workout.progression}</span>
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
                      {/* Utilisation de l'interpolation pour injecter les variables dynamiques */}
                      {t('rhythm_tree.measures', { start: startMeasure, end: endMeasure })}
                    </div>

                    <div className="rhythm-display-area">
                      <div className="rhythm-group">
                        <div className="rhythm-item">
                          <strong className="rhythm-notation">{rhythmA.notation}</strong>
                          <span className="rhythm-name">{rhythmA.name}</span>
                        </div>
                        
                        <span className="rhythm-separator">{t('rhythm_tree.then')}</span>
                        
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