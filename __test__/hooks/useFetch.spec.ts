import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../../src/hooks/useFetch';

describe('useFetch Custom Hook', () => {
  test('The custom hook should return to the initial state', () => {
    const { result } = renderHook(() => useFetch());
    const { data, loading, error } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('The custom hook must return the loaded state', async () => {
    const { result } = renderHook(() => useFetch());

    await waitFor(() => expect(result.current.loading).toBe(false), {
      timeout: 5000
    });

    const { data, loading, error } = result.current;

    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
});
