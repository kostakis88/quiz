class QuizAPI {
  retrieveQuizQuestions() {
    return fetch("https://opentdb.com/api.php?amount=10&category=22&type=multiple");
  }
}

export default new QuizAPI();