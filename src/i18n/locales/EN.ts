export default {
  translation: {
    // Common
    "back": "← Back",
    "loading": "Loading...",
    
    // Landing Page
    "landing": {
      "title": "Practice Hub",
      "subtitle": "Choose your workout module. Develop your musical vocabulary, technique, and sense of rhythm.",
      "settings_btn": "⚙️ Settings"
    },
    
    // Auth Page
    // Auth Page
    "auth": {
      "login_title": "Login",
      "signup_title": "Create an account",
      "login_subtitle": "Welcome back!",
      "signup_subtitle": "Join Practice Hub to save your progress.",
      "email_label": "Email",
      "email_placeholder": "your@email.com",
      "password_label": "Password",
      "password_placeholder": "••••••••",
      "btn_login": "Sign in",
      "btn_signup": "Sign up",
      "no_account": "Don't have an account?",
      "has_account": "Already have an account?",
      "verify_email": "Check your emails to confirm your account! If it's confirmed, you can log in.",
      "default_error": "An error occurred.",
      "server_error": "Server error (500). Email delivery probably failed."
    },

    // Settings
    "settings": {
      "title": "My Space",
      "language_label": "Interface Language",
      "account_section": "My Account",
      "logout_btn": "Log out"
    },

    // Admin Dashboard
    "admin": {
      "back_link": "← Back to site",
      "title": "🛠️ Back Office",
      "subtitle": "Manage your Supabase app data live.",
      "loading": "Loading data...",
      "styles": {
        "title": "Styles ({{count}})",
        "placeholder": "New style (e.g. Bossa Nova)",
        "add_btn": "+ Add",
        "empty": "No style found."
      },
      "progressions": {
        "title": "Progressions ({{count}})",
        "choose_style": "-- Choose a Style --",
        "chords_placeholder": "Chords (e.g. ii7 - V7 - Imaj7)",
        "ref_placeholder": "Reference (e.g. Autumn Leaves)",
        "add_btn": "+ Add Progression",
        "unknown_style": "Unknown",
        "empty": "No progression found."
      }
    },

    // Protected Route
    "protected": {
      "checking": "Checking permissions...",
      "access_denied_title": "Access Denied",
      "access_denied_message": "You do not have the administrator rights required to view this page.",
      "back_home": "Back to home"
    },

    // Chord Progressions Workout
    "chord_workout": {
      "back_button": "← Back to exercises",
      "title": "🎹 Style Progressions",
      "description": "Choose a style to generate a chord progression in a random key.",
      "loading_styles": "Loading styles...",
      "error_prefix": "Error:",
      "reference_label": "Style reference:",
      "objective_label": "Objective:",
      "objective_text": "Play this progression in the indicated key. Try to map out the scale degrees on your fretboard instead of just thinking about chord names.",
      "empty_state": "👆 Select a style above to get started."
    },

    // Rhythm Tree Workout
    "rhythm_tree": {
      "back_button": "← Back to exercises",
      "title": "🎸 Rhythm Tree",
      "description": "Generate an improvisation workout under rhythmic constraints (32 measures).",
      "generate_new": "Generate another workout",
      "generate_start": "Start a workout",
      "progression_label": "Progression:",
      "measures": "Measures {{start}}-{{end}}",
      "then": "then"
    },

    "workouts": {
      "rhythm_tree": {
        "title": "Rhythm Tree Improv",
        "description": "32-measure improvisation workout with random rhythmic and harmonic constraints."
      },
      "chord_progressions": {
        "title": "Style Progressions",
        "description": "Generate chord progressions (in scale degrees) in a random key based on your preferred style."
      }
    }
  }
};