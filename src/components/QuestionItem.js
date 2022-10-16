import React from "react";

function QuestionItem({ question, onDeleteQuestion, onQuestionUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => onDeleteQuestion(question))
  }

  function handleQuestionUpdate(e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correctIndex: parseInt(e.target.value,10)
      })
    })
    .then(res => res.json())
    .then((data) => onQuestionUpdate(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleQuestionUpdate}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
