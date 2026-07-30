import type { WorkoutModule } from '../config/Types';
import './WorkoutCard.css'; // Import the CSS

interface Props {
  workout: WorkoutModule;
  onSelect: (id: string) => void;
}

export default function WorkoutCard({ workout, onSelect }: Props) {
  return (
    <button
      onClick={() => !workout.disabled && onSelect(workout.id)}
      disabled={workout.disabled}
      className={`workout-card ${workout.disabled ? 'disabled' : ''}`}
    >
      <span className="card-icon">{workout.icon}</span>
      <h2 className="card-title">{workout.title}</h2>
      <p className="card-description">{workout.description}</p>
    </button>
  );
}