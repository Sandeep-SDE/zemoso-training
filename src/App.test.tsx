import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button should have backgroundColor red', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('onclick button color should change', ()=>{
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton).toHaveTextContent('change to red');
});

// test("testing the story button component", () => {
//     render(<CustButton />);
//     const Button = screen.getByText("BUTTON");
//     expect(Button).toBeInTheDocument();
// })