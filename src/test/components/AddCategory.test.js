import { AddCategory } from './../../components/AddCategory.js';
import React from 'react';
const {shallow} = require("enzyme");

describe('Pruebas en AddCategory', () => {
    test('debe mostrarse correctamente',()=>{
        const setCategories = ()=>{};
        const wrapper = shallow(<AddCategory setCategories={ setCategories }/>); 
        expect(wrapper).toMatchSnapshot();
    })
})
