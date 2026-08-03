import { useNavigate } from 'react-router-dom';
import { useAdminData } from '../hooks/UseAdminData';
import StylesSection from './admin/StylesSection';
import ProgressionsSection from './admin/ProgressionsSection';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  
  // On récupère toutes les données et méthodes depuis le Hook personnalisé
  const { 
    styles, progressions, loading, errorMsg, 
    addStyle, deleteStyle, addProgression, deleteProgression 
  } = useAdminData();

  return (
    <div className="admin-container">
      <header className="admin-header">
        <button onClick={() => navigate('/')} className="back-link">
          ← Retour au site
        </button>
        <h1>🛠️ Back Office</h1>
        <p>Gère les données de ton application Supabase en direct.</p>
      </header>

      {errorMsg && (
        <div className="error-banner">
          ⚠️ {errorMsg}
        </div>
      )}

      {loading ? (
        <div className="loading-state">Chargement des données...</div>
      ) : (
        <div className="admin-grid">
          <StylesSection 
            styles={styles} 
            onAdd={addStyle} 
            onDelete={deleteStyle} 
          />
          <ProgressionsSection 
            styles={styles} 
            progressions={progressions} 
            onAdd={addProgression} 
            onDelete={deleteProgression} 
          />
        </div>
      )}
    </div>
  );
}