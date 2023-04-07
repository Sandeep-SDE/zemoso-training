import { screen, render } from "@testing-library/react";
import CheckBox from "./Index";

test("testing the checkbox",()=>{
    const {getByTestId} = render(<CheckBox/>);

    const checkBox = getByTestId("mui-checkbox");
    expect(checkBox).not.toHaveAttribute("color");
})