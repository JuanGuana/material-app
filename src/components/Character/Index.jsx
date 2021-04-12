import React from 'react'
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'
import styles from './styles'

const useStyles = makeStyles(styles);

const Character = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  console.log(data);
  return (
    <Card className={classes.root}>
      <CardMedia>
        <img className={classes.img} src={data.image} alt={data.name}/>
      </CardMedia>
        <Typography variant="h3">{data.name}</Typography>
      <CardContent className={classes.details}>
        <Typography className={classes.text} >Estado: {data.status}</Typography>
        <Typography className={classes.text} >Género: {data.gender}</Typography>
        <Typography className={classes.text} >Localizacion: {data.location.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default Character