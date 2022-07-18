import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders landing (login) page', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>    
      <App />
    </MemoryRouter>
  );
 
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByLabelText("Enter your password")).toBeInTheDocument();
});
