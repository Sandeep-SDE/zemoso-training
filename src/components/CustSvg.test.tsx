import { render, screen, waitFor } from '@testing-library/react';
import ServerResponse from './ServerResponse';

test("test the api req res", async ()=>{
    const {getByTestId} = render(<ServerResponse/>);
    const testData = getByTestId("test-case");

    await waitFor(()=>{
        expect(testData).not.toHaveTextContent("sandeep");
    })
})