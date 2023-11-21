function fizzBuzzHandler(target, fizzDivisor, buzzDivisor) {
    let output = []

    if (!isInputAccepted(target, fizzDivisor, buzzDivisor)) {
        throw new TypeError()
    }

    for (let i = 1; i <= target; i++) {
        const lastNaNElement = output.findLast((el) => isNaN(el))

        let nextOutput = getNextBasicOutput(i, fizzDivisor, buzzDivisor)

        if (checkIfPreviousElementMatchesNext(lastNaNElement, nextOutput)) {
            console.log("CHECK", lastNaNElement, nextOutput)
            nextOutput = lastNaNElement + "+"
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

function checkIfPreviousElementMatchesNext(previousElement, matcher) {
    const regex = new RegExp("^" + matcher + "(?!\\w)", "g")
    if (typeof previousElement === "string" && regex.test(previousElement)) {
        return true
    }
    return false
}

export { fizzBuzzHandler }
