import type { WorkoutModule } from '../config/Types';
import { useTranslation } from 'react-i18next'; // 1. Import du hook
import './WorkoutCard.css';

interface Props {
  workout: WorkoutModule;
  onSelect: (id: string) => void;
}

export default function WorkoutCard({ workout, onSelect }: Props) {
  const { t } = useTranslation(); // 2. Initialisation

  return (
    <button
      onClick={() => !workout.disabled && onSelect(workout.id)}
      disabled={workout.disabled}
      className={`workout-card ${workout.disabled ? 'disabled' : ''}`}
    >
      <span className="card-icon">{workout.icon}</span>
      {/* 3. Traduction des propriétés dynamiques */}
      <h2 className="card-title">{t(workout.title)}</h2>
      <p className="card-description">{t(workout.description)}</p>
    </button>
  );
}