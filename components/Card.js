import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
});

export default function CustomCard({ title, image, text }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
