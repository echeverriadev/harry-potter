import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { CharacterList } from '../../src/components/CharacterList';

describe('CharacterList Component', () => {
  test('should render list of characters', async () => {
    render(<CharacterList />);
    await waitFor(() => {
      const list = screen.getByRole('list');
      expect(list).toBeInTheDocument();
    });
  });

  test('show message "Cargando" when loading prop is true', () => {
    render(<CharacterList />);

    const loadingElement = screen.getByText(/Cargando.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});