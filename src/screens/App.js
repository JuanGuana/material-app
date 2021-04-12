import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Character from '../components/Character/Index';
import getAllCharacters from '../helpers/getFecthData';

function App() {
  const [characterList, setCharacterList] = useState([]);

  const getListCharacter = async () => {
    const data = await getAllCharacters();
    setCharacterList(data);
  };

  useEffect(() => {
    getListCharacter();
  }, []);

  return (
    <Container>
      <Box m={1}>
        <Typography variant='h1' align='center'>
          Rick and Morty Characters
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {characterList.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Character data={item} />
          </Grid>
        ))}
      </Grid>
      <h1>HOLA MUNDO!</h1>
    </Container>
  );
}

export default App;
