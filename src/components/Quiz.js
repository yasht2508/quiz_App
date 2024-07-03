import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

     const { score, setScore, gameState, setGameState } = useContext(
        GameStateContext
    );
  
   


    const chooseOption = (option, e) => {

        const buttons = document.querySelectorAll('.questions button'); // reset style of all the buttons.
        buttons.forEach(button => {
            button.style.backgroundColor = '';
        });


        e.target.style.backgroundColor = 'gray'; // set the style of clicked button. 
        setOptionChosen(option);
    };

    const nextQuestion = () => {

        const buttons = document.querySelectorAll('.questions button'); // reset the style of all the buttons. 
        buttons.forEach(button => {
            button.style.backgroundColor = '';
        });

        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("finished");
    };

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="questions">
                <button
                    onClick={(e) => {
                        chooseOption("optionA", e);
                    }}
                >
                    {Questions[currentQuestion].optionA}
                </button>
                <button
                    onClick={(e) => {
                        chooseOption("optionB", e);
                    }}
                >
                    {Questions[currentQuestion].optionB}
                </button>
                <button
                    onClick={(e) => {
                        chooseOption("optionC", e);

                    }}
                >
                    {Questions[currentQuestion].optionC}
                </button>
                <button
                    onClick={(e) => {
                        chooseOption("optionD", e);
                    }}
                >
                    {Questions[currentQuestion].optionD}
                </button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} id="nextQuestion">
                    Finish Quiz
                </button>
            ) : (
                <button onClick={nextQuestion} id="nextQuestion">
                    Next Question
                </button>
            )}
        </div>
    );
}

export default Quiz;
