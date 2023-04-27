import React, { useState, useEffect } from 'react';
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

const academiFormation = () => {
  const [formationData, setFormationData] = useState<Props>({ trainings: [], courses: [] });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://gist.githubusercontent.com/Estebanjgg/30ef12d5d2a598ec3c75bc79b8cf9b78/raw/b4917962c537c89cc5565e977f142c0c658599c4/dataFormation.json');
      const jsonData = await response.json();
      setFormationData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <AcademicFormation trainings={formationData.trainings} courses={formationData.courses} />
    </div>
  );
};

export default academiFormation;
