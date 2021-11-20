import React, { useState, useEffect } from 'react';
import TechnologyCard from '../components/Technologies/TechnologyCard';
import { getAllTech } from '../Helpers/ProjectData';

export default function TechnologiesPage() {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllTech().then((techArray) => {
      if (isMounted) setTech(techArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {tech
        ? tech.map((obj) => (
          <TechnologyCard key={tech.firebaseKey} tech={obj} />
        ))
        : ''}
    </div>
  );
}
