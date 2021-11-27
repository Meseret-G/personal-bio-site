import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 345,
  // },
  media: {
    height: 140,
  },
});

export default function Technologies({ tech }) {
  const classes = useStyles();

  return (
    <div className="techdiv">
      <Card className="techcard">
        <CardActionArea className="cardarea">
          <CardMedia
            className={classes.media}
            image={tech.imageUrl}
            title="logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tech.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
Technologies.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
