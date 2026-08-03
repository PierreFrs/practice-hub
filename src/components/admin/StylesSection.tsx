import { useState } from 'react';
import type { StyleRow } from '../../hooks/UseAdminData';

interface Props {
  styles: StyleRow[];
  onAdd: (name: string) => void;
  onDelete: (id: string) => void;
}

export default function StylesSection({ styles, onAdd, onDelete }: Props) {
  const [newStyleName, setNewStyleName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStyleName.trim()) return;
    onAdd(newStyleName.trim());
    setNewStyleName('');
  };

  return (
    <section className="admin-card">
      <h2>Styles ({styles.length})</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input 
          type="text" 
          placeholder="Nouveau style (ex: Bossa Nova)" 
          value={newStyleName}
          onChange={(e) => setNewStyleName(e.target.value)}
          required
        />
        <button type="submit" className="btn-add">+ Ajouter</button>
      </form>
      <ul className="data-list">
        {styles.map(style => (
          <li key={style.id} className="data-item">
            <span>{style.name}</span>
            <button onClick={() => onDelete(style.id)} className="btn-delete">❌</button>
          </li>
        ))}
        {styles.length === 0 && <li className="empty-text">Aucun style trouvé.</li>}
      </ul>
    </section>
  );
}