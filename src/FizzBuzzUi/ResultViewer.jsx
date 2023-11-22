import { useEffect } from "react"
import { FIZZ, BUZZ } from "../FizzBuzzLogic/FizzBuzz"
// import chartRenderer from "remoteApp/chartRenderer"

export default function ResultViewer({ fizzBuzzOutput }) {
    //Try loading remote Chart Module
    useEffect(() => {
        if (fizzBuzzOutput.length > 0) {
            // chartRenderer(fizzBuzzOutput)
            import("remoteApp/chartRenderer")
                .then((chartModule) => {
                    if (fizzBuzzOutput.length > 0) {
                        chartModule.default(fizzBuzzOutput)
                    }
                })
                .catch((e) => console.log("Chart import failed", e))
        }
    }, [fizzBuzzOutput])

    return (
        <>
            {fizzBuzzOutput.length > 1 ? (
                <div className="TextOutputContainer">
                    <ol className="ListStyle">
                        {fizzBuzzOutput.map((el, i) => (
                            <li key={i}>{fizzBuzzColorizer(el)}</li>
                        ))}
                    </ol>
                </div>
            ) : null}
            <div className="CanvasContainerStyle" id="CanvasContainer" />
        </>
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
