import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero'
import Skill from '../components/Skills/Skills'
import { AboutTemplete } from "../templetes";
import { ContactTemplete } from "../templetes";
import { ProjectsTemplete } from "../templetes";
import { AcademicFormation } from '../templetes';

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
      const response = await fetch('https://gist.githubusercontent.com/Estebanjgg/30ef12d5d2a598ec3c75bc79b8cf9b78/raw/7609e155d072f8e517092000c4df267530539229/dataFormation.json');
      const jsonData = await response.json();
      setFormationData(jsonData);
    }

    fetchData();
  }, []);
  return (
    <>
      <Hero/>
      <Skill/>
      <AcademicFormation trainings={formationData.trainings} courses={formationData.courses} />
      <ProjectsTemplete/>
      <AboutTemplete/>
      <ContactTemplete/>

    </>
  )
}