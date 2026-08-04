import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/UseAuth';

interface Props {
    children: React.ReactNode;
    requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin = false }: Props) {
    const { user, role, loading } = useAuth();

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', color: '#6b7280' }}>
                Vérification des autorisations...
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (requireAdmin && role !== 'admin') {
        return (
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h2 style={{ color: '#ef4444' }}>Accès Refusé</h2>
                <p>Tu n'as pas les droits d'administrateur nécessaires pour voir cette page.</p>
                <a href="/" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Retour à l'accueil</a>
            </div>
        );
    }

    return <>{children}</>;
}