import React from 'react';
import { Typography, Chip } from '@mui/material';

const skills = [
  'React',
  'TypeScript',
  "JavaScript",
  'HTML',
  'CSS',
  'Sass',
  'Tailwind CSS',
  'Next.js',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  "XAMP",
  'Redux',
  'Redux-Saga',
  'MUI',
  'Axios',
  'Git'
];

const Resume: React.FC = () => {
  return (
    <section>
      <Typography variant="h4" gutterBottom>
        Привіт, я — Никита Вавилов
      </Typography>
      <Typography variant="h6" gutterBottom>
        Frontend-розробник
      </Typography>
      <Typography paragraph>
        I am a passionate Front-End developer with over 2 years of hands-on experience building dynamic and user-friendly web applications. Recently, I have started to expand my skills by diving into Backend development, aiming to build end-to-end solutions. During my time at CloverPlate (March 27, 2024 to August 27, 2024), I honed my knowledge of front-end technologies by collaborating on important projects and working in a fast-paced environment. Now, I am excited to leverage my skills in both Front-End and Backend to contribute to innovative and challenging
        projects..
      </Typography>
      <Typography variant="h6" gutterBottom>
        Навички:
      </Typography>
      {skills.map(skill => (
        <Chip key={skill} label={skill} color="primary" />
      ))}
    </section>
  );
};

export default Resume;
