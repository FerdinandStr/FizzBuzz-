import { fizzBuzzHandler } from "../../src/FizzBuzzLogic/FizzBuzz"

describe("Fizz Buzz Handler", () => {
    it("returns natural numbers from 1 to target 't' in an array", () => {
        const target = 10

        const output = fizzBuzzHandler(10)

        expect(output).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

    it("can take an integer input as target and return an array with the size of the integer", () => {
        const target = 11

        const output = fizzBuzzHandler(target)

        expect(output.length).toEqual(target)
    })

    it("takes a second argument fizzDivisor (f) and returns Fizz instead of the number if the number is divisible by (f)", () => {
        const target = 8
        const fizzDivisor = 4

        const output = fizzBuzzHandler(target, fizzDivisor)

        expect(output).toEqual([1, 2, 3, "Fizz", 5, 6, 7, "Fizz+"])
    })

    it("takes a third argument buzzDivisor (f) and returns Buzz instead of the number if the number is divisible by (f)", () => {
        const target = 10
        const fizzDivisor = 4
        const buzzDivisor = 5

        const output = fizzBuzzHandler(target, fizzDivisor, buzzDivisor)

        expect(output).toEqual([
            1,
            2,
            3,
            "Fizz",
            "Buzz",
            6,
            7,
            "Fizz",
            9,
            "Buzz",
        ])
    })

    it("prints FizzBuzz if the number is divisible by both fizzDivisor and buzzDivisor", () => {
        const target = 15
        const fizzDivisor = 3
        const buzzDivisor = 5

        const output = fizzBuzzHandler(target, fizzDivisor, buzzDivisor)

        expect(output).toEqual([
            1,
            2,
            "Fizz",
            4,
            "Buzz",
            "Fizz",
            7,
            8,
            "Fizz+",
            "Buzz",
            11,
            "Fizz",
            13,
            14,
            "FizzBuzz",
        ])
    })

    it("throws an error if one parameter is not a natural number", () => {
        expect(() => fizzBuzzHandler(4, 0, 3)).toThrow(TypeError)
    })

    it("tracks the amount of Fizz in a row and prints Fizz+, Fizz++ for each consecutive occurence without breaks", () => {
        const target = 5
        const fizzDivisor = 1

        expect(fizzBuzzHandler(target, fizzDivisor)).toEqual([
            "Fizz",
            "Fizz+",
            "Fizz++",
            "Fizz+++",
            "Fizz++++",
        ])
    })

    it("FizzBuzz works also if buzzDivisor is smaller than FizzDivisor", () => {
        const target = 4
        const fizzDivisor = 2
        const buzzDivisor = 1

        expect(fizzBuzzHandler(target, fizzDivisor, buzzDivisor)).toEqual([
            "Buzz",
            "FizzBuzz",
            "Buzz",
            "FizzBuzz",
        ])
    })
})
