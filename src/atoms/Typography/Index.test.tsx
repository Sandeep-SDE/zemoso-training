import { screen, render } from "@testing-library/react";
import CustomTypography from "./Index";
import userEvent from "@testing-library/user-event";

test("test the typography", ()=>{
    const {getByTestId} = render(<CustomTypography/>);
    const typography = getByTestId("mui-typography");
    userEvent.unhover(typography);
    expect(typography).toHaveStyle('color: primary.main');
})