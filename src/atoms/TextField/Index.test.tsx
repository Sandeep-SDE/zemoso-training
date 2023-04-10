import { screen, render } from "@testing-library/react";
import InputField from "./Index";

test("check the hiight and width of Icon", ()=>{
    const {getByTestId} = render(<InputField/>);
    const text = getByTestId('mui-textfield');
    expect(text).not.toHaveAttribute('placeholder', 'enter your query here')
});
