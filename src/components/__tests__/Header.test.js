import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utils/appStore"
import {screen,render, fireEvent} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


//unit testing
it("should render header component with a login button", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );


    // if have more button use name for specific button
    const loginButton = screen.getByRole("button",{name: "Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})
//unit testing
it("should render header component with a cart items 0", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();
})
//unit testing
it("should render header component with a cart items", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/); // regex

    expect(cartItems).toBeInTheDocument();
})

//unit testing
it("should change login button to logout on click ", () =>{
    
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    
    // if have more button use name for specific button
    const loginButton = screen.getByRole("button",{name: "Login"});
    // const loginButton = screen.getByText("Login");
    
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name: "Logout"});


    expect(loginButton).toBeInTheDocument();
})


