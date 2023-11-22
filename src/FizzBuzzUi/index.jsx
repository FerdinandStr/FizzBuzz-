import { useState } from "react"
import { fizzBuzzHandler } from "../FizzBuzzLogic/FizzBuzz"

function MainPage() {
    const [gameVariables, setGameVariables] = useState({
        target: 15,
        fizzDivider: 3,
        buzzDivider: 5,
        fizzBuzzOutput: [],
    })
    const { target, fizzDivider, buzzDivider, fizzBuzzOutput } = gameVariables
    const [errorMessage, setErrorMessage] = useState("")

    function handleGameVariableChange(obj) {
        setGameVariables((prevItem) => ({ ...prevItem, ...obj }))
    }

    function runFizzBuzzHandler() {
        try {
            const output = fizzBuzzHandler(target, fizzDivider, buzzDivider)
            handleGameVariableChange({ fizzBuzzOutput: output })
            setErrorMessage("")
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <div>
            <h1>FizzBuzz++</h1>
            <p>
                Info: Gib für das bekannte Spiel FizzBuzz deine eigenen Regeln vor und sieh dir das Ergebnis an! Es
                können nur natürliche Zahlen verwendert werden (1,2,3,...)
            </p>
            <div>
                <p>Ziel:</p>
                <input value={target} onChange={(e) => handleGameVariableChange({ target: e.target.value })} />

                <p>Fizz:</p>
                <input
                    value={fizzDivider}
                    onChange={(e) =>
                        handleGameVariableChange({
                            fizzDivider: e.target.value,
                        })
                    }
                />

                <p>Buzz:</p>
                <input
                    value={buzzDivider}
                    onChange={(e) =>
                        handleGameVariableChange({
                            buzzDivider: e.target.value,
                        })
                    }
                />
            </div>

            <div>
                <button onClick={() => runFizzBuzzHandler()}>Go!</button>
            </div>

            <div>{errorMessage ? errorMessage : null}</div>

            <p>Ergebnis:</p>
            <div>
                <ol>
                    {fizzBuzzOutput.map((el, i) => (
                        <li key={i}>{el}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default MainPage
