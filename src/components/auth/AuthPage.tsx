import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { supabase } from '../../config/SupabaseClient';
import { useAuth } from '../../hooks/UseAuth';
import './AuthPage.css';

export default function AuthPage() {
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
                setErrorMsg("Vérifie tes emails pour confirmer ton compte ! S'il est confirmé, tu peux te connecter.");
                setIsLogin(true);
            }
        } catch (err: any) {
            let errorMessage = err.message || "Une erreur est survenue.";
            if (errorMessage === "{}" || errorMessage === "[object Object]") {
                errorMessage = "Erreur du serveur (500). L'envoi de l'email a probablement échoué.";
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
                    ← Retour
                </button>

                <h1 className="auth-title">
                    {isLogin ? 'Connexion' : 'Créer un compte'}
                </h1>

                <p className="auth-subtitle">
                    {isLogin ? 'Ravi de te revoir !' : 'Rejoins Practice Hub pour sauvegarder ta progression.'}
                </p>

                {errorMsg && (
                    <div className={`auth-banner ${errorMsg.includes('Vérifie tes emails') ? 'success' : 'error'}`}>
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="ton@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            minLength={6}
                        />
                    </div>

                    <button type="submit" className="auth-submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Chargement...' : (isLogin ? 'Se connecter' : "S'inscrire")}
                    </button>
                </form>

                <div className="auth-toggle">
                    <p>
                        {isLogin ? "Tu n'as pas de compte ?" : "Tu as déjà un compte ?"}
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setErrorMsg('');
                            }}
                            className="auth-toggle-btn"
                        >
                            {isLogin ? "S'inscrire" : "Se connecter"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}