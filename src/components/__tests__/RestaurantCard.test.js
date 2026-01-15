import RestaurantCard  from "../RestaurantCard"
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock"
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../RestaurantCard"


//unit testing
it("shuold render RestaurantCard component with props Data ", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("ZAZA Mughal Biryani")
    expect(name).toBeInTheDocument();
});

// HOMEWORK :- //unit testing
it("shuold render RestaurantCard component with promoted label", () => {
    // Homework - test HDC : withPromotedLabel()
    
});
