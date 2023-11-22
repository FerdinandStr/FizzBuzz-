import { lazy, useEffect, useState } from "react"
import { fizzBuzzHandler, FIZZ, BUZZ } from "../FizzBuzzLogic/FizzBuzz"
import "./globalStyle.css"
import "./fizzBuzzStyle.css"
import ResultViewer from "./ResultViewer"

function MainPage() {
    const [gameVariables, setGameVariables] = useState({
        target: 15,
        fizzDivider: 3,
        buzzDivider: 5,
        fizzBuzzOutput: [],
        errorMessage: "",
    })
    const { target, fizzDivider, buzzDivider, fizzBuzzOutput, errorMessage } = gameVariables

    function handleGameVariableChange(obj) {
        setGameVariables((prevItem) => ({ ...prevItem, ...obj }))
    }

    //Load FizzBuzzData on Button Press
    function runFizzBuzzHandler() {
        handleGameVariableChange({ errorMessage: "", fizzBuzzOutput: [] })

        try {
            const fizzBuzzOutput = fizzBuzzHandler(target, fizzDivider, buzzDivider)
            handleGameVariableChange({ fizzBuzzOutput })
        } catch (e) {
            handleGameVariableChange({ errorMessage: e.message })
        }
    }

    return (
        <div className="FizzBuzzContainer">
            <h1>
                <span className="FizzStyle">{FIZZ}</span>
                <span className="BuzzStyle">{BUZZ}</span>++
            </h1>
            <p className="InfoTextStyle">
                <i>
                    Info: Gib für das bekannte Spiel FizzBuzz deine eigenen Regeln vor und sieh dir das Ergebnis an! Es
                    können nur natürliche Zahlen verwendert werden (1, 2, 3, ...)
                </i>
            </p>
            <div>
                <div className="InputContainer">
                    <p>Ziel:</p>
                    <input
                        className="InputStyle"
                        value={target}
                        onChange={(e) => handleGameVariableChange({ target: e.target.value })}
                    />
                </div>

                <div className="InputContainer">
                    <p>{FIZZ}:</p>
                    <input
                        className="InputStyle"
                        value={fizzDivider}
                        onChange={(e) =>
                            handleGameVariableChange({
                                fizzDivider: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="InputContainer">
                    <p>{BUZZ}:</p>
                    <input
                        className="InputStyle"
                        value={buzzDivider}
                        onChange={(e) =>
                            handleGameVariableChange({
                                buzzDivider: e.target.value,
                            })
                        }
                    />
                </div>
            </div>

            <div>
                <button className="ButtonStyle" onClick={() => runFizzBuzzHandler()}>
                    Start!
                </button>
            </div>

            {errorMessage ? <p className="ErrorStyle"> {errorMessage} </p> : null}

            <ResultViewer fizzBuzzOutput={fizzBuzzOutput} />
        </div>
    )
}

export default MainPage
