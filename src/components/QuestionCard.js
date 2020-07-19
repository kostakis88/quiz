import React from 'react';
import Card from '@material-ui/core/Card';
import Typografy from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center"
  }
});

const QuestionCard = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typografy variant="h5" component="h5">
            Question: 1/10
          </Typografy>
          <Typografy variant="h5" component="h5">
            Question Text Here
          </Typografy>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          variant="contained"
          aria-label="vertical outlined primary button group"
        >
          <Button>First Quiz Answer Here</Button>
        </ButtonGroup>
        </CardActions>
    </Card>
  );
}

export default QuestionCard;