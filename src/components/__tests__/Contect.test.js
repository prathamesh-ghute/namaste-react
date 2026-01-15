import Contact from "../Contact";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"


// grouping test cases : //unit testing
describe("Contact us page Test Cases", () =>{
    // triger before test cases.
    beforeAll(() =>{
        console.log("Before All");
        
    })
// triger before each test cases.
    beforeEach(()=>{
        console.log("Before Each");
        
    })
// trigger after all test cases run completly
    afterAll(() =>{
        console.log("After All ");
        
    })
// trigger after each test cases.
    afterEach(() =>{
        console.log("After Each");
        
    })
    
    // test and it are same for testcases
    it("should load contact us component", () =>{

        render(<Contact />);
        const heading =  screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    })

    it("should load button inside Contact component", () =>{

        render(<Contact />);
        //    const button =  screen.getByRole("button");
        const button =  screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    })


    test("should load input name inside Contact component", () =>{

        render(<Contact />);
        const inputName =  screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();
    })

    test("should load 2 input boxes on the Contact component", () =>{
    //1. render
        render(<Contact/>)

    // for multiple items use All
    //2. query
        const inputBoxes = screen.getAllByRole("textbox")
        // console.log(inputBoxes.length);

        // 3.Assertion
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).not.toBe(2);
    })
})
