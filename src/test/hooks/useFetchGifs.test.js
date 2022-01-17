// import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';
describe('Pruebas en el hook useFetchGifs', () => {

  test('debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'))
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })
  test('debe retornar un arreglo de imagenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('one punch'))
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);

  })
})
