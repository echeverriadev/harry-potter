import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HarryPotterPage from '../../src/pages/index';

describe('HarryPotterPage', () => {
  test('should renders correctly', () => {
    const { container } = render(<HarryPotterPage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('contains CharacterList component', () => {
    render(<HarryPotterPage />);
    const characterListElement = screen.getByText('Cargando...');
    expect(characterListElement).toBeInTheDocument();
  });
});
