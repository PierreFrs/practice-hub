import { useNavigate } from 'react-router-dom';
import { useWorkoutGenerator } from '../hooks/RhythmTreeWorkoutGenerator';

export default function RhythmTreeWorkout() {
  const navigate = useNavigate();
  const { workout, generateWorkout } = useWorkoutGenerator();

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Bouton pour revenir à la page d'accueil */}
      <button 
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: 'none',
          color: '#4f46e5',
          cursor: 'pointer',
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0',
          marginBottom: '2rem'
        }}
      >
        ← Retour aux exercices
      </button>

      <header style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', color: '#111827' }}>🎸 Rhythm Tree</h1>
        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Génère un workout d'improvisation sous contrainte rythmique (32 mesures).</p>
        
        <button 
          onClick={generateWorkout}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '1.5rem',
            fontWeight: '600',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
        >
          {workout ? 'Générer un autre workout' : 'Démarrer un workout'}
        </button>
      </header>

      {workout && (
        <main style={{ width: '100%', maxWidth: '1200px' }}>
          {/* Section Résumé (Gamme et Progression) */}
          <div style={{ 
            backgroundColor: '#f3f4f6', 
            padding: '1.5rem 0', 
            borderRadius: '12px', 
            marginBottom: '2rem',
            textAlign: 'center',
            border: '1px solid #e5e7eb',
            width: '100%'
          }}>
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem', color: '#111827' }}>
              {workout.root} {workout.scale}
            </h2>
            
            {/* Nouveau Badge de Style */}
            <div style={{ 
              display: 'inline-block', 
              backgroundColor: '#e0e7ff', 
              color: '#4338ca', 
              padding: '6px 16px', 
              borderRadius: '9999px', 
              fontSize: '0.9rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              {workout.style}
            </div>

            <p style={{ margin: 0, fontSize: '1.25rem', color: '#4b5563' }}>
              <strong>Progression :</strong> <span style={{ color: '#4f46e5', fontWeight: 'bold' }}>{workout.progression}</span>
            </p>
          </div>

          {/* Grille des Phrases (8 blocs de 4 mesures) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '16px',
            justifyContent: 'center'
          }}>
            {}
            {Array.from({ length: workout.measures.length / 4 }).map((_, blockIndex) => {
              // Extract the two distinct rhythms from this 4-measure block
              const rhythmA = workout.measures[blockIndex * 4];
              const rhythmB = workout.measures[blockIndex * 4 + 1];
              const startMeasure = (blockIndex * 4) + 1;
              const endMeasure = startMeasure + 3;

              return (
                <div 
                  key={blockIndex} 
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Petit badge pour indiquer les mesures concernées */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#f3f4f6',
                    padding: '4px 0',
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Mesures {startMeasure}-{endMeasure}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', width: '100%', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                      <strong style={{ fontSize: '1.5rem', color: '#1f2937' }}>{rhythmA.notation}</strong>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>{rhythmA.name}</span>
                    </div>
                    
                    <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>puis</span>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                      <strong style={{ fontSize: '1.5rem', color: '#1f2937' }}>{rhythmB.notation}</strong>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>{rhythmB.name}</span>
                    </div>
                  </div>
                    
                    {/* Indicateur de répétition x2 */}
                    <div style={{
                      backgroundColor: '#e0e7ff',
                      color: '#4338ca',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
                    }}>
                      ×2
                    </div>
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