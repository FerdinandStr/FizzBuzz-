import { useState } from "react"
import { fizzBuzzHandler, FIZZ, BUZZ } from "../FizzBuzzLogic/FizzBuzz"
import "./globalStyle.css"
import "./fizzBuzzStyle.css"
import Chart from "./Chart"

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
        setErrorMessage("")
        try {
            const fizzBuzzOutput = fizzBuzzHandler(target, fizzDivider, buzzDivider)
            handleGameVariableChange({ fizzBuzzOutput })
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="FizzBuzzContainer">
            <h1>
                <span className="FizzStyle">{FIZZ}</span>
                <span className="BuzzStyle">{BUZZ}</span>++
            </h1>
            <p>
                Info: Gib für das bekannte Spiel FizzBuzz deine eigenen Regeln vor und sieh dir das Ergebnis an! Es
                können nur natürliche Zahlen verwendert werden (1,2,3,...)
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

            {errorMessage ? <p className="ErrorStyle"> errorMessage </p> : null}

            <p>Ergebnis:</p>
            <div className="ResultContainer">
                <Chart data={fizzBuzzOutput} />
                <div className="OutputContainer">
                    <ol className="ListStyle">
                        {fizzBuzzOutput.map((el, i) => (
                            <li key={i}>{fizzBuzzColorizer(el)}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

function fizzBuzzColorizer(el) {
    switch (true) {
        case new RegExp(FIZZ + BUZZ).test(el):
            return (
                <>
                    <span className="FizzStyle">{FIZZ}</span>
                    <span className="BuzzStyle">{BUZZ}</span>
                    {plusColorizer(el)}
                </>
            )
        case new RegExp(FIZZ).test(el):
            return (
                <>
                    <span className="FizzStyle">{FIZZ}</span>
                    {plusColorizer(el)}
                </>
            )
        case new RegExp(BUZZ).test(el):
            return (
                <>
                    <span className="BuzzStyle">{BUZZ}</span>
                    {plusColorizer(el)}
                </>
            )
        default:
            return <span className="ListElementStyle">{el}</span>
    }
}

function plusColorizer(el) {
    if (el && el.match(/\++/)) {
        return el
            .match(/\++/)[0]
            .split("")
            .map((plus, i) => <span style={{ color: colorArray[i % 2] }}>{plus}</span>)
    }
}

const colorArray = ["var(--v-color2)", "var(--v-color1)"]

export default MainPage
