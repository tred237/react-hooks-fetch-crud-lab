import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function handleDelete(question){
    const newQuestionList = questions.filter(element => element.id !== question.id)
    setQuestions(newQuestionList)
  }

  function onQuestionUpdate(question){
    const newQuestionList = questions.map(element => {
      if(question.id === element.id) return question

      return element
    })
    setQuestions(newQuestionList)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(element => <QuestionItem key={element.id} question={element} onDeleteQuestion={handleDelete} onQuestionUpdate={onQuestionUpdate}/>)}</ul>
    </section>
  );
}

export default QuestionList;
