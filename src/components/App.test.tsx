import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders title', () => {
    const { getByText } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const titleElement = getByText(/Welcome to React/i);
    expect(titleElement).toBeInTheDocument();
});
