import { createClient } from '@supabase/supabase-js';

//// On récupère les variables grâce à la syntaxe spécifique de Vite (import.meta.env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

//// Sécurité : on vérifie que les clés sont bien présentes pour éviter un crash silencieux
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Il manque les variables d'environnement Supabase ! Vérifie ton fichier .env.local");
}

//// On exporte le client pour pouvoir l'utiliser dans n'importe quel composant ou hook de l'app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);