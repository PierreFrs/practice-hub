import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useChordWorkoutGenerator } from '../hooks/UseChordWorkoutGenerator';
import './ChordProgressionsWorkout.css';

export default function ChordProgressionsWorkout() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { workout, activeStyle, generateWorkout, dbStyles, loading, errorMsg } = useChordWorkoutGenerator();

  return (
    <div className="workout-page-container">
      <div className="workout-content-wrapper">
        <button 
          onClick={() => navigate('/')}
          className="back-button"
        >
          {t('chord_workout.back_button')}
        </button>

        <header className="workout-header">
          <h1 className="workout-title">{t('chord_workout.title')}</h1>
          <p className="workout-description">
            {t('chord_workout.description')}
          </p>
          
          {loading && <p style={{ color: '#6b7280', marginTop: '1rem' }}>{t('chord_workout.loading_styles')}</p>}
          {errorMsg && <p style={{ color: '#ef4444', marginTop: '1rem' }}>{t('chord_workout.error_prefix')} {errorMsg}</p>}

          {!loading && !errorMsg && (
            <div className="style-selector">
              {dbStyles.map(style => (
                <button
                  key={style.id}
                  onClick={() => generateWorkout(style.id, style.name)}
                  className={`style-button ${activeStyle === style.id ? 'active' : ''}`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          )}
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
                <span className="reference-label">{t('chord_workout.reference_label')}</span>
                <span className="reference-name">{workout.reference}</span>
              </div>
            </div>
            
            <div className="workout-instructions">
              <p><strong>{t('chord_workout.objective_label')}</strong> {t('chord_workout.objective_text')}</p>
            </div>
          </main>
        ) : (
          <div className="empty-state">
            {t('chord_workout.empty_state')}
          </div>
        )}
      </div>
    </div>
  );
}