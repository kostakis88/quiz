import React from 'react';
import QuestionCard from './QuestionCard';
import Typografy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const App = () => {
 return (
   <Container>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center">
       <Typografy variant="h3" component="h1">
         The Ultimate Geography Quiz
       </Typografy>
     </Grid>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center">
      <Typografy variant="h5" component="h2">
        Score
      </Typografy>
     </Grid>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center">
      <QuestionCard/>
     </Grid>
   </Container>
 ); 
}

export default App;