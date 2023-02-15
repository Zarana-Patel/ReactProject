import { render,fireEvent, screen } from '@testing-library/react';
import App from './App';

test('Add One', () => {
  render(<App />);

  //save the heading in a variable
 // const heading = screen.getByclassName("nav"); 
 // const linkElement = screen.getByText(/Home/i);
 // expect(linkElement).toBeInTheDocument();
});
