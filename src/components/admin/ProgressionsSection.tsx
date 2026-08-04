import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { StyleRow, ProgressionRow } from '../../hooks/UseAdminData';
import { KEY_QUALITIES, type KeyQuality } from '../../config/MusicConstants';

interface Props {
  styles: StyleRow[];
  progressions: ProgressionRow[];
  onAdd: (prog: any) => void;
  onDelete: (id: string) => void;
}

export default function ProgressionsSection({ styles, progressions, onAdd, onDelete }: Props) {
  const { t } = useTranslation();
  const [progChords, setProgChords] = useState('');
  const [progReference, setProgReference] = useState('');
  const [progQuality, setProgQuality] = useState<KeyQuality>(KEY_QUALITIES[0]);
  const [progStyleId, setProgStyleId] = useState('');

  // Sélectionner le premier style par défaut quand ils sont chargés
  useEffect(() => {
    if (styles.length > 0 && !progStyleId) {
      setProgStyleId(styles[0].id);
    }
  }, [styles, progStyleId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!progChords.trim() || !progReference.trim() || !progStyleId) return;
    
    onAdd({
      style_id: progStyleId,
      chords: progChords.trim(),
      reference: progReference.trim(),
      key_quality: progQuality
    });
    
    setProgChords('');
    setProgReference('');
  };

  return (
    <section className="admin-card">
      {/* On utilise une variable dans la traduction pour afficher le nombre */}
      <h2>{t('admin.progressions.title', { count: progressions.length })}</h2>
      <form onSubmit={handleSubmit} className="admin-form vertical">
        <select value={progStyleId} onChange={(e) => setProgStyleId(e.target.value)} required>
          <option value="" disabled>{t('admin.progressions.choose_style')}</option>
          {styles.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <input 
          type="text" 
          placeholder={t('admin.progressions.chords_placeholder')} 
          value={progChords}
          onChange={(e) => setProgChords(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder={t('admin.progressions.ref_placeholder')} 
          value={progReference}
          onChange={(e) => setProgReference(e.target.value)}
          required
        />
        <select value={progQuality} onChange={(e) => setProgQuality(e.target.value as KeyQuality )}>
          {KEY_QUALITIES.map(q => <option key={q} value={q}>{q}</option>)}
        </select>
        <button type="submit" className="btn-add">{t('admin.progressions.add_btn')}</button>
      </form>
      <ul className="data-list progressions-list">
        {progressions.map(prog => (
          <li key={prog.id} className="data-item flex-col">
            <div className="prog-header">
              <span className="badge">{prog.styles?.name || t('admin.progressions.unknown_style')}</span>
              <button onClick={() => onDelete(prog.id)} className="btn-delete">❌</button>
            </div>
            <strong className="prog-chords">{prog.chords}</strong>
            <span className="prog-ref">{prog.reference} • {prog.key_quality}</span>
          </li>
        ))}
        {progressions.length === 0 && <li className="empty-text">{t('admin.progressions.empty')}</li>}
      </ul>
    </section>
  );
}