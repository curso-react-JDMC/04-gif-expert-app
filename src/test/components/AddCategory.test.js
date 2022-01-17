import { AddCategory } from './../../components/AddCategory.js';
import React from 'react';
const { shallow } = require("enzyme");

describe('Pruebas en AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })
  test('debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', {
      target: { value }
    });

    expect(wrapper.find('p').text().trim()).toBe(value);
  })

  test('no debe postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(setCategories).not.toHaveBeenCalled();
  })

  test('debe llamar el setCategories y limpiar la caja de texto', () => {
    //1. simular el inputchange
    const input = wrapper.find('input');
    const value = 'pruebita';
    input.simulate('change', { target: { value } });
    //2. simular el submit
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    //3. setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //4. el valor del input debe estar vacio
    // console.log('input:', input.text())
    expect(input.prop('value')).toBe('');
  })
})

