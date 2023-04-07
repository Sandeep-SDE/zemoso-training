import { screen, render, getByTestId } from "@testing-library/react";
import CustomButton from "./Index";

test("test the button content", ()=>{
    const {getByTestId}  = render(<CustomButton/>);

    const button  = getByTestId("mui-button");
    expect(button).toHaveTextContent("Button");
});

test("test the button attribute", ()=>{
    const {getByTestId} = render(<CustomButton/>);

    //const button = screen.getByRole('Button', {name : "mui-button"});
    const button  = getByTestId("mui-button");
    expect(button).toHaveAttribute("type", "submit");
})