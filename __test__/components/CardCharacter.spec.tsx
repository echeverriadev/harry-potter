import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardCharacter } from '../../src/components/CardCharacter';
import path from 'path';

describe('CardCharacter Component', () => {
  const character = {
    id: 1,
    name: 'Harry Potter',
    house: 'Gryffindor',
    image: 'https://ik.imagekit.io/hpapi/harry.jpg',
  };

  test('renders correctly', () => {
    const { container } = render(<CardCharacter character={character} />);
    expect(container.firstChild).toHaveClass('group relative flex h-100 w-100 rounded-xl shadow-xl');
  });

  test('displays character name', () => {
    render(<CardCharacter character={character} />);
    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
  });

  test('displays character image', () => {
    render(<CardCharacter character={character} />);
    const image = screen.getByAltText('Harry Potter') as HTMLImageElement;
    expect(typeof image.src).toBe('string');
  });

  test('displays no profile picture when not have image', () => {
    const withoutImage = 'http://localhost/_next/image?url=%2Fprofile.webp&w=640&q=75';
    character.image = '';
    render(<CardCharacter character={character} />);
    const image = screen.getByAltText('Harry Potter') as HTMLImageElement;
    expect(image.src).toBe(withoutImage);
  });
});
