import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders landing page', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>    
      <App />
    </MemoryRouter>
  );
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});
