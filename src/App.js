import React, {useState} from 'react'
import data from './data';
import {Question} from './Question'

function App() {
  const [questions, setQuestions] = useState(data)

  return <>
    <main className='container'>
      <section className="title">
        <p>Questions and answers about login</p>
      </section>
      <section className="questions">
        {
          questions.map(question => {
            return <Question key={question.id} {...question} />
          })
        }
      </section>
    </main>
  </>
}

export default App;
