import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', ()=>{

  const title = 'Un titulo';
  const url = 'http://localhost/prueba';
  const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

  test('debe mostrar la prueba correctamente', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrafo con el title', ()=>{
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe tener la imagen igual al url y alt de los props',()=>{
    const img = wrapper.find('img');
    //console.log(img.prop('src'))
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  
  test('debe tener animate__fadeIn', ()=>{
    const div = wrapper.find('div');
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
  });
})


