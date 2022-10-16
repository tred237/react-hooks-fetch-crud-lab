import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestions(data)) 
  }, [])

  function handleNewQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  console.log(questions)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onNewQuestionSubmit={handleNewQuestion}/> : <QuestionList questions={questions} setQuestions={setQuestions}/>}  
    </main>
  );
}

export default App;
