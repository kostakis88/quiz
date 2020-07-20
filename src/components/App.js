import React, { useEffect, useState } from 'react';
import QuizAPI from './QuizAPI';
import QuestionCard from './QuestionCard';
import Typografy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const App = () => {

  const [question, setQuestion] = useState();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(false);

  useEffect(() => {
    handleQuizQuestions(0);
  }, []);

  const handleQuizQuestions = (item) => {
    QuizAPI.retrieveQuizQuestions()
    .then(res => res.json())
    .then( res => {
      setCounter(item + 1);
      setQuestion(res.results[item].question)
      setAnswers([...res.results[item].incorrect_answers, res.results[item].correct_answer])
    })
  } 

  const handleAnswerClick = (event) => {
    setButtonVisibility(true);
  }

  const handleContinueClick = () => {
    setButtonVisibility(false);
    handleQuizQuestions(counter);
  }

 return (
   <Container>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center">
       <Typografy variant="h3" component="h1">
         The Ultimate Geography Quiz
       </Typografy>
     </Grid>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center">
      <Typografy variant="h5" component="h2">
        Score: 0
      </Typografy>
     </Grid>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center">
      <QuestionCard 
        number={counter + 1}
        question={question}
        answers={answers}
        onClick={handleAnswerClick} 
      />
     </Grid>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ display: buttonVisibility ? "flex" : "none" }}>
       <Button color="secondary" variant="contained" onClick={handleContinueClick}>Continue</Button>
     </Grid>
   </Container>
 ); 
}

export default App;