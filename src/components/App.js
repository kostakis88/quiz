import React, { useEffect, useState } from 'react';
import QuizAPI from './QuizAPI';
import QuestionCard from './QuestionCard';
import Typografy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const App = () => {

  const [question, setQuestion] = useState();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    QuizAPI.retrieveQuizQuestions()
      .then(res => res.json())
      .then( res => {
        setQuestion(res.results[counter].question)
        setAnswers([...res.results[counter].incorrect_answers, res.results[counter].correct_answer])
      })
  }, []);

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
      <QuestionCard 
        number={counter + 1}
        question={question}
        answers={answers} 
      />
     </Grid>
   </Container>
 ); 
}

export default App;