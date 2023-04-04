import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import CustButton from './stories/Button';
import App from './App';

test('test the button have backgroundColor red', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('test the button when click it', ()=>{
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