import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Button,
} from '@mui/material';

interface Person {
  name: string;
  gender: string;
  birth_year: string;
}

const SwapiPage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPageExists, setNextPageExists] = useState(true);

  const fetchPeople = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://swapi.dev/api/people/?page=${pageNum}`);
      setPeople(res.data.results);
      setNextPageExists(!!res.data.next);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPeople(page);
  }, [page]);

  return (
    <section>
      <Typography variant="h4" gutterBottom>
        Star Wars Characters (SWAPI)
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <List>
            {people.map(person => (
              <ListItem key={person.name}>
                <ListItemText
                  primary={person.name}
                  secondary={`Gender: ${person.gender}, Birth Year: ${person.birth_year}`}
                />
              </ListItem>
            ))}
          </List>
          <div>
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Попередня
            </Button>
            <Button disabled={!nextPageExists} onClick={() => setPage(page + 1)}>
              Наступна
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default SwapiPage;
