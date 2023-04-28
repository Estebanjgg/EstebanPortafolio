import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero'
import Skill from '../components/Skills/Skills'
import { AboutTemplete } from "../templetes";
import { ContactTemplete } from "../templetes";
import { ProjectsTemplete } from "../templetes";
import { AcademicFormation } from '../templetes';
import { ThemeProvider } from '../components/ThemeSwitcher/ThemeContext';

interface FormationData {
  title: string;
  year: string;
  institution?: string;
  image?: string;
}

interface Props {
  trainings: FormationData[];
  courses: FormationData[];
}

export default function Home() {

  const [formationData, setFormationData] = useState<Props>({ trainings: [], courses: [] });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://gist.githubusercontent.com/Estebanjgg/30ef12d5d2a598ec3c75bc79b8cf9b78/raw/4a7b8d6545ea55f524799faef36f4789103e7427/dataFormation.json');
      const jsonData = await response.json();
      setFormationData(jsonData);
    }

    fetchData();
  }, []);
  return (
    <><ThemeProvider>
      <Hero/>
      <Skill/>
      <AcademicFormation trainings={formationData.trainings} courses={formationData.courses} />
      <ProjectsTemplete/>
      <AboutTemplete/>
      <ContactTemplete/>
      </ThemeProvider>
    </>
  )
}