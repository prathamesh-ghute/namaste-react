import { act, fireEvent, screen, render } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should load restuarant menu component",async () =>{

    await act(async () => render( <BrowserRouter > <Provider store={appStore}> <Cart /> <Header /> <RestaurantMenu /> </Provider> </BrowserRouter>))

    const accordionHeader = screen.getByText("Recommended(20)")
    fireEvent.click(accordionHeader);
    const food = screen.getAllByTestId("fooditems");
    expect(food.length).toBe(20);
    
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
    const addBtn = screen.getAllByRole("button", {name:"Add +"})
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
    
    expect(food.length).toBe(20);

    fireEvent.click(screen.getByRole("button", { name : "Clear Cart" }))
    
    expect(food.length).toBe(20);

    expect(screen.getByText("Cart is empty.Add Items to the Cart!")).toBeInTheDocument();
    
        
})