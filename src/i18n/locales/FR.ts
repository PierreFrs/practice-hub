export default {
  translation: {
    // Commun
    "back": "← Retour",
    "loading": "Chargement...",
    
    // Landing Page
    "landing": {
      "title": "Practice Hub",
      "subtitle": "Choisissez votre module d'entraînement. Développez votre vocabulaire musical, votre technique et votre sens du rythme.",
      "settings_btn": "⚙️ Paramètres"
    },
    
    // Auth Page
    "auth": {
      "login_title": "Connexion",
      "signup_title": "Créer un compte",
      "login_subtitle": "Ravi de te revoir !",
      "signup_subtitle": "Rejoins Practice Hub pour sauvegarder ta progression.",
      "email_label": "Email",
      "email_placeholder": "ton@email.com",
      "password_label": "Mot de passe",
      "password_placeholder": "••••••••",
      "btn_login": "Se connecter",
      "btn_signup": "S'inscrire",
      "no_account": "Tu n'as pas de compte ?",
      "has_account": "Tu as déjà un compte ?",
      "verify_email": "Vérifie tes emails pour confirmer ton compte ! S'il est confirmé, tu peux te connecter.",
      "default_error": "Une erreur est survenue.",
      "server_error": "Erreur du serveur (500). L'envoi de l'email a probablement échoué."
    },

    // Paramètres
    "settings": {
      "title": "Mon Espace",
      "language_label": "Langue de l'interface",
      "account_section": "Mon Compte",
      "logout_btn": "Se déconnecter"
    },

    // Admin Dashboard
    "admin": {
      "back_link": "← Retour au site",
      "title": "🛠️ Back Office",
      "subtitle": "Gère les données de ton application Supabase en direct.",
      "loading": "Chargement des données...",
      "styles": {
        "title": "Styles ({{count}})",
        "placeholder": "Nouveau style (ex: Bossa Nova)",
        "add_btn": "+ Ajouter",
        "empty": "Aucun style trouvé."
      },
      "progressions": {
        "title": "Progressions ({{count}})",
        "choose_style": "-- Choisir un Style --",
        "chords_placeholder": "Accords (ex: ii7 - V7 - Imaj7)",
        "ref_placeholder": "Référence (ex: Autumn Leaves)",
        "add_btn": "+ Ajouter Progression",
        "unknown_style": "Inconnu",
        "empty": "Aucune progression trouvée."
      }
    },

    // Protected Route
    "protected": {
      "checking": "Vérification des autorisations...",
      "access_denied_title": "Accès Refusé",
      "access_denied_message": "Tu n'as pas les droits d'administrateur nécessaires pour voir cette page.",
      "back_home": "Retour à l'accueil"
    },

    // Chord Progressions Workout
    "chord_workout": {
      "back_button": "← Retour aux exercices",
      "title": "🎹 Style Progressions",
      "description": "Choisis un style pour générer une progression d'accords dans une tonalité aléatoire.",
      "loading_styles": "Chargement des styles...",
      "error_prefix": "Erreur :",
      "reference_label": "Référence du style :",
      "objective_label": "Objectif :",
      "objective_text": "Joue cette progression dans la tonalité indiquée. Essaie de repérer les degrés sur ton manche plutôt que de penser au nom des accords.",
      "empty_state": "👆 Sélectionne un style ci-dessus pour commencer."
    },

    // Rhythm Tree Workout
    "rhythm_tree": {
      "back_button": "← Retour aux exercices",
      "title": "🎸 Rhythm Tree",
      "description": "Génère un workout d'improvisation sous contrainte rythmique (32 mesures).",
      "generate_new": "Générer un autre workout",
      "generate_start": "Démarrer un workout",
      "progression_label": "Progression :",
      "measures": "Mesures {{start}}-{{end}}",
      "then": "puis"
    },

    "workouts": {
      "rhythm_tree": {
        "title": "Rhythm Tree Improv",
        "description": "Workout d'improvisation sur 32 mesures avec contraintes rythmiques et harmoniques aléatoires."
      },
      "chord_progressions": {
        "title": "Style Progressions",
        "description": "Génère des progressions d'accords (en degrés) dans une tonalité aléatoire selon ton style préféré."
      }
    }
  }
};