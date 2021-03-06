import React from 'react';
import { Typography, withStyles, Grid, Paper } from '@material-ui/core';
import { kamal_pic } from '../assests/img/images';

const styles = theme => ({
  about: {
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
    },
  },
  intro: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '10px 30px',
  },
  img: {
    margin: '100px 10px 30px 10px',
    maxHeight: '175px',
    maxWidth: '200px',
    borderRadius: '5px',
  },
  skills: {
    padding: '20px',
    maxwidth: '20px',
  },
});

const About = ({ classes }) => {
  return (
    <Paper className={classes.about} id="about">
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <img src={kamal_pic} alt="selfie" className={classes.img} />
        </Grid>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h5" gutterBottom>
          Muhammad Kamal
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.intro} align="center" variant="subtitle1">
          A passionate Web developer.
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" className={classes.skills}>
          <strong>Skils:</strong> React, JavaScript, HTML, CSS, Bootstrap, Reactstrap, Material-UI
        </Typography>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(About);
