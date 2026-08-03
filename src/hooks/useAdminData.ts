import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';

export interface StyleRow {
  id: string;
  name: string;
}

export interface ProgressionRow {
  id: string;
  style_id: string;
  chords: string;
  reference: string;
  key_quality: string;
  styles?: { name: string };
}

export function useAdminData() {
  const [styles, setStyles] = useState<StyleRow[]>([]);
  const [progressions, setProgressions] = useState<ProgressionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const { data: stylesData, error: stylesError } = await supabase.from('styles').select('*').order('name');
      if (stylesError) throw stylesError;
      if (stylesData) setStyles(stylesData);

      const { data: progData, error: progError } = await supabase.from('progressions').select('*, styles(name)');
      if (progError) throw progError;
      if (progData) setProgressions(progData);
    } catch (err: any) {
      setErrorMsg(err.message || "Erreur lors de la récupération des données.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addStyle = async (name: string) => {
    setErrorMsg('');
    try {
      const { error } = await supabase.from('styles').insert([{ name }]);
      if (error) throw error;
      fetchData();
    } catch (err: any) {
      setErrorMsg(`Erreur (Style): ${err.message}`);
    }
  };

  const deleteStyle = async (id: string) => {
    setErrorMsg('');
    try {
      const { error } = await supabase.from('styles').delete().eq('id', id);
      if (error) throw error;
      fetchData();
    } catch (err: any) {
      setErrorMsg(`Impossible de supprimer le style : ${err.message}`);
    }
  };

  const addProgression = async (prog: Omit<ProgressionRow, 'id' | 'styles'>) => {
    setErrorMsg('');
    try {
      const { error } = await supabase.from('progressions').insert([prog]);
      if (error) throw error;
      fetchData();
    } catch (err: any) {
      setErrorMsg(`Erreur (Progression): ${err.message}`);
    }
  };

  const deleteProgression = async (id: string) => {
    setErrorMsg('');
    try {
      const { error } = await supabase.from('progressions').delete().eq('id', id);
      if (error) throw error;
      fetchData();
    } catch (err: any) {
      setErrorMsg(`Impossible de supprimer la progression : ${err.message}`);
    }
  };

  return { 
    styles, progressions, loading, errorMsg, 
    addStyle, deleteStyle, addProgression, deleteProgression 
  };
}