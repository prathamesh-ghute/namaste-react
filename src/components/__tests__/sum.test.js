import { sum } from "../sum"


//unit testing
test("sum function should calculate the sum of two numbers",() =>{
    const result = sum(8,4)

    // Assertion
    expect(result).toBe(12);
})
