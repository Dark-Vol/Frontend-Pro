import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        Контакти:{' '}
        <Link href="mailto:youremail@example.com">youremail@example.com</Link> |{' '}
        <Link href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
