import { useState, useEffect } from 'react';
import { supabase } from '../config/SupabaseClient';
import { ROOTS, type KeyQuality } from '../config/MusicConstants';

export interface ChordWorkoutState {
  root: string;
  style: string;
  chords: string;
  reference: string;
  keyQuality: KeyQuality;
}

export function useChordWorkoutGenerator() {
  const [workout, setWorkout] = useState<ChordWorkoutState | null>(null);
  const [activeStyle, setActiveStyle] = useState<string | null>(null);
  
  const [dbStyles, setDbStyles] = useState<{ id: string; name: string }[]>([]);
  const [dbProgressions, setDbProgressions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchMusicData = async () => {
      setLoading(true);
      setErrorMsg('');
      try {
        const { data: stylesData, error: stylesError } = await supabase
          .from('styles')
          .select('*')
          .order('name');
        
        if (stylesError) throw stylesError;
        if (stylesData) setDbStyles(stylesData);

        const { data: progData, error: progError } = await supabase
          .from('progressions')
          .select('*');
            
        if (progError) throw progError;
        if (progData) setDbProgressions(progData);

      } catch (err: any) {
        setErrorMsg(err.message || "Erreur de connexion à la base de données.");
      } finally {
        setLoading(false);
      }
    };

    fetchMusicData();
  }, []);

  const generateWorkout = (styleId: string, styleName: string) => {
    const availableProgressions = dbProgressions.filter(p => p.style_id === styleId);

    if (availableProgressions.length === 0) {
      alert(`Oups ! Aucune progression trouvée pour le style ${styleName} dans la base de données.`);
      return;
    }

    const randomRoot = ROOTS[Math.floor(Math.random() * ROOTS.length)];
    const randomProg = availableProgressions[Math.floor(Math.random() * availableProgressions.length)];
    
    setActiveStyle(styleId);
    
    setWorkout({
      root: randomRoot,
      style: styleName,
      chords: randomProg.chords,
      reference: randomProg.reference,
      keyQuality: randomProg.key_quality 
    });
  };

  // NOUVEAU : On filtre les styles pour ne garder que ceux qui ont au moins une progression
  const stylesWithProgressions = dbStyles.filter(style => 
    dbProgressions.some(prog => prog.style_id === style.id)
  );

  return { 
    workout, 
    activeStyle, 
    generateWorkout, 
    dbStyles: stylesWithProgressions, // On renvoie la liste filtrée à l'interface
    loading, 
    errorMsg 
  };
}