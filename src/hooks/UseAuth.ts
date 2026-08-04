import { useState, useEffect } from 'react';
import { supabase } from '../config/SupabaseClient';
import type { Session, User } from '@supabase/supabase-js';

export type UserRole = 'client' | 'admin' | null;

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [role, setRole] = useState<UserRole>(null);
    const [loading, setLoading] = useState(true);

    // Fonction pour récupérer le rôle depuis la table profiles
    const fetchProfile = async (userId: string) => {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', userId)
                .single();

            if (error) throw error;
            setRole(data?.role || 'client');
        } catch (err) {
            console.error('Erreur lors de la récupération du profil:', err);
            setRole('client'); // Rôle par défaut en cas d'erreur
        }
    };

    useEffect(() => {
        // 1. Initialisation au chargement
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchProfile(session.user.id).then(() => setLoading(false));
            } else {
                setLoading(false);
            }
        });

        // 2. Écouter les changements (connexion, déconnexion)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            if (session?.user) {
                setLoading(true);
                fetchProfile(session.user.id).then(() => setLoading(false));
            } else {
                setRole(null);
                setLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return { user, session, role, loading, signOut };
}