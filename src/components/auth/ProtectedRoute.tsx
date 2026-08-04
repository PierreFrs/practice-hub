import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/UseAuth';

interface Props {
    children: React.ReactNode;
    requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin = false }: Props) {
    const { t } = useTranslation();
    const { user, role, loading } = useAuth();

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', color: '#6b7280' }}>
                {t('protected.checking')}
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (requireAdmin && role !== 'admin') {
        return (
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h2 style={{ color: '#ef4444' }}>{t('protected.access_denied_title')}</h2>
                <p>{t('protected.access_denied_message')}</p>
                <a href="/" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
                    {t('protected.back_home')}
                </a>
            </div>
        );
    }

    return <>{children}</>;
}