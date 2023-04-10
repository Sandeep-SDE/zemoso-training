import { screen, render } from "@testing-library/react";
import Icon from "./Index";

test("check the hiight and width of Icon", ()=>{
    render(<Icon/>);
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute("width", "16px");
    expect(icon).toHaveAttribute("height", "16px");
});
