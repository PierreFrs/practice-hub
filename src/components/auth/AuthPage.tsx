import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import de i18n
import { supabase } from '../../config/SupabaseClient';
import { useAuth } from '../../hooks/UseAuth';
import './AuthPage.css';

export default function AuthPage() {
    const { t } = useTranslation(); // Initialisation du hook de traduction
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();
    const { user, loading } = useAuth();

    if (!loading && user) {
        return <Navigate to="/" replace />;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        setIsSubmitting(true);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                navigate('/');
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                // Utilisation de la traduction pour le message de succès
                setErrorMsg(t('auth.verify_email'));
                setIsLogin(true);
            }
        } catch (err: any) {
            // Utilisation des traductions pour les messages d'erreur
            let errorMessage = err.message || t('auth.default_error');
            if (errorMessage === "{}" || errorMessage === "[object Object]") {
                errorMessage = t('auth.server_error');
            }
            setErrorMsg(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <button onClick={() => navigate('/')} className="auth-back-link">
                    {t('back')}
                </button>

                <h1 className="auth-title">
                    {isLogin ? t('auth.login_title') : t('auth.signup_title')}
                </h1>

                <p className="auth-subtitle">
                    {isLogin ? t('auth.login_subtitle') : t('auth.signup_subtitle')}
                </p>

                {errorMsg && (
                    // La vérification de la classe 'success' se fait maintenant sur la traduction exacte
                    <div className={`auth-banner ${errorMsg === t('auth.verify_email') ? 'success' : 'error'}`}>
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">{t('auth.email_label')}</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder={t('auth.email_placeholder')}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">{t('auth.password_label')}</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder={t('auth.password_placeholder')}
                            minLength={6}
                        />
                    </div>

                    <button type="submit" className="auth-submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? t('loading') : (isLogin ? t('auth.btn_login') : t('auth.btn_signup'))}
                    </button>
                </form>

                <div className="auth-toggle">
                    <p>
                        {isLogin ? t('auth.no_account') : t('auth.has_account')}
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setErrorMsg('');
                            }}
                            className="auth-toggle-btn"
                        >
                            {isLogin ? t('auth.btn_signup') : t('auth.btn_login')}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}