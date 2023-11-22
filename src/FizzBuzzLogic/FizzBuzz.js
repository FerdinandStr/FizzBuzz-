function fizzBuzzHandler(target, fizzDivisor, buzzDivisor) {
    if (!isInputAccepted(target, fizzDivisor, buzzDivisor)) {
        throw new TypeError("Fehlerhafte Eingabe, bitte verwende nur natürliche Zahlen als Eingabe!")
    }

    let output = []

    for (let i = 1; i <= target; i++) {
        let nextOutput = getNextBasicOutput(i, fizzDivisor, buzzDivisor)

        //get lastTextOutput in output and check if nextOutput text matches
        const lastTextOutput = output.findLast((el) => isNaN(el))
        //if true, take lastTextOutput and add "+" as counter
        if (checkIfLastTextOutputMatchesNext(lastTextOutput, nextOutput)) {
            nextOutput = lastTextOutput + "+"
        }

        output = [...output, nextOutput]
    }

    return output
}

function getNextBasicOutput(i, fizzDivisor, buzzDivisor) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        return "FizzBuzz"
    }

    if (i % fizzDivisor === 0) {
        return "Fizz"
    }

    if (i % buzzDivisor === 0) {
        return "Buzz"
    }

    return i
}

function isInputAccepted(target, fizzDivisor, buzzDivisor) {
    //if one of the inputs is not a natural number (1, 2, 3, ...) return true
    if (
        !isNaturalNumber(target) ||
        (fizzDivisor !== undefined && !isNaturalNumber(fizzDivisor)) ||
        (buzzDivisor !== undefined && !isNaturalNumber(buzzDivisor))
    ) {
        return false
    }
    return true
}

function isNaturalNumber(number) {
    if (!isNaN(number) && number % 1 == 0 && number > 0) {
        return true
    }
    return false
}

function checkIfLastTextOutputMatchesNext(previousElement, matcher) {
    const regex = new RegExp("^" + matcher + "(?!\\w)", "g")
    if (typeof previousElement === "string" && regex.test(previousElement)) {
        return true
    }
    return false
}

export { fizzBuzzHandler }
