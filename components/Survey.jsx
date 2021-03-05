import { useEffect, useState } from 'react'

import Section from './Section'
import QuizOption from './QuizOption'

const questions = [
  {
    id: 1,
    question:
      'Do you think getting the vaccine wil help us achieve herd immunity?',
    options: ['Yes', 'Not Sure', 'No'],
    content: "Surveys taken in North America, Europe, and Middle East have shown that attitudes towards vaccination in 2021 are increasingly more positive than in 2020. "
  },
  {
    id: 2,
    question: 'If offered today, would you feel safe taking the vaccine?',
    options: ['Yes', 'Maybe', 'No'],
    content: "The percentage of people who need to be immune in order to achieve herd immunity varies with each disease. For example, herd immunity against measles requires about 95% of a population to be vaccinated. ",
  },
  {
    id: 3,
    question: 'Do you trust the vaccine approval process?',
    options: ['Yes', 'Not Sure', 'No'],
    content: "During vaccine development, vaccines are first tested in animals before being studied in humans. Testing in humans is done over three phases of clinical trials. These trials provide crucial information on vaccine safety as well as effectiveness. ",
  },
]

const results = {
  q0: {
    0: {
      numTimesAnswered: 32,
      percentage: 14,
    },
    1: {
      numTimesAnswered: 60,
      percentage: 26,
    },
    2: {
      numTimesAnswered: 142,
      percentage: 61,
    },
  },
  q1: {
    0: {
      numTimesAnswered: 8,
      percentage: 18,
    },
    1: {
      numTimesAnswered: 11,
      percentage: 25,
    },
    2: {
      numTimesAnswered: 25,
      percentage: 57,
    },
  },
  q2: {
    0: {
      numTimesAnswered: 99,
      percentage: 64,
    },
    1: {
      numTimesAnswered: 13,
      percentage: 8,
    },
    2: {
      numTimesAnswered: 43,
      percentage: 28,
    },
  },
}

export default function Survey() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  // const [results, setResults] = useState({});

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     fetch("https://boiling-stream-68989.herokuapp.com/questions/", {
  //     }).then((data)=>{return data.json()})
  //     .then((jsonData)=>{
  //       setResults(jsonData);
  //     })
  //   }, 50);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <Section title="Take the Survey!">
      <div className="rounded-lg bg-brand-blue-light grid grid-cols-2 gap-8">
        <div className="grid grid-cols-2 col-span-1 p-8 gap-4">
          <div className="flex justify-between flex-col">
            <h2 className="font-bold">{questions[questionIndex].question}</h2>

            <div>
              <div className="-ml-1 flex pt-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    className={`m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg ${
                      questionIndex === i ? 'bg-brand-blue' : 'bg-gray-300'
                    }`}
                    onClick={() => setQuestionIndex(i)}
                  />
                ))}
              </div>

              {questionIndex < 2 && (
                <div
                  className="flex hover:cursor-pointer"
                  onClick={() => setQuestionIndex(questionIndex + 1)}
                >
                  <div className="text-sm pt-1">NEXT QUESTION</div>
                  <img src="/arrow-right.svg" className="pl-3 pt-1 w-6 h-6" />
                </div>
              )}
            </div>
          </div>

          <div className="h-full flex items-center justify-around flex-col">
            {questions[questionIndex].options.map((option, index) => (
              <QuizOption
                option={option}
                selected={answers[questions[questionIndex].id] === index}
                onHandleSelect={() =>
                  setAnswers({
                    ...answers,
                    [questions[questionIndex].id]: index,
                  })
                }
              />
            ))}
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-2 -mb-6 pt-8 px-8">
          {answers[questions[questionIndex].id] != null ? (
            <div>
            <div className="font-bold">
              {results["q"+questionIndex][answers[questions[questionIndex].id]].percentage}% of quiz participants expressed the same feelings.
            </div>
            <br></br>
            <p>{questions[questionIndex].content}</p>
            </div>
          ) : (
            <div className="font-bold">
              Answer the question on the left to see how your community has
              responded to the same question!
            </div>
          )}

          <img src="/Icon Man Wave.svg" className="ml-auto"></img>
        </div>
      </div>
    </Section>
  )
}
