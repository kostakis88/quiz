import React from 'react';
import Typografy from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const End = () => {
  return (
      <Grid container item xs={12} direction="row" justify="center" alignItems="center">
        <Typografy variant="h5" component="h2">
          Thank You fro taking the quiz! Your final score is 0 ponts!
        </Typografy>
      </Grid>
  );
}

export default End;