import { AppBar, Box, Container, Grid, Paper, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Character from '../components/Character/Index';
import getAllCharacters from '../helpers/getFecthData';
import styles from './styles'

const useStyles = makeStyles(styles)

function App() {
  const [characterList, setCharacterList] = useState([]);
  const classes = useStyles();
  const getListCharacter = async () => {
    const data = await getAllCharacters();
    setCharacterList(data);
  };

  useEffect(() => {
    getListCharacter();
  }, []);

  return (
    <>
    <AppBar className={classes.appBar}  >
      <Toolbar className={classes.toolBar} >
        <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Rick and Morty logo'/>
        <a className={classes.link} href="https://rickandmortyapi.com/documentation/">DOC</a>
      </Toolbar>
    </AppBar>
    <Container component={Box} pt={8}>
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
    </>
  )
}

export default App;
