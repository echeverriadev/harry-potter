import { getCharacters } from '../../src/helpers/get-characters';
import { api } from '../../src/services/harry-potter.api';

jest.mock('../../src/services/harry-potter.api', () => ({
  api: {
    get: jest.fn(),
  },
}));

describe('getCharacters', () => {
  it('returns data when api request is successful', async () => {
    const data = [
      { name: 'Harry Potter', house: 'Gryffindor' },
      { name: 'Hermione Granger', house: 'Gryffindor' },
    ];

    (api.get as jest.Mock).mockResolvedValue({ data });

    const result = await getCharacters();
    expect(result).toEqual(data);
  });

  it('returns error when api request fails', async () => {
    const error = new Error('Error simulado');

    (api.get as jest.Mock).mockRejectedValue(error);

    const result = await getCharacters();
    expect(result).toEqual(error);
  });
});
