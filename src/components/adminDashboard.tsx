import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAdminData } from '../hooks/UseAdminData';
import StylesSection from './admin/StylesSection';
import ProgressionsSection from './admin/ProgressionsSection';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // On récupère toutes les données et méthodes depuis le Hook personnalisé
  const { 
    styles, progressions, loading, errorMsg, 
    addStyle, deleteStyle, addProgression, deleteProgression 
  } = useAdminData();

  return (
    <div className="admin-container">
      <header className="admin-header">
        <button onClick={() => navigate('/')} className="back-link">
          {t('admin.back_link')}
        </button>
        <h1>{t('admin.title')}</h1>
        <p>{t('admin.subtitle')}</p>
      </header>

      {errorMsg && (
        <div className="error-banner">
          ⚠️ {errorMsg}
        </div>
      )}

      {loading ? (
        <div className="loading-state">{t('admin.loading')}</div>
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
