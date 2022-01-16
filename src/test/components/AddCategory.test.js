import { AddCategory } from './../../components/AddCategory.js';
import React from 'react';
const { shallow } = require("enzyme");

describe('Pruebas en AddCategory', () => {
  const setCategories = () => { };
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })
  test('', () => { })
})

