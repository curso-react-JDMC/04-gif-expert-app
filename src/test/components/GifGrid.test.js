import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {
  const category = 'Harry potter';

  test('debe mostrarse correctamente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot();
  })

  test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'http://google.com',
      title: 'ABC title',
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })

})
