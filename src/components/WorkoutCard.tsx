import type { WorkoutModule } from '../config/Types';

interface Props {
  workout: WorkoutModule;
  onSelect: (id: string) => void;
}

export default function WorkoutCard({ workout, onSelect }: Props) {
  return (
    <button
      onClick={() => !workout.disabled && onSelect(workout.id)}
      disabled={workout.disabled}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '2rem',
        backgroundColor: workout.disabled ? '#f9fafb' : '#ffffff',
        border: `1px solid ${workout.disabled ? '#e5e7eb' : '#d1d5db'}`,
        borderRadius: '12px',
        cursor: workout.disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: workout.disabled ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        opacity: workout.disabled ? 0.6 : 1,
        textAlign: 'left'
      }}
      onMouseEnter={(e) => {
        if (!workout.disabled) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        }
      }}
      onMouseLeave={(e) => {
        if (!workout.disabled) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }
      }}
    >
      <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{workout.icon}</span>
      <h2 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: '#111827' }}>
        {workout.title}
      </h2>
      <p style={{ margin: 0, color: '#6b7280', lineHeight: 1.5 }}>
        {workout.description}
      </p>
    </button>
  );
}