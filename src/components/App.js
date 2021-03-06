import React, { useEffect, useState } from 'react';
import helperFunction from './helperFunction';
import QuizAPI from './QuizAPI';
import QuestionCard from './QuestionCard';
import End from './End';
import Typografy from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const App = () => {

  const [question, setQuestion] = useState();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [disabledButton, setDisabledButton] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [endMessage, setEndMessage] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    handleQuizQuestions(0);
  }, []);

  const handleQuizQuestions = (item) => {
    QuizAPI.retrieveQuizQuestions()
    .then(res => res.json())
    .then( res => {
      setCounter(item);
      setQuestion(res.results[item].question);
      let answersArray = [...res.results[item].incorrect_answers, res.results[item].correct_answer];
      let shuffledArray = helperFunction.shuffle(answersArray);
      setAnswers(shuffledArray);
      setCorrectAnswer(res.results[item].correct_answer);
    })
  } 

  const handleAnswerClick = (event) => {
    setButtonVisibility(true);
    if (event.target.parentNode.value) {
      if (event.target.parentNode.value !== correctAnswer) {
        event.target.parentNode.style.backgroundColor = 'red';
      } else {
        setScore(score + 10);
      }
    }
    setDisabledButton(true);
  }

  const handleContinueClick = () => {
    setButtonVisibility(false);
    setDisabledButton(false);
    if (counter < 9) {
      handleQuizQuestions(counter + 1);
    } else {
      setEndMessage(true);
    }
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
        Score: {score} / 100
      </Typografy>
     </Grid>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center">
      <QuestionCard 
        number={counter + 1}
        question={question}
        answers={answers}
        correct={correctAnswer}
        disabled={disabledButton}
        onClick={handleAnswerClick} 
      />
     </Grid>
     <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ display: buttonVisibility ? "flex" : "none" }}>
       <Button color="secondary" variant="contained" onClick={handleContinueClick}>Continue</Button>
     </Grid>
     {endMessage && <End score={score}/>}
   </Container>
 ); 
}

export default App;