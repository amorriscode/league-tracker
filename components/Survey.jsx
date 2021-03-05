import { useState } from 'react'

import Section from './Section'
import QuizOption from './QuizOption'

const questions = [
  {
    id: 1,
    question:
      'Do you think getting the vaccine wil help us achieve herd immunity?',
    options: ['Yes', 'Not Sure', 'No'],
  },
  {
    id: 2,
    question: 'If offfered today, would you feel safe taking the vaccine?',
    options: ['Yes', 'Maybe', 'No'],
  },
  {
    id: 3,
    question: 'Do you trust the vaccine approval process?',
    options: ['Yes', 'Not Sure', 'No'],
  },
]

export default function Survey() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})

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
          <div className="font-bold">
            Answer the question on the left to see how your community has
            responded to the same question!
          </div>

          <img src="/Icon Man Wave.svg" className="ml-auto"></img>
        </div>
      </div>
    </Section>
  )
}
